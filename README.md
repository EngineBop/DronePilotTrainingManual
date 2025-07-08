
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

In any mission-critical operation, being prepared for unexpected events is essential. The following emergency procedures cover typical in-flight issues and should be rehearsed during training. Always log any incident and report according to your organisation’s SOPs.

---

### 🔋 Low Battery

- **Threshold**: Begin Return-to-Home (RTH) at **25–30%** battery level depending on environmental conditions (wind, distance).
- **Action**:
  - Monitor battery warnings via DJI Pilot 2.
  - Initiate manual RTH or confirm auto-RTH triggers.
  - Avoid pushing limits to final 10% unless in visual proximity and low altitude.
- **Best Practice**: Set low battery warning and critical battery action (e.g., Auto Land or Auto RTH) in app settings.

---

### 📶 Signal Loss (RC Disconnect)

- **Default Behaviour**: Most systems (e.g., DJI) will initiate Auto RTH after **3–5 seconds** of signal loss if pre-configured.
- **Action**:
  - Remain calm and monitor the app display for signal reacquisition.
  - If Auto RTH fails, move to higher ground or open area to restore line of sight.
- **Prevention**:
  - Avoid flying behind buildings, terrain, or vegetation.
  - Maintain visual line-of-sight (VLOS) at all times.

---

### 📡 RTK Signal Loss

- **Symptoms**: Sudden drop in position accuracy (e.g., from cm-level to metres), GNSS alert in app.
- **Action**:
  - **Pause the flight** using the controller or app.
  - Wait briefly for RTK to reconnect.
  - If signal does not return, continue flight under GNSS-only mode *only if safe*.
- **Best Practice**:
  - Verify RTK status before takeoff.
  - Stay within the base station or NTRIP coverage area.
  - Consider GCPs or checkpoints for post-flight QA/QC if RTK drops persist.

---

### 🌦️ Sudden Weather Change

- **Risks**: Wind gusts, sudden rain, visibility loss, temperature drops.
- **Action**:
  - **Pause flight** immediately.
  - Assess direction and intensity of change.
  - **Land manually** at the nearest safe location—do not rely on RTH if strong wind is present.
- **Prevention**:
  - Use real-time weather tools (e.g., UAV Forecast, Windy).
  - Avoid launching if rain is forecast or cloud ceiling is low.

---

### 🧠 General Emergency Tips

- **Always keep the home point updated** if flying dynamically.
- **Have an alternate landing zone in mind** before takeoff.
- **Use screen recording** if possible during abnormal events for post-flight review.
- **Maintain calm, deliberate control inputs** in all scenarios.

---

## 📂 5. Post-Flight Data Management

### 💾 SD Card Handling
- Copy all contents to `Z:\Drone\YYYY-MM-DD\ProjectName`

### 🗂️ Folder Structure Example



ProjectName/
├── 01_Flight_Logs/
├── 02_Images/
│   └── JPG/
├── 03_Raw_RTK/
├── 04_Checkpoints/
└── 05_Exports/

---

## 🧰 6. DJI Terra – GCP Alignment Workflow

Accurate georeferencing of photogrammetry outputs is essential for engineering, surveying, and compliance workflows. Aligning your model with high-accuracy Ground Control Points (GCPs) ensures the final outputs (e.g., orthophotos, DEMs, contours) meet horizontal and vertical positional accuracy targets.

---

### 🎯 Goal

Align the drone imagery with surveyed Ground Control Points to:
- Improve spatial accuracy beyond GNSS-only image positions.
- Reduce geometric distortion in models.
- Ensure outputs match real-world coordinates (e.g., NZTM or local grid).
- Meet horizontal and vertical RMSE thresholds suitable for asset or earthworks projects.

---

### 🪜 Step-by-Step Workflow in DJI Terra

#### 1. 📁 Create New Mission and Import Images
- Launch **DJI Terra** and create a **2D Map** or **3D Model** project based on your mission type.
- Click **"Add Images"** and select the folder containing your `.JPG` images.
  - ✅ *Tip*: Ensure filenames haven’t changed since flight.
- Confirm the image coordinate system matches your camera metadata (typically WGS84).

---

#### 2. 📌 Import GCPs (Ground Control Points)
- Navigate to the **GCP Management** tab on the right panel.
- Click **“Import”** and load your GCP file (CSV or TXT).
  - Your file must include:
    ```
    Point Name, Latitude, Longitude, Altitude
    ```
    or for local grid:
    ```
    Point Name, Easting, Northing, Elevation
    ```
  - ✅ *Tip*: Ensure GCP coordinate system matches project CRS. Convert using a GIS tool if needed.
  - ✏️ Rename GCPs for clarity if they use ambiguous labels (e.g., “GCP01”, “CHK02”).

---

#### 3. 🖼️ Tag GCPs in Images
- For each GCP, select **3–5 high-quality images** that clearly show the ground target.
- Zoom in and click directly on the center of the physical marker.
  - The more accurately you tag, the better the model alignment.
  - Use oblique and nadir images for better geometry if available.
- DJI Terra may assist with predictive tagging if image overlap is good.
  - ✅ *Tip*: Use cross-shaped GCP markers with high contrast for best visibility.

---

#### 4. ✅ Check RMS Error and Residuals
- After tagging, DJI Terra will calculate the **Root Mean Square Error (RMSE)** for each point.
- Review both:
  - **Horizontal RMSE** – Aim for **<5 cm**
  - **Vertical RMSE** – Aim for **<10 cm**
- Investigate outliers:
  - Mis-tagged points
  - Low-quality images
  - Incorrect GCP elevations
- Use **Checkpoints** (non-adjusted GCPs) to validate accuracy independently.
  - 🧠 *Best Practice*: Use at least 2 checkpoints for every 5 GCPs.

---

#### 5. 🧠 Reprocess Model with GCPs
- Once satisfied with tagging and error thresholds:
  - Click **Reconstruct** and select **"High Accuracy"** mode.
  - Use **Real-Time Kinematic (RTK)** or **Post-Processed Kinematic (PPK)** image positions if available.
- Enable **“Use GCPs for Georeferencing”** during processing.
- When complete, review the final model alignment and export:
  - Orthomosaic
  - Digital Surface Model (DSM) or DEM
  - Contours
  - Point Cloud (if 3D)

---

### 📦 Output Validation Checklist

| Checkpoint | Pass Criteria |
|------------|---------------|
| ✔️ RMSE     | <5 cm XY, <10 cm Z |
| ✔️ Visual    | Model aligns tightly to road edges, buildings, fences, drains |
| ✔️ Consistency | No warping or misalignments at edges |
| ✔️ Report    | Include GCP residuals in QA/QC documentation |

---

### 🛠️ Pro Tips

- Always use **cross-checking** with checkpoints not included in model adjustment.
- Back up your **GCP CSV**, images, and Terra project folder before and after processing.
- Export a **GCP Residual Report** from DJI Terra for inclusion in QA packages.
- Use **consistent naming** across field sheets, CSV files, and tagging labels to avoid errors.
- For repeat surveys (e.g., stockpile volumes), use the **same GCPs** across time periods to improve comparison accuracy.

---

By following this GCP alignment workflow, you ensure deliverables are survey-grade and suitable for engineering, design, and compliance applications.

---

## 🌐 7. ArcGIS Pro – LAS to Raster Workflow

Converting raw point cloud data into usable elevation models is a foundational step in drone data processing. This workflow transforms `.las` or `.zlas` files into high-resolution **Digital Elevation Models (DEMs)** or **Digital Surface Models (DSMs)** for analysis, visualization, and volume calculations.

---

### 🎯 Goal

Produce either a **bare-earth surface (DEM)** or a **first-surface model (DSM)** from classified LAS point cloud data.

---

### 🪜 Step-by-Step Workflow

#### 1. 📥 Import LAS Dataset
- Use the **“LAS Dataset To Raster”** tool or create a **LAS Dataset Layer** in your map.
- Input `.las` or `.zlas` files from your project directory.
- Optional: Set projection if not already defined.

#### 2. ⚙️ Set Filter by Classification
Choose appropriate classification filter depending on output type:

| Model Type | Class Filter            | Description |
|------------|-------------------------|-------------|
| **DEM**    | Ground (Class = 2)       | Removes vegetation/buildings to reveal bare earth. |
| **DSM**    | First Return (Class = 1) | Includes trees, buildings, and surface objects.    |

- Open **Layer Properties > Symbology > Filter** or use the **“LAS Dataset To Raster”** tool parameters.

#### 3. 🧰 Export to Raster
Use the **LAS Dataset To Raster** tool from the 3D Analyst toolbox:

- **Value Field**: `Elevation`
- **Method**: `Binning`
- **Statistic Type**: `Average` (for smoother DEM), or `Minimum` (to reduce vegetation noise)
- **Void Fill Method**: Optional, e.g., Linear or Natural Neighbor
- **Interpolation**: Use `none` or `binning`—avoid kriging for large datasets unless necessary.

#### 4. 📏 Set Cell Size
- Choose **1m** or **2m** resolution depending on survey accuracy and project scope.
- Higher resolution (e.g., 0.5m) possible for small sites or where GNSS quality is high.

#### 5. 💾 Save Output Raster
- Output format: **File Geodatabase (FGDB) raster**
- Location: `Z:\Drone\YYYY-MM-DD\ProjectName\DEM.gdb`
- Filename: Use standard naming such as `DEM`, `DSM`, `Hillshade`, etc.

---

### 🖼️ Workflow Diagram

![LAS to Raster Workflow](./LAS_to_Raster_Workflow.png)

> 🔗 *Diagram: LAS dataset → Filter by class → Raster interpolation → FGDB output*

---

### ✅ Result

You now have a clean **DEM** or **DSM** raster ready for:
- Contour generation
- Volume calculations
- Cut/Fill analysis
- Terrain visualization
- Integration with Civil 3D or QGIS

---

### 🧠 Pro Tips

- Run **“LAS Point Statistics As Raster”** for QC before final export.
- For hillshades, use **“Hillshade”** tool after raster export for enhanced terrain visuals.
- Use **“Set Null”** or **“Raster Calculator”** to remove artifacts or vegetation islands if needed.
- Always back up `.las` and output `.tif` or `.img` files to long-term storage or cloud.

---

## 🧭 8. ArcGIS Pro – Generate Contours

Contour lines are vital for understanding terrain. They provide a clear and interpretable way to visualize elevation, slope, and form—especially useful in flood modelling, construction planning, earthworks, and asset management.

---

### 🎯 Goal

Convert a raster Digital Elevation Model (DEM) into clean, vector-based **contour lines** that:
- Represent changes in elevation at regular intervals
- Can be used in GIS, CAD, or field map applications
- Help identify terrain features like ridgelines, depressions, and gradients

---

### 🪜 Step-by-Step Workflow

#### 1. 🗺️ Add DEM to Map
- Start ArcGIS Pro and add your processed **DEM raster** to a new or existing map project.
- Make sure the raster is correctly georeferenced and displays continuous elevation values (not classified).

> 💡 *Why?* This step ensures you're working with accurate elevation data. DEMs are required to generate contours because they store elevation in a continuous surface format, unlike point clouds.

---

#### 2. 🧰 Run Contour Tool
- Open the **“Contour”** tool from:
  - `Toolboxes > Spatial Analyst Tools > Surface > Contour`
- Alternatively, search "Contour" in the **Geoprocessing pane**.

> 🧠 *Why?* This tool analyzes changes in cell values (elevation) and draws polylines where terrain crosses defined elevation levels.

---

#### 3. ⚙️ Set Contour Parameters

| Parameter        | Recommendation        | Purpose |
|------------------|------------------------|---------|
| **Input Raster** | Your processed DEM      | Source of elevation data |
| **Contour Interval** | `0.5m` or `1m`       | Smaller values give more detail; use `0.5m` for urban or engineered sites, `1m`+ for rural |
| **Base Contour** | `0`                     | Elevation to start contouring from (usually sea level or project datum) |
| **Output**       | `.gdb` feature class or `.shp` shapefile | Save in your project’s `Z:\Drone\YYYY-MM-DD\ProjectName\GIS.gdb` |

> 🎯 *Why interval matters*: Smaller intervals provide more detail but can result in clutter. Balance readability and purpose (e.g., volumetrics vs. presentation).

---

#### 4. 🎨 Symbolize and Label (Optional but Recommended)

- In the **Contents pane**, right-click the contour layer and choose **Symbology**:
  - Set line color, weight, and style (e.g., dashed for intermediate, bold for index lines).
- Use **Labeling tab** to enable labels:
  - Field = `Contour` (this stores the elevation value)
  - Position = above or centered
  - Font = simple and readable (e.g., Arial 9pt)

> 🧠 *Why?* Good labeling makes contours understandable at a glance. They become useful for surveyors, engineers, and stakeholders without needing to open the attribute table.

---

### 📈 Example: 1m Contours for Earthworks


Contours_1m/
├── Linear vector polylines representing 1m elevation changes
├── Derived from DEM with 1m cell size
├── Stored in GIS.gdb for compatibility with Civil 3D


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

## 🗂️ 10. Pre vs Post DEM Comparison

When monitoring site changes over time—such as construction progress, erosion, or material movement—you can compare two Digital Elevation Models (DEMs) to identify and quantify volumetric differences.

This is ideal for:
- Measuring excavation or fill on construction sites
- Detecting unauthorised earthworks
- Tracking stockpile growth or depletion
- Environmental restoration or degradation studies

---

### 🎯 Goal

Quantify the volumetric difference between two time-separated DEMs:
- **Pre-event DEM**: Captured before earthworks or environmental change
- **Post-event DEM**: Captured after the activity

The result is a **cut/fill volume map** and table showing where ground levels have increased or decreased.

---

### 🪜 Step-by-Step Workflow

#### 1. 📥 Load Both DEMs

- Add both the **pre-construction DEM** and **post-construction DEM** into your ArcGIS Pro project.
- Make sure they:
  - Cover the same extent
  - Share the same coordinate system
  - Use the same cell resolution (e.g., 1 m)

> 💡 *Tip*: Use “Project Raster” and “Resample” tools if needed to align them spatially and resolution-wise.

---

#### 2. ➖ Subtract Surfaces (Raster Calculator)

Open the **Raster Calculator** and subtract the two DEMs:


Difference = "Post_DEM" - "Pre_DEM"



---

## 🔢 11. QA/QC Checklist
- GCP RMS within targets
- DEM visual check (hillshade)
- LAS class stats valid
- Horizontal fit verified with known points

---

## 🏗️ 12. Integration with Autodesk Civil 3D

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
