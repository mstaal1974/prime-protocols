# GoHighLevel (GHL) Setup

GHL handles CRM, email/SMS automations, and lead pipelines. The doctor
enquiry form on the website POSTs directly to a GHL webhook, which fires
a workflow that creates the contact, tags them, and runs your nurture
sequence.

This guide covers the website-side integration. Pipeline setup, email
sequences, etc., are done inside GHL itself.

## 1. Create the workflow with a webhook trigger

In GHL:

1. **Automation** → **Workflows** → **Create Workflow** → **Start from scratch**
2. Name it: `Website — Doctor Enquiry`
3. Add a trigger: **Webhook**
4. GHL generates a webhook URL — looks like:
   ```
   https://services.leadconnectorhq.com/hooks/{your-location}/webhook-trigger/...
   ```
5. Copy this URL — it goes in `NEXT_PUBLIC_GHL_WEBHOOK_URL`

## 2. Map the incoming fields to contact fields

The website sends this JSON shape to the webhook:

```json
{
  "first_name": "string",
  "last_name": "string",
  "email": "string",
  "phone": "string",
  "specialty": "GP | Sports Medicine | Integrative Medicine | Other",
  "ahpra_number": "string",
  "practice_name": "string",
  "state": "NSW | VIC | QLD | SA | WA | TAS | ACT | NT",
  "message": "string (optional)",
  "source": "website-doctor-enquiry",
  "submitted_at": "ISO 8601 timestamp"
}
```

In the workflow:

1. After the webhook trigger, add a **Create/Update Contact** action
2. Map the standard fields: `first_name`, `last_name`, `email`, `phone`
3. For the rest, create **Custom Fields** in GHL first
   (Settings → Custom Fields → Create), then map them:
   - `specialty` → Custom field: "Medical Specialty" (single line)
   - `ahpra_number` → Custom field: "AHPRA Number" (single line)
   - `practice_name` → Custom field: "Practice Name" (single line)
   - `state` → Custom field: "State" (single line or dropdown)
   - `message` → Custom field: "Enquiry Message" (multi-line)
   - `source` → Custom field: "Lead Source" (single line) — useful for
     attribution if you add more forms later

## 3. Add tags and pipeline

After the Create Contact action, add:

1. **Add Tag** action — tag the contact `doctor-enquiry` and
   `source:website`. Tags drive segmentation later.
2. **Add to Pipeline** action — move them into your "Practitioner Leads"
   pipeline at the "New Enquiry" stage.
3. **Send Internal Notification** action — email/SMS to your clinical
   team that a new enquiry has come in.

## 4. Email response sequence (optional)

After the Create Contact action, add a **Wait** then **Send Email**:

- Wait: 5 minutes (so the email feels responsive without being instant
  and bot-like)
- Send email: "Thanks for your enquiry — a member of our clinical team
  will be in touch within 2 business days. Here's a bit more about how
  the practitioner protocol model works..."
- Wait 2 days, send a follow-up if the contact hasn't been moved to a
  later pipeline stage

This matches the promise in the form's confirmation message ("within 2
business days").

## 5. Activate the workflow

Top right of the workflow editor → toggle **Active**. Without this the
webhook accepts requests but the workflow doesn't fire.

## 6. Test before going live

In GHL: workflow editor → **Test** tab → **Send test webhook**. Use
sample data, confirm a contact appears in CRM.

From the website (once deployed with the env var set):
1. Submit the form on `/for-doctors` with test data
2. Refresh GHL → Contacts. New contact should appear within seconds
3. Tag should be applied; pipeline stage set; internal notification sent

If the form submits but no contact appears, check:
- The webhook URL is correct in Cloud Run env vars (no trailing whitespace)
- The workflow is **Active**
- The Create Contact action has email mapped (GHL requires email or
  phone to create a contact)

## 7. Set the env var in Cloud Run

Cloud Run → service `prime-protocols` → **Edit & Deploy New Revision** →
**Variables & Secrets** → add:

```
NEXT_PUBLIC_GHL_WEBHOOK_URL = https://services.leadconnectorhq.com/...
```

Hit **Deploy**. Within ~30 seconds the new revision is live and form
submissions flow into GHL.

## Patient enquiries

The current site has Halaxy handle patient booking directly. If you
later want patient enquiries to also flow through GHL (for retargeting,
nurture before booking, etc.), the pattern is:

1. Add a patient enquiry form on the relevant treatment page (or a
   dedicated `/enquire` page)
2. Build a `PatientEnquiryForm.tsx` component using the same pattern
   as `DoctorEnquiryForm.tsx`
3. Create a separate GHL workflow + webhook for patient enquiries
4. Add a second env var, e.g. `NEXT_PUBLIC_GHL_PATIENT_WEBHOOK_URL`

The architecture is already set up to support this — same pattern,
different webhook URL, different workflow on the GHL side.

## Notes

- **Webhook URL is public-facing.** It's exposed in the client bundle
  (the `NEXT_PUBLIC_` prefix). GHL webhooks are designed for this — they
  rate-limit, validate the payload shape, and you can rotate the URL if
  it's abused.
- **No PHI/PII in URLs.** The form data is POSTed in the request body,
  not the URL, so it's not logged in CDN access logs.
- **Form falls back gracefully** if the env var isn't set — the form
  shows "Thank you" but logs a console warning that nothing was actually
  submitted. Useful during local development.
