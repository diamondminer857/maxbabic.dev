---
title: "LoRaWAN 2.4 GHz Node"
description: "LilyGO T3 S3 sensor node paired with a MikroTik gateway, talking to The Things Network on the global ISM band."
year: "2026"
category: "Thesis"
tech: "C++ · LoRa"
github: "https://github.com/diamondminer857/LoRaWAN-2G4-Node"
featured: true
order: 1
---

The project that consumed most of my final year. A complete LoRaWAN sensor node
implementation on the 2.4 GHz band — uplink/downlink, OTAA join, sensor data
encoding, the whole stack.

## Stack

- **MCU**: ESP32-S3 on a LilyGO T3 S3 board
- **Radio**: Semtech SX1280 (2.4 GHz LoRa)
- **Gateway**: MikroTik wAP LR8 with concentrator card
- **Network**: The Things Network (TTN) v3
- **Firmware**: C++ with the LMIC stack

Full write-up of the design choices, RF measurements, and lessons learned
is in the [bachelor's thesis post-mortem](/blog/lorawan-thesis).
