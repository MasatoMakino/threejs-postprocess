FROM node:22-bookworm-slim

ENV DEBIAN_FRONTEND=noninteractive

RUN set -eux; \
    apt-get update; \
    apt-get install -y --no-install-recommends \
        ca-certificates \
        curl \
        gnupg \
        sudo \
        iptables ipset iproute2 dnsutils aggregate jq \
    ; \
    curl -fsSL https://dl.google.com/linux/linux_signing_key.pub \
        | gpg --dearmor -o /usr/share/keyrings/google-chrome.gpg; \
    echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/google-chrome.gpg] https://dl.google.com/linux/chrome/deb/ stable main" \
        > /etc/apt/sources.list.d/google-chrome.list; \
    apt-get update; \
    apt-get install -y --no-install-recommends \
        google-chrome-stable \
        xauth \
        xvfb \
    ; \
    rm -rf /var/lib/apt/lists/*

COPY firewall-base.sh /usr/local/bin/
COPY init-firewall.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/firewall-base.sh /usr/local/bin/init-firewall.sh && \
    echo "node ALL=(root) NOPASSWD: /usr/local/bin/init-firewall.sh" > /etc/sudoers.d/node-firewall && \
    chmod 0440 /etc/sudoers.d/node-firewall

RUN node --version && npm --version && google-chrome --version
