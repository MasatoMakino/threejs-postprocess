#!/bin/bash
# Claude Code sandbox firewall configuration
FIREWALL_ALLOW_SSH=true
FIREWALL_DOMAINS="registry.npmjs.org api.anthropic.com sentry.io statsig.anthropic.com statsig.com marketplace.visualstudio.com vscode.blob.core.windows.net update.code.visualstudio.com"
FIREWALL_VERIFY_URL="https://api.github.com/zen"
FIREWALL_VERIFY_NAME="GitHub API"
source /usr/local/bin/firewall-base.sh
