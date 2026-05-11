# Google Cloud Load Balancer + SSL Setup

Manual steps to configure the public-facing endpoint for primeprotocols.com.au.
Run once after `scripts/setup-gcp.sh`.

## 1. Reserve a global static IP

```bash
gcloud compute addresses create primeprotocols-lb-ip --global
gcloud compute addresses describe primeprotocols-lb-ip --global \
  --format='get(address)'
```

Note the IP — required for DNS.

## 2. Create a backend bucket with Cloud CDN

```bash
gcloud compute backend-buckets create primeprotocols-backend \
  --gcs-bucket-name=primeprotocols-com-au \
  --enable-cdn
```

## 3. Create URL map → HTTPS proxy → forwarding rule

```bash
gcloud compute url-maps create primeprotocols-url-map \
  --default-backend-bucket=primeprotocols-backend

gcloud compute ssl-certificates create primeprotocols-cert \
  --domains=primeprotocols.com.au,www.primeprotocols.com.au \
  --global

gcloud compute target-https-proxies create primeprotocols-https-proxy \
  --url-map=primeprotocols-url-map \
  --ssl-certificates=primeprotocols-cert

gcloud compute forwarding-rules create primeprotocols-https-rule \
  --address=primeprotocols-lb-ip \
  --global \
  --target-https-proxy=primeprotocols-https-proxy \
  --ports=443
```

## 4. HTTP → HTTPS redirect

```bash
cat > /tmp/redirect-map.yaml <<EOF
name: primeprotocols-redirect-map
defaultUrlRedirect:
  redirectResponseCode: MOVED_PERMANENTLY_DEFAULT
  httpsRedirect: True
EOF

gcloud compute url-maps import primeprotocols-redirect-map \
  --source=/tmp/redirect-map.yaml --global

gcloud compute target-http-proxies create primeprotocols-http-proxy \
  --url-map=primeprotocols-redirect-map

gcloud compute forwarding-rules create primeprotocols-http-rule \
  --address=primeprotocols-lb-ip \
  --global \
  --target-http-proxy=primeprotocols-http-proxy \
  --ports=80
```

## 5. DNS — Cloudflare

In Cloudflare, add an A record:
- Name: `@` (root)
- IPv4: the Load Balancer IP from step 1
- Proxy status: DNS only (grey cloud) initially; flip to Proxied (orange)
  once the Google-managed certificate has provisioned successfully

Add a second A record for `www` pointing at the same IP, or use a CNAME
to root.

Set Cloudflare SSL mode to "Full" (not "Flexible") — the Google Load
Balancer is serving real TLS.

## 6. Verify certificate provisioning

```bash
gcloud compute ssl-certificates describe primeprotocols-cert --global
```

`managed.status` should move from `PROVISIONING` to `ACTIVE` within
~30–60 minutes once DNS resolves.

## 7. Smoke test

```bash
curl -I https://primeprotocols.com.au
```

Expect `HTTP/2 200` plus the security headers configured in `next.config.ts`.
