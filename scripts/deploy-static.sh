#!/bin/bash
# Static export deployment to GCS bucket.
# Prerequisite: set output: 'export' in next.config.ts before running.

set -e

BUCKET="${BUCKET:-primeprotocols-com-au}"

echo "Building Next.js static export..."
npm run build

if [ ! -d "out" ]; then
  echo "Error: out/ directory not found. Ensure next.config.ts has output: 'export'."
  exit 1
fi

echo "Deploying to GCS bucket: $BUCKET"
gsutil -m rsync -d -r out/ "gs://$BUCKET/"

echo "Setting cache headers on HTML..."
gsutil -m setmeta -h "Cache-Control:public, max-age=3600" "gs://$BUCKET/**/*.html"

echo "Setting cache headers on hashed assets..."
gsutil -m setmeta -h "Cache-Control:public, max-age=31536000, immutable" "gs://$BUCKET/_next/static/**"

echo "Done."
echo "Live at: https://primeprotocols.com.au (assuming DNS + Load Balancer configured)"
