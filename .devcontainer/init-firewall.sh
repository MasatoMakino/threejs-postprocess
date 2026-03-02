#!/bin/bash
# npm runner firewall configuration
FIREWALL_ALLOW_SSH=false

# Shared: npm registry + ChromeDriver CDN (used by both containers)
FIREWALL_DOMAINS="registry.npmjs.org storage.googleapis.com edgedl.me.gvt1.com"

FIREWALL_VERIFY_URL="https://registry.npmjs.org/"
FIREWALL_VERIFY_NAME="npm registry"
source /usr/local/bin/firewall-base.sh
