
# 🚁 Drone Pilot Training Manual

## 📑 Table of Contents

- [✨ Overview](#-overview)
- [✈️ 1. Preflight Preparation](#️-1-preflight-preparation)
- [📌 2. On-Site Setup Options](#-2-on-site-setup-options)
- [🕹️ 3. Mission Planning in DJI Pilot 2](#-3-mission-planning-in-dji-pilot-2)
- [⚠️ 4. Emergency Procedures](#-4-emergency-procedures)
- [📂 5. Post-Flight Data Management](#-5-post-flight-data-management)
- [🧰 6. DJI Terra – GCP Alignment Workflow](#-6-dji-terra--gcp-alignment-workflow)
- [🌐 7. ArcGIS Pro – LAS to Raster Workflow](#-7-arcgis-pro--las-to-raster-workflow)
- [🧭 8. ArcGIS Pro – Generate Contours](#-8-arcgis-pro--generate-contours)
- [🪓 9. ArcGIS Pro – Cut/Fill Volume Analysis](#-9-arcgis-pro--cutfill-volume-analysis)
- [🔢 10. QA/QC Checklist](#-10-qaqc-checklist)
- [🏗️ 11. Integration with Autodesk Civil 3D](#-11-integration-with-autodesk-civil-3d)

---

## ✨ Overview

This guide provides a comprehensive workflow for drone pilots conducting aerial imagery, terrain mapping, and volume analysis missions. It includes best practices for flight planning, image capture, data processing, and integration with GIS and engineering tools.


---

## ✈️ 1. Preflight Preparation

### 🔺 Preflight Checklist

**Hardware:**
- Matrice 4E RTK charged
- RC Plus controller charged
- Propellers secure, gimbal lock removed
- MicroSD card inserted and formatted

**Software/Firmware:**
- Firmware updated (drone, camera, remote)
- DJI Pilot 2 updated

**Environmental:**

- ✅ **Weather and airspace checked**  
  Confirm forecast is suitable for flying (wind, rain, visibility) and check NOTAMs or airspace restrictions using AirShare or other relevant tools.

- ✅ **Launch site scouted and clear**  
  Ensure the takeoff and landing zone is flat, safe, and free from people, animals, overhead obstacles, and signal interference.

- ✅ **Sun angle suitable for mapping**  
  Plan to fly when the **sun is highest in the sky (around 11 AM to 2 PM)**. This reduces shadows from trees and structures, improving image quality for photogrammetry.

- ✅ **Water or tide conditions considered (if applicable)**  
  If near **rivers**, check for recent rain or elevated flows. In **coastal or estuarine areas**, consult **tide charts**:
  - Use **low tide** to expose more shoreline and intertidal zones.
  - Use **high tide** to capture flooded extents or marine infrastructure under typical conditions.


---
## 📌 2. On-Site Setup Options

Choosing the correct setup method for your drone mission is critical to achieving the positional accuracy required for your project. Below are four common options, each with its benefits, limitations, and typical use cases.

---

### ▶️ 2.1 Relative Survey

- **No Ground Control Points (GCPs)** or known benchmarks are used.
- Ideal for **quick site visits**, **progress photos**, or **visual inspections** where high spatial accuracy isn't a priority.
- **Fastest setup time** — launch and fly without additional equipment.
- **Accuracy is limited** to the onboard GPS of the drone, typically within 1–3 meters horizontally.
- **Not suitable** for survey-grade mapping or engineering deliverables.

> ⚠️ Use with caution: Best for non-critical mapping where spatial precision is not needed.

---

### ▶️ 2.2 Ground Markers with Rover GPS

- **Visible ground markers** (spray-painted “X”s, checkerboards, or vinyl targets) are placed before the flight.
- Each marker is **surveyed with a high-precision RTK or PPK rover** to capture their real-world coordinates.
- Markers should be **clearly visible in 3+ photos** from different angles to ensure accurate tie-in during processing.
- Significantly improves **absolute accuracy** of the final outputs when processed with GCPs.
- Ideal for **engineering surveys**, **volume calculations**, and **compliance-grade outputs**.

> ✅ Recommended when accuracy is critical but an RTK-enabled drone setup isn’t available or reliable.

---

### ▶️ 2.3 D-RTK 2 Base Station

- A **DJI-branded GNSS base station** that communicates directly with RTK-enabled DJI drones.
- Set up the base station on a **tripod**:
  - Over a **known point** (preferred) for georeferenced outputs.
  - Or on an **arbitrary point** if relative accuracy is sufficient.
- **Pair the base station to the drone via DJI Pilot 2**.
- Wait for **GNSS lock and RTK initialization** before flying.
- Provides **real-time corrections** to the aircraft, achieving **2–5 cm horizontal accuracy**.

> 🎯 Best used in **open-sky rural areas** with poor mobile signal or when you want full control of the correction source.

---

### ▶️ 2.4 NTRIP RTK

- Uses **mobile internet (SIM card or hotspot)** to connect the drone’s remote controller to an **online GNSS correction service**.
- Requires entry of:
  - **Caster IP/URL**
  - **Mountpoint name**
  - **Username and password**
- The aircraft receives corrections over the air and shows an **RTK FIX** once locked.
- Requires **good cellular signal** on-site to maintain correction stream.
- Great for **urban or coastal areas** where correction networks (e.g., NZ LINZ PositioNZ, Auscors) are available.

> 🌐 Most convenient for **high-accuracy work** without needing extra hardware, assuming reliable mobile coverage.

---

## 🕹️ 3. Mission Planning in DJI Pilot 2

### 🔹 Parameters for Aerial Grid Flights
- **Flight Mode:** Photogrammetry
- **Altitude:** 60m AGL (best trade-off between GSD and coverage)
- **Overlap:** 80% front, 70% side
- **Speed:** 5–7 m/s
- **Camera Angle:** 90° (NADIR)

### 📷 Camera Settings (Photo)

| Setting       | Value          |
|--------------|----------------|
| ISO          | 100            |
| Shutter      | 1/800–1/1000s  |
| Aperture     | f/5.6–f/8      |
| White Balance| Sunny (Manual) |
| Focus        | Manual (∞)     |

### 🎥 Video Settings

| Setting        | Value           |
|---------------|-----------------|
| Resolution     | 4K (3840x2160)  |
| Frame Rate     | 60 fps          |
| Shutter Speed  | 1/120 sec       |
| ISO            | 100–400         |
| Color Profile  | D-Cinelike      |
| Bitrate        | High / Max      |

### 🛑 Airspace Compliance Checklist (Must Do Before Flight)

- ✅ **Log your flight in [AirShare](https://www.airshare.co.nz)**.
- ✅ **Check for restricted airspace or NOTAMs** in your planned area.
        - ✅ **Contact local Bay of Plenty TAs** for guidance/permits when operating in parks, reserves, or within 4 km of aerodromes:
  - **Tauranga City Council** – [flying‑drones‑or‑uavs](https://www.tauranga.govt.nz/exploring/parks-and-reserves/using-our-parks/flying-drones-or-uavs)
  - **Western Bay of Plenty District Council** – [drones](https://www.westernbay.govt.nz/recreation/drones)
  - **Rotorua Lakes Council** – [drones in Rotorua](https://www.rotorualakescouncil.nz/parks-lakes-recreation/drones-in-rotorua) (including [PDF flyer](https://www.rotorualakescouncil.nz/repository/.../Drone_Flyer_Draft_V6_FA.pdf))
  - **Whakatāne District Council** – [flying‑drones‑district](https://www.whakatane.govt.nz/residents/flying-drones-district)
  - **Ōpōtiki District Council** – [Opotīki aerodrome drone page](https://www.odc.govt.nz/our-district/parks-and-reserves/opotiki-aerodrome); apply via their [UAV consent form](https://online.odc.govt.nz/online-services/new/uavconsent/step/1)
- ✅ **Contact local ATC or aerodrome manager** if operating near controlled zones or within 4 km of an airport.
- ✅ **Obtain any necessary permits** (e.g., flying over DOC land, near schools, or public events).
- ✅ **Review Civil Aviation Rules Part 101** if operating under standard certification.

---

## ⚠️ 4. Emergency Procedures
- Low Battery: RTH at 25–30%
- Signal Loss: Auto RTH if configured
- RTK Loss: Pause and reconnect
- Weather Change: Pause and land manually

---

## 📂 5. Post-Flight Data Management

### 💾 SD Card Handling
- Copy all contents to `Z:\Drone\YYYY-MM-DD\ProjectName`

### 🗂️ Folder Structure Example

```
ProjectName/
├── 01_Flight_Logs/
├── 02_Images/
│   └── JPG/
├── 03_Raw_RTK/
├── 04_Checkpoints/
└── 05_Exports/
```

---

## 🧰 6. DJI Terra – GCP Alignment Workflow

### 🎯 Goal:
Align the photogrammetry model with high-accuracy GCPs.

### Step-by-Step:
1. 📁 Import Images: Create new 2D/3D mission and add captured images.
2. 📌 Import GCPs: Go to GCP Manager and load CSV file.
3. 🖼️ Tag GCPs: Tag each GCP in 3–5 images.
4. ✅ Check RMS Error: Target <5 cm horizontal, <10 cm vertical.
5. 🧠 Reprocess with GCPs: Run model with High Accuracy.

---

## 🌐 7. ArcGIS Pro – LAS to Raster Workflow

### 🎯 Goal:
Convert classified `.las` data into DEM or DSM.

### Step-by-Step:
1. 📥 Import LAS Dataset
2. ⚙️ Set Filter (Class = Ground or First Return)
3. 📤 Export to Raster
   - Value Field: Elevation
   - Interpolation: Binning (Average/Minimum)
   - Cell Size: 1m or 2m
   - Save to FGDB on `Z:` drive

✅ Your DEM/DSM is now ready.

---

## 🧭 8. ArcGIS Pro – Generate Contours

### 🎯 Goal:
Create clean vector contour lines from raster DEM.

### Step-by-Step:
1. 🗺️ Add DEM to Map
2. 🧰 Run Contour Tool
3. Set:
   - Interval: 0.5m or 1m
   - Base Contour: 0
   - Output: FGDB or shapefile
4. 🎨 Symbolize and label as needed

---

## 🪓 9. ArcGIS Pro – Cut/Fill Volume Analysis

### 🎯 Goal:
Calculate volume difference between two surfaces or baseline.

### Scenario 1: DEM vs 60m Flat Surface
1. Create Flat Raster: `Base60 = 60` (Raster Calculator)
2. Run Cut Fill Tool
   - Input: DEM
   - Base: Base60
   - Output: CutFill_Map
3. 📘 Interpret:
   - Positive = Fill
   - Negative = Cut
4. 📊 Report:
   - Use Zonal Statistics as Table
   - Volume in m³

---

## 🔢 10. QA/QC Checklist
- GCP RMS within targets
- DEM visual check (hillshade)
- LAS class stats valid
- Horizontal fit verified with known points

---

## 🏗️ 11. Integration with Autodesk Civil 3D

### 🔄 Export from ArcGIS Pro
- DEM: GeoTIFF or ASCII Grid
- Contours: 2D or 3D shapefile
- LAS: Full classified cloud

### 🔄 Import to Civil 3D
- DEM: Surface from DEM (TIN)
- Contours: Assign elevation > build TIN
- LAS: Import or convert to RCS
- CRS: NZGD2000 / NZTM

---

> **Note:** Replace screenshots with your own if preferred. This Markdown is GitHub-ready.
