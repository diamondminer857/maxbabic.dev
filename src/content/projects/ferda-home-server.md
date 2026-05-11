---
title: "ferda — home server"
description: "My personal Linux box running Jellyfin, Immich, Seafile, and other services behind Cloudflare tunnels."
year: "Ongoing"
category: "Self-hosted"
tech: "Linux · Docker"
order: 4
---

My personal home server, named *ferda*. Runs a handful of self-hosted
services exposed through Cloudflare Tunnels, with no open ports on the
home router.

## What's running

- **Jellyfin** for media streaming
- **Immich** for photo backup
- **Seafile** for file sync
- **Cockpit** for system management
- A few other things I keep forgetting about

The whole thing sits behind Cloudflare's WAF with geo-restrictions and
bot challenges, which has been a fun rabbit hole in itself.
