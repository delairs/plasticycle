#!/bin/sh
set -e

envconsul -config=/vault/secrets/envconsul.hcl npm run build

envconsul -config=/vault/secrets/envconsul.hcl npm run dev -- --host 0.0.0.0 --port 5173