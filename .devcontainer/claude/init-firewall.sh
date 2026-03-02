#!/bin/bash
# Claude Code sandbox firewall configuration
FIREWALL_ALLOW_SSH=false

# Shared: npm registry + ChromeDriver CDN (same as npm runner)
BASE_DOMAINS="registry.npmjs.org storage.googleapis.com edgedl.me.gvt1.com"
# Claude Code API communication
CLAUDE_DOMAINS="api.anthropic.com sentry.io statsig.anthropic.com statsig.com"
FIREWALL_DOMAINS="$BASE_DOMAINS $CLAUDE_DOMAINS"

FIREWALL_VERIFY_URL="https://api.anthropic.com/"
FIREWALL_VERIFY_NAME="Anthropic API"
source /usr/local/bin/firewall-base.sh
