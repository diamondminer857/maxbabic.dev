---
title: "Building a 2.4 GHz LoRaWAN sensor node — the bachelor thesis post-mortem"
description: "What I learned designing, building, and (mostly) debugging a LoRaWAN node on the global ISM band."
date: 2026-05-08
tag: "RF"
---

After several months of work, my bachelor's thesis is finally done and defended.
The project was a LoRaWAN sensor node operating on the 2.4 GHz ISM band — an
unusual choice, since most LoRa deployments stick to the more forgiving sub-GHz
bands. This is a write-up of what worked, what didn't, and what I'd do differently.

## The hardware

The node is built around a **LilyGO T3 S3** development board, which combines an
ESP32-S3 with a Semtech SX1280 LoRa transceiver — the only widely-available chip
that actually does LoRa modulation at 2.4 GHz. On the gateway side, I used a
**MikroTik wAP LR8** with the appropriate concentrator card, talking to **The
Things Network** for the LoRaWAN backend.

Sounds simple on paper. It wasn't.

## What went wrong (a lot)

The 2.4 GHz band is *extremely* busy. Wi-Fi, Bluetooth, microwave ovens,
ZigBee — they all live there. LoRa's processing gain helps, but only so much.
My early range tests from the dormitory rooftop failed catastrophically: I was
getting under 100 meters of reliable range in conditions where I expected 1–2 km.

After a lot of debugging, the culprit turned out to be — surprise — the dorm's
own Wi-Fi access points, which were doing channel sweeping right across my LoRa
frequencies. SF12 just couldn't punch through.

There was also a fun bug in the early TX power configuration where ChatGPT-generated
boilerplate set the PA to 10 dBm instead of the safer 3–4 dBm. Nothing got fried,
but the spectrum analyzer was not happy.

## What I'd do differently

1. **Test the RF environment first.** A simple spectrum scan would have saved
   me weeks. I assumed the rooftop would be clean. It very much was not.
2. **Don't trust generated config blindly.** Especially for things that can
   physically damage hardware. Read the datasheet.
3. **Pick a less crowded band if you can.** 2.4 GHz LoRa is fascinating
   academically but operationally painful.

## What's next

The thesis is submitted, the grade is in, and I'm done with this particular
RF rabbit hole for now. Source code and full write-up are on
[GitHub](https://github.com/diamondminer857/LoRaWAN-2G4-Node) if you're curious.
