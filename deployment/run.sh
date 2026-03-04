#!/bin/sh
set -e

echo "Loading env from Vault..."

exec envconsul -config=/vault/secrets/envconsul.hcl -- \
npm run dev -- --host 0.0.0.0 --port 5173