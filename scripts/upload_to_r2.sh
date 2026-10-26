#!/usr/bin/env bash
set -e

BUCKET="bank-mfs"

echo "=== Uploading Bank & MFS Logos to Cloudflare R2: $BUCKET ==="

# Upload banks
for file in dist/assets/logos/banks/*; do
  fname=$(basename "$file")
  echo "Uploading logos/banks/$fname..."
  npx wrangler r2 object put "$BUCKET/logos/banks/$fname" --file="$file"
done

# Upload MFS
for file in dist/assets/logos/mfs/*; do
  fname=$(basename "$file")
  echo "Uploading logos/mfs/$fname..."
  npx wrangler r2 object put "$BUCKET/logos/mfs/$fname" --file="$file"
done

echo "=== All assets uploaded successfully to Cloudflare R2! ==="
