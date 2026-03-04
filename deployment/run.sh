#!/bin/sh
set -e

# Build pakai env dari Vault
./envconsul -config=/vault/secrets/envconsul.hcl npm run build

# Start dev server pakai env dari Vault
./envconsul -config=/vault/secrets/envconsul.hcl npm run dev -- --host 0.0.0.0 --port 5173