'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Button from '@/components/ui/Button'
import { SITE } from '@/lib/constants'
import { cn } from '@/lib/utils'

// Strategy doc §9 — informed consent / disclaimer framework for patient
// intake to be confirmed via Halaxy. For this practitioner-facing form,
// privacy consent is explicit and required.
// TODO[LAUNCH]: Confirm with solicitor that the Privacy Policy is final
// before this form goes live (it currently links to a placeholder page).

const doctorEnquirySchema = z.object({
  firstName: z.string().min(2, 'First name required'),
  lastName: z.string().min(2, 'Last name required'),
  specialty: z.enum(['GP', 'Sports Medicine', 'Integrative Medicine', 'Other'], {
    errorMap: () => ({ message: 'Please select a specialty' }),
  }),
  ahpraNumber: z.string().min(5, 'Valid AHPRA number required'),
  practiceName: z.string().min(2, 'Practice name required'),
  state: z.enum(['NSW', 'VIC', 'QLD', 'SA', 'WA', 'TAS', 'ACT', 'NT'], {
    errorMap: () => ({ message: 'Please select a state' }),
  }),
  email: z.string().email('Valid email required'),
  phone: z.string().min(8, 'Valid phone number required'),
  message: z.string().optional(),
  privacyConsent: z.boolean().refine((v) => v === true, {
    message: 'You must agree to the Privacy Policy',
  }),
})

type DoctorEnquiry = z.infer<typeof doctorEnquirySchema>

const fieldClass =
  'w-full rounded border border-grey-300 bg-white px-4 py-2.5 text-sm text-navy placeholder-grey-400 focus:border-steel focus:outline-none focus:ring-2 focus:ring-steel/30 transition-colors'
const labelClass = 'mb-2 block text-xs font-semibold uppercase tracking-wider text-grey-700'
const errorClass = 'mt-1.5 text-xs text-red-600'

export default function DoctorEnquiryForm() {
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<DoctorEnquiry>({
    resolver: zodResolver(doctorEnquirySchema),
    mode: 'onBlur',
  })

  const onSubmit = async (_data: DoctorEnquiry) => {
    // INTEGRATION: Replace with real submission endpoint.
    // For now: simulate a delay then show the success state.
    setSubmitError(null)
    try {
      await new Promise((r) => setTimeout(r, 600))
      setSubmitted(true)
    } catch {
      setSubmitError(
        `Something went wrong. Please email us directly at ${SITE.email}.`
      )
    }
  }

  if (submitted) {
    return (
      <div className="rounded-md border border-steel-200 bg-steel-50 p-8 text-center">
        <h3 className="font-display text-xl font-semibold text-navy">Thank you.</h3>
        <p className="mt-3 text-grey-700">
          We have received your enquiry and will be in touch within 2 business days.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      data-poppy-form="true"
      noValidate
      className="space-y-6"
      aria-label="Practitioner enquiry form"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className={labelClass}>
            First name <span className="text-red-600">*</span>
          </label>
          <input
            id="firstName"
            type="text"
            autoComplete="given-name"
            {...register('firstName')}
            className={cn(fieldClass, errors.firstName && 'border-red-500')}
            aria-invalid={!!errors.firstName}
          />
          {errors.firstName && <p className={errorClass}>{errors.firstName.message}</p>}
        </div>
        <div>
          <label htmlFor="lastName" className={labelClass}>
            Last name <span className="text-red-600">*</span>
          </label>
          <input
            id="lastName"
            type="text"
            autoComplete="family-name"
            {...register('lastName')}
            className={cn(fieldClass, errors.lastName && 'border-red-500')}
            aria-invalid={!!errors.lastName}
          />
          {errors.lastName && <p className={errorClass}>{errors.lastName.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="specialty" className={labelClass}>
          Medical specialty <span className="text-red-600">*</span>
        </label>
        <select
          id="specialty"
          {...register('specialty')}
          defaultValue=""
          className={cn(fieldClass, errors.specialty && 'border-red-500')}
          aria-invalid={!!errors.specialty}
        >
          <option value="" disabled>
            Select specialty
          </option>
          <option value="GP">GP</option>
          <option value="Sports Medicine">Sports Medicine</option>
          <option value="Integrative Medicine">Integrative Medicine</option>
          <option value="Other">Other</option>
        </select>
        {errors.specialty && <p className={errorClass}>{errors.specialty.message}</p>}
      </div>

      <div>
        <label htmlFor="ahpraNumber" className={labelClass}>
          AHPRA registration number <span className="text-red-600">*</span>
        </label>
        <input
          id="ahpraNumber"
          type="text"
          {...register('ahpraNumber')}
          className={cn(fieldClass, errors.ahpraNumber && 'border-red-500')}
          aria-invalid={!!errors.ahpraNumber}
        />
        {errors.ahpraNumber && <p className={errorClass}>{errors.ahpraNumber.message}</p>}
      </div>

      <div>
        <label htmlFor="practiceName" className={labelClass}>
          Practice name <span className="text-red-600">*</span>
        </label>
        <input
          id="practiceName"
          type="text"
          autoComplete="organization"
          {...register('practiceName')}
          className={cn(fieldClass, errors.practiceName && 'border-red-500')}
          aria-invalid={!!errors.practiceName}
        />
        {errors.practiceName && <p className={errorClass}>{errors.practiceName.message}</p>}
      </div>

      <div>
        <label htmlFor="state" className={labelClass}>
          State <span className="text-red-600">*</span>
        </label>
        <select
          id="state"
          {...register('state')}
          defaultValue=""
          className={cn(fieldClass, errors.state && 'border-red-500')}
          aria-invalid={!!errors.state}
        >
          <option value="" disabled>
            Select state
          </option>
          {['NSW', 'VIC', 'QLD', 'SA', 'WA', 'TAS', 'ACT', 'NT'].map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        {errors.state && <p className={errorClass}>{errors.state.message}</p>}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={labelClass}>
            Email <span className="text-red-600">*</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            {...register('email')}
            className={cn(fieldClass, errors.email && 'border-red-500')}
            aria-invalid={!!errors.email}
          />
          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone <span className="text-red-600">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            {...register('phone')}
            className={cn(fieldClass, errors.phone && 'border-red-500')}
            aria-invalid={!!errors.phone}
          />
          {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Message / areas of interest <span className="text-grey-400">(optional)</span>
        </label>
        <textarea
          id="message"
          rows={4}
          {...register('message')}
          className={cn(fieldClass, 'resize-y')}
        />
      </div>

      <div>
        <label className="flex items-start gap-3 text-sm text-grey-700">
          <input
            type="checkbox"
            {...register('privacyConsent')}
            className="mt-1 h-4 w-4 rounded border-grey-300 text-steel-dark focus:ring-steel"
          />
          <span>
            I have read and agree to the{' '}
            <a href="/privacy-policy" className="underline underline-offset-4 decoration-steel text-navy">
              Privacy Policy
            </a>
            . I understand my information will be used to respond to my enquiry.
          </span>
        </label>
        {errors.privacyConsent && <p className={errorClass}>{errors.privacyConsent.message}</p>}
      </div>

      {submitError && (
        <div className="rounded border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700">
          {submitError}
        </div>
      )}

      <div className="pt-2">
        <Button
          type="submit"
          label={isSubmitting ? 'Submitting…' : 'Submit Practitioner Enquiry'}
          variant="primary"
          size="lg"
          fullWidth
          disabled={isSubmitting}
          withArrow={!isSubmitting}
        />
        <p className="mt-3 text-center text-xs text-grey-500">
          A member of our clinical team will contact you within 2 business days.
        </p>
      </div>
    </form>
  )
}
