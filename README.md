
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
- Weather and airspace checked (Have logged in AirShare, have contacted any necessary authorities preflight).
- Launch site scouted and clear
- Sun angle suitable for mapping

---

## 📌 2. On-Site Setup Options

### ▶️ 2.1 Relative Survey
- No GCPs or benchmarks
- Fast deployment
- Reduced accuracy

### ▶️ 2.2 Ground Markers with Rover GPS
- Paint visible markers ("X")
- Record GCPs with RTK rover
- Ensure visibility in multiple images

### ▶️ 2.3 D-RTK 2 Base Station
- Set up on tripod over known/unknown point
- Pair with aircraft via DJI Pilot 2
- Wait for initialization and lock

### ▶️ 2.4 NTRIP RTK
- Connect RC to mobile internet
- Configure mountpoint, username, password
- Confirm RTK lock

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
