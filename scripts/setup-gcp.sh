#!/bin/bash
# One-time GCP infrastructure setup for Prime Protocols.
# Run from gcloud-authenticated terminal.

set -e

PROJECT_ID="${PROJECT_ID:-prime-protocols-prod}"
REGION="australia-southeast1"
BUCKET="primeprotocols-com-au"

echo "Setting active project: $PROJECT_ID"
gcloud config set project "$PROJECT_ID"

echo "Enabling required APIs..."
gcloud services enable \
  run.googleapis.com \
  cloudbuild.googleapis.com \
  secretmanager.googleapis.com \
  storage.googleapis.com \
  compute.googleapis.com \
  --project="$PROJECT_ID"

echo "Creating GCS bucket (Sydney region): $BUCKET"
gsutil mb -l "$REGION" "gs://$BUCKET" || echo "Bucket exists, continuing..."

echo "Making bucket publicly readable..."
gsutil iam ch allUsers:objectViewer "gs://$BUCKET"

echo "Configuring bucket for static web hosting..."
gsutil web set -m index.html -e 404.html "gs://$BUCKET"

echo "Creating placeholder secrets in Secret Manager..."
echo -n "PLACEHOLDER_REPLACE_BEFORE_LAUNCH" | \
  gcloud secrets create halaxy-booking-url \
  --data-file=- --project="$PROJECT_ID" || echo "Secret exists, skipping..."

echo -n "hello@primeprotocols.com.au" | \
  gcloud secrets create contact-email \
  --data-file=- --project="$PROJECT_ID" || echo "Secret exists, skipping..."

cat <<EOF

GCP infrastructure setup complete.

Next steps:
  1. Update the halaxy-booking-url secret with the real URL:
       echo -n "https://halaxy.com/your-real-url" | \\
         gcloud secrets versions add halaxy-booking-url --data-file=-
  2. Configure Load Balancer + SSL — see docs/gcp-load-balancer-setup.md
  3. Update DNS in Cloudflare to point at the Load Balancer IP
  4. Deploy via Cloud Build (see cloudbuild.yaml) or GitHub Actions
EOF
