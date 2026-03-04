#!/bin/sh
set -e

exec envconsul -config=/vault/secrets/envconsul.hcl -- \
  sh -c 'npm run dev -- --host 0.0.0.0 --port 5173'