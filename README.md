# 🚁 Engineering & Survey Drone Operations and Training Manual

**Integrated review draft v3.1** · 16 October 2026

**Bay of Plenty Regional Council — Engineering, Rivers & Drainage**

This is the practical training manual and field reference for BOPRC's engineering survey drones. It is designed to be printed, used during training and kept for later reference.

> **Published review edition:** Live aviation information, permissions, weather and site conditions must be checked for every flight.

## Start here

| Resource | Open it |
|---|---|
| **Complete online manual** | [Open the BOPRC Engineering Drone Manual](https://boprc-drone-operations-manual.lissanddanvan.chatgpt.site/) |
| **Animated overview** | [Watch “Why and how we use drones”](https://boprc-drone-operations-manual.lissanddanvan.chatgpt.site/purpose-animation-final.html) |
| **Practice theory test** | [Take the no-login online test](https://boprc-drone-operations-manual.lissanddanvan.chatgpt.site/theory-test.html) |
| **Printable manual** | [Download the PDF](https://boprc-drone-operations-manual.lissanddanvan.chatgpt.site/downloads/BOPRC-Engineering-Survey-Drone-Manual.pdf) |

The complete website is stored in [`docs/`](docs/). It includes every manual section, the approved animation, the theory test, images and downloadable resources. The long-form Markdown manual continues below in this README so it can also be read directly on GitHub.

## Downloads and templates

- [DJI Terra ground-control-point CSV template](templates/dji-terra-ground-control-points.csv)
- [DJI Terra independent-checkpoint CSV template](templates/dji-terra-independent-checkpoints.csv)
- [CSV template instructions](templates/README.md)
- [290 mm survey-control target 3D-print files](downloads/survey-control-target/README.md)

## Contents

1. [Purpose and operational responsibilities](#1-purpose-and-operational-responsibilities)
2. [Airspace and permissions](#2-airspace-and-permissions)
3. [Plan, fly and respond safely](#3-plan-fly-and-respond-safely)
4. [Aircraft, servicing and permanent survey control](#4-aircraft-servicing-and-permanent-survey-control)
5. [On-site positioning options](#5-on-site-positioning-options)
6. [Mission planning and capture](#6-mission-planning-and-capture)
7. [Post-flight data management](#7-post-flight-data-management)
8. [DJI Terra processing and control](#8-dji-terra-processing-and-control)
9. [ArcGIS Pro elevation products](#9-arcgis-pro-elevation-products)
10. [Surface comparison and volumes](#10-surface-comparison-and-volumes)
11. [QA, acceptance and Civil 3D handover](#11-qa-acceptance-and-civil-3d-handover)
12. [Sources and items to confirm](#12-sources-and-items-to-confirm)

### How to read the labels

- **Legal requirement** — comes from the current aviation rules or another applicable legal process.
- **Manufacturer guidance** — comes from the current DJI documentation for the aircraft, payload or software.
- **Confirmed internal procedure** — the BOPRC process confirmed for this draft.
- **Proposed BOPRC starting point** — a practical setting for review, testing and approval; it is not a fixed value for every site.

---

# 1. Purpose and operational responsibilities

## 1.1 Why we operate drones

The Engineering, Rivers & Drainage team uses drones to capture accurate, timely and repeatable information to support engineering decisions, construction monitoring, asset management and flood response.

> **Visual overview:** [Watch the approved three-minute animation explaining the complete stopbank survey lifecycle](https://boprc-drone-operations-manual.lissanddanvan.chatgpt.site/purpose-animation-final.html).

Typical work includes:

- engineering drone surveys used in design activities;
- construction progress using survey, video and aerial-photography outputs — including quantities, as-built records, and a dated record of key construction activities and surfaces;
- stopbank, river, drain and coastal inspections;
- gravel-extraction calculations;
- orthophotography, surface models and LiDAR;
- flood and emergency response, including flood-extent mapping and recording debris lines; and
- clear project communication for team, management, stakeholder and special-interest-group meetings.

Our two principal survey systems are:

| DJI Matrice 4E | DJI Matrice 350 RTK + Zenmuse L2 |
|---|---|
| <img src="https://boprc-drone-operations-manual.lissanddanvan.chatgpt.site/assets/training-v2/dji-matrice-4-series-official.jpg" alt="DJI Matrice 4E in flight" width="480"> | <img src="https://boprc-drone-operations-manual.lissanddanvan.chatgpt.site/assets/training-v2/dji-matrice-350-rtk-official.jpg" alt="DJI Matrice 350 RTK in flight" width="480"> |
| Routine mapping, progress photography, inspection, video and Photospheres using network RTK/NTRIP. | Specialist LiDAR work, including terrain beneath vegetation and larger or more complex survey sites. |

*Figure 1. BOPRC's principal engineering survey aircraft. Images: DJI official product pages.*

A successful job is more than a completed flight. We need a clear purpose, a competent pilot, the right permissions, a safe site and data that is suitable for the decision it will support.

## 1.2 The working team

| Person | What they do |
|---|---|
| **Pilot** | Plans and controls the flight, completes the final go/no-go check and lands or stops whenever conditions are unsafe. |
| **Observer / spotter** | Watches for aircraft, people, animals, vehicles and obstacles, and gives clear warnings to the pilot. The observer must not be distracted by another task. |
| **Site supervisor / project contact** | Coordinates access, workers, plant, exclusion areas and the flight window. |
| **Survey / technical lead** | Confirms the required output, coordinate system, accuracy, control, capture settings and quality checks. |

The pilot's safety decision is final. Anyone may call **stop** when they see an immediate hazard.

## 1.3 Six stages before launch

Use the same six stages for every job. The amount of planning will vary, but no stage is optional.

![Six stages before launch](https://boprc-drone-operations-manual.lissanddanvan.chatgpt.site/assets/fig-02-flight-approval-gates.svg)

*Figure 2. Define the job, confirm the pilot and aircraft, check airspace and access, control the risks, then make the field go/no-go decision.*

---

# 2. Airspace and permissions

## 2.1 Rules every pilot needs

Normal BOPRC operations under this manual use aircraft below 25 kg and must comply with the current Civil Aviation Rule Part 101 and CATI 101-1.

Before launch, confirm:

- [ ] the aircraft will remain within unaided visual line of sight and below cloud;
- [ ] the planned height is no more than 400 ft (120 m) above ground unless a current legal pathway allows otherwise;
- [ ] the drone will give way to and remain clear of every crewed aircraft;
- [ ] required consent for people and property has been obtained;
- [ ] controlled-airspace, aerodrome and special-use-airspace conditions are met;
- [ ] the flight will not create a hazard; and
- [ ] weather, obstacles, return-to-home, lost-link action and landing areas are suitable.

**Legal requirement:** if the job cannot comply with Part 101, stop and refer it for specialist aviation advice or an appropriate Part 102 operator. Logging a flight in AirShare does not by itself provide every approval.

## 2.2 Check the airspace

**Controlled airspace** requires Air Traffic Control authorisation unless a precise legal exception applies. **Uncontrolled airspace (Class G)** can still contain helicopters, agricultural aircraft, microlights, gliders and other low-level traffic.

Within 4 km of an aerodrome, extra requirements normally apply. Check private strips, heliports, hospital helipads and water aerodromes as well as public airports.

![Airspace and permissions decision path](https://boprc-drone-operations-manual.lissanddanvan.chatgpt.site/assets/fig-03-airspace-decision.svg)

*Figure 3. Use current information for the actual place, date and time. DJI warnings or unlocks are not the legal source for New Zealand airspace.*

Use these sources together:

| Check | What it provides |
|---|---|
| [**AirShare**](https://airshare.co.nz/) | Drone airspace map, advisories, flight logging and ATC/aerodrome requests. |
| [**Current VNC**](https://shop.aeropath.aero/collections/2025-2026-visual-navigation-charts) | Controlled and special-use airspace, aerodromes, reporting points and frequencies. |
| [**Aeronautical Information Publication (AIP) New Zealand**](https://www.aip.net.nz/) | Current aerodrome charts, frequencies and local procedures. |
| [**AIP Supplements**](https://www.aip.net.nz/) and [**IFIS NOTAMs**](https://ifis.airways.co.nz/) | Temporary restrictions, hazards, closures and activity. Recheck close to launch. |

## 2.3 Local airspace quick reference

This table is a planning aid only. **Check the current AIP, VNC, NOTAM and AirShare entry on the day.** Do not transmit on an aviation frequency unless appropriately qualified and authorised.

| Location | Planning contact and process | Published frequency information checked for this draft |
|---|---|---|
| **Whakatāne Airport (NZWK)** | Uncontrolled. Airport Operations **07 308 8397**, **airport@whakatane.govt.nz**. Within 4 km: use AirShare and email the airport with flight details and a map; wait for conditions/agreement. | Unattended **118.6 MHz**; Christchurch Information **121.25 MHz** |
| **Tauranga Airport (NZTG)** | Controlled. Airport **07 575 2456**, **contact@tgaairport.nz**; operational alternate **021 846 429**. Use AirShare/ATC and follow airport conditions. | Tower/unattended **118.3 MHz**; alternates **123.4 / 129.2 MHz**; ATIS **126.6 MHz** |
| **Rotorua Airport (NZRO)** | Controlled. Airport Operations **027 274 4508**; Operations Manager **027 494 2419**; Airways Tower **07 345 5199**. | Tower/unattended **121.2 MHz**; additional tower **120.1 MHz**; ATIS **128.8 MHz**; Bay Approach **119.5 / 123.8 MHz** |
| **Rotorua Lakes water aerodrome (NZRL)** | Floatplane activity. Volcanic Air **07 348 9984**; also check Rotorua controlled airspace. | Rotorua Tower **121.2 / 120.1 MHz**; Tarawera MBZ **120.9 MHz** |
| **Galatea (NZGA)** | Uncontrolled; NORDO microlight/gyrocopter and model-aircraft activity noted. Obtain operator agreement within 4 km. | Unattended **119.1 MHz** |
| **Ōpōtiki Aerodrome** | Council consent is required within 4 km: **07 315 3030**, **info@odc.govt.nz**. | Retrieve current AIP/VNC/AirShare information; no static frequency is reproduced here. |

Aeronautical information contacts: Airways NOTAM Office **03 358 1688**, **nof@airways.co.nz**; National Briefing Office **0800 626 756** or **03 358 1509**; Aeropath **04 471 1888** or **0800 500 045**, **aim@aeropath.aero**.

*Contacts and frequencies were last checked against official sources on 15 October 2026. Recheck them for the actual flight.*

## 2.4 Crewed aircraft, land and other approvals

Agricultural aircraft are a particular regional risk. Before rural or river-corridor work, ask the landowner, farm manager and site contact about spraying, topdressing, frost work, lifting, mustering, helicopters, farm strips, loading areas and neighbouring activity. If low-level aircraft activity is possible but unresolved, do not launch.

During flight, crewed aircraft always have priority. Keep a clear descent and landing route and land promptly whenever separation is uncertain.

Airspace approval does not replace other approvals:

- **Private or Māori land:** confirm owner and occupier permission, access, gates, stock, biosecurity, sensitive locations and imagery restrictions.
- **DOC land:** use the DOC drone permission/concession process and follow any wildlife, visitor and cultural conditions.
- **Council land:** check the current bylaw, reserve plan and land-manager process for that site.
- **State highways:** the current Waka Kotahi pathway expects state-highway overflight to use a Part 102-certificated operator and a suitable risk plan. BOPRC's Part 101 team must not undertake that overflight under this manual. General contact: **0800 4 HIGHWAYS (0800 44 44 49)**.
- **Local roads:** confirm the road-controlling authority and traffic/public controls. A person standing in a live carriageway is not an acceptable spotter.

---

# 3. Plan, fly and respond safely

## 3.1 Before leaving

Start with the job, not the aircraft. Confirm:

- [ ] purpose, site, required output, coverage and accuracy;
- [ ] pilot, observer if needed, site manager and BOPRC project engineer or Engineer's Representative;
- [ ] site induction, sign-in/sign-out and construction-site communication process;
- [ ] AirShare, VNC, AIP, Supplement and NOTAM checks;
- [ ] ATC, aerodrome, land, DOC, council, road and people/property approvals;
- [ ] current SJP and site/task risk assessment;
- [ ] weather, river/tide conditions and clear go/no-go limits;
- [ ] mission, return-to-home, lost-link, alternate landing and recovery plan; and
- [ ] aircraft, payload, batteries, controller, storage, PPE and data destination.

A repeat job may reuse a controlled mission, but permissions, hazards, people, weather and site conditions must be checked again.

## 3.2 Practical risk controls

The current SJP and site-specific assessment are the working safety documents. Use this table as the training prompt, not as a replacement.

| Hazard | Practical controls |
|---|---|
| **Public, workers and contractors** | Coordinate with the site supervisor; agree the flight window and exclusion area; brief affected workers; stop if the exclusion cannot be maintained. |
| **Plant, vehicles, cranes and roads** | Keep clear of haul routes, excavators, cranes and suspended loads. Use the site communication method and land when plant enters the operating area. |
| **Birds and nesting areas** | Scan before launch, avoid nests and roosts, and stop if birds mob the drone or show distress. Never chase wildlife. |
| **Dogs and livestock** | Secure dogs before arming; check stock location; avoid low or abrupt passes; land if animals become agitated. Never use the drone to move stock. |
| **Water, rivers and coast** | Allow extra wind and battery reserve; confirm home point; assess banks, tide, current, spray and alternate landing. Do not enter water solely to recover a drone. |
| **Trees, terrain and wind shear** | Walk the boundary; identify wires, branches and cranes; allow gust margin; test at low height; stop for abnormal drift, turbulence or power use. |
| **Batteries and fire** | Reject swollen, wet, damaged, hot or abnormal batteries; protect terminals; isolate a suspect battery and follow the emergency plan. |
| **Loss of link, GNSS or RTK** | Confirm home point and return-to-home action; keep a safe manual route; pause survey capture when positioning quality is uncertain. |

## 3.3 On site

1. Walk the launch area, flight boundary and alternate landing area. Check workers, plant, public access, animals, obstacles and weather.
2. Sign in or complete the site process. Tell the site manager/project contact the drone team is present and confirm the flight window, exclusion area, plant movements and any temporary stop-work requirement. This is both a health-and-safety control and normal professional courtesy.
3. Inspect the aircraft, propellers, payload, batteries, controller and storage. Do not install an untested firmware update at site.
4. Confirm the home point, return-to-home height/action, height limit, mission boundary and any geofence warning.
5. Brief roles, lookout sectors, communications, stop call, crewed-aircraft response and emergency landing. Confirm affected workers know that photography, video or LiDAR capture will occur.
6. Complete a low hover and systems check before starting the production mission.
7. During flight, maintain unaided visual line of sight and monitor aircraft, people, weather, battery, link and mission progress. Pause or land when conditions move outside the plan.
8. After landing, close the AirShare/ATC activity, check that files open and coverage is complete, complete the flight record, clean the equipment and report defects.

## 3.4 Common in-flight problems

These actions are short training prompts. The safe response depends on the aircraft, site and event.

| Problem | Immediate response | Prevention / follow-up |
|---|---|---|
| **Low battery** | Account for distance and wind, return early and land safely. If the reserve is eroding, use the nearest safe landing area rather than pressing on. | Check the configured warnings and critical-battery action before launch. Do not plan around the final battery percentage or forced auto-land. |
| **Controller link loss** | Keep watching the aircraft and allow the verified lost-link action to operate. If the link returns and anything is uncertain, land. Reposition only when it can be done without creating another hazard. | Verify lost-link action, home point and return height. Maintain clear line of sight and avoid terrain, trees and structures blocking the link. |
| **RTK correction loss** | Keep the aircraft safe, pause survey capture and allow time for reconnection. Continue without RTK only when the pilot is satisfied the flight is safe and the data purpose allows it. | Record the affected area and re-fly if required. Independent checkpoints are still needed to test the finished output. |
| **Sudden wind, rain or poor visibility** | Pause and assess. Land at the nearest safe location if conditions are deteriorating. Do not rely on return-to-home into strong wind. | Check forecasts and local conditions. Keep an alternate landing site and additional battery reserve over water or exposed corridors. |
| **Crewed aircraft** | Descend or land promptly and remain clear. Do not continue until the conflict and likely repeat traffic are resolved. | Brief the lookout response and ask about local agricultural or helicopter activity before launch. |

Stay calm, use deliberate inputs and preserve controller recording and logs after an abnormal event.

## 3.5 Incident recording and escalation

People, crewed aircraft and the public come before the drone.

- Make the area safe and land or stop the aircraft if possible.
- Call emergency services or alert ATC/aerodrome staff when required.
- Do not enter water, climb trees, enter private land or approach machinery solely to recover a drone.
- Preserve the aircraft, batteries, controller recording, logs, photographs and witness details.
- Quarantine damaged or unreliable equipment until the technical team has cleared it for service.

Record the event in the applicable BOPRC incident process, expected to be **Vault**, and tell the people relevant to what happened:

| Contact | When to involve them |
|---|---|
| **Responsible manager / Vault / H&S** | Injury, near miss, unsafe event, aviation conflict, loss, damage or environmental effect. |
| **Property** | Lost, damaged or recovered equipment; insurance, write-off, disposal or asset-status change. |
| **Technical team / vendor** | Malfunction, impact, water ingress, abnormal vibration, or repeated link, GNSS or RTK fault. |
| **Landowner / site supervisor** | Aircraft or debris on land, access, damage, stock/public effects or site disruption. |
| **CAA / ATC / aerodrome** | When the event and current reporting rules require notification. CAA safety contact: **0508 4 SAFETY (0508 472 338)**. |

Every incident is different. Make the situation safe first, then confirm the correct notifications with the responsible manager.

---

# 4. Aircraft, servicing and permanent survey control

## 4.1 Aircraft quick reference

| Matrice 4E — mapping and inspection | M350 RTK + Zenmuse L2 — LiDAR |
|---|---|
| Confirm the mission, required GSD, height, overlap and boundary. | Confirm the supported aircraft, payload and firmware combination. |
| Confirm network RTK/NTRIP correction source, RTK status and home point. | Fit a matched battery pair; check payload mounting, storage, RTK and required calibration. |
| Check focus, exposure, triggering and a short verification area. | Confirm height, speed, line spacing, scan mode, terrain and edge coverage for the job. |
| If corrections become unstable, keep the flight safe and pause survey capture until data quality is understood. | Before leaving site, verify the required LiDAR and trajectory files are present. |

![Matrice 4E network RTK workflow](https://boprc-drone-operations-manual.lissanddanvan.chatgpt.site/assets/fig-04-matrice-4e-ntrip.svg)

*Figure 4. Matrice 4E mapping workflow using an approved NTRIP correction source.*

![M350 RTK and Zenmuse L2 capture workflow](https://boprc-drone-operations-manual.lissanddanvan.chatgpt.site/assets/fig-05-m350-l2.svg)

*Figure 5. M350 RTK and L2 capture chain. Check the finished work against independent survey control.*

**Manufacturer guidance:** use the current DJI manual matching the aircraft, payload, battery and firmware in use. Published performance figures are conditional; the project's independent checks determine whether the result is acceptable.

## 4.2 Service and repair

Ferntech's service process includes cleaning and inspection, battery checks, firmware and calibration checks, test flight and maintenance evidence.

![Ferntech service and return-to-use workflow](https://boprc-drone-operations-manual.lissanddanvan.chatgpt.site/assets/fig-07-service-workflow.svg)

*Figure 6. Booking, assessment, repair and safe return to service.*

**Proposed BOPRC starting point — approval required:** service the operational fleet every **six months**, with **annual service as the minimum**. A fault, impact, water/dust ingress, abnormal vibration, repeated link/GNSS/RTK warning, battery damage or manufacturer notice triggers earlier assessment.

1. Mark the affected equipment unavailable and preserve logs and parts.
2. Back up project data and document the fault, event, firmware and batteries.
3. Submit the current [Ferntech service request](https://www.ferntech.co.nz/Service-Request-Form) and follow its packing instructions. Service email checked for this draft: **repairs@ferntech.co.nz**.
4. Obtain the diagnosis, quote, warranty position and internal financial approval.
5. Retain the service certificate and parts, firmware, calibration, battery and test-flight records.
6. On return, compare the equipment and configuration with the private register.
7. Complete a low-risk function flight before production use.
8. Close the defect and update Property's register where required.

## 4.3 Equipment register

**Confirmed internal procedure:** Property holds and maintains the private equipment and configuration register. Follow that system for additions, transfers, repairs, loss, disposal and material changes. This manual must not publish serial numbers, credentials, unlock details or a live inventory. Flight records use internal asset IDs.

## 4.4 Permanent project survey control

A permanent control network makes repeat construction surveys easier to compare. It should serve one defined contract work site — not an entire river reach and not neighbouring property.

For a suitable linear site, start with **six permanent ground control points (GCPs)** plus separate independent checkpoints:

- two near one end of the work;
- two near the other end; and
- two near the middle.

Keep every point inside the confirmed project/contract access area, but outside current and future earthworks, haul routes, plant tracking, laydown, road or stopbank-crest traffic and other likely disturbance. Final locations require field and survey verification.

![Six-point control layout inside the authorised project corridor](https://boprc-drone-operations-manual.lissanddanvan.chatgpt.site/assets/review-v2/gcp-layout-authorised-corridor.svg)

*Figure 7. Put control outside the work — not outside the project. Do not place targets in neighbouring paddocks without specific permission and secure project access.*

The photo below shows only the pair that might be visible near one end of a work area. The targets are small, close to the work and clear of disturbed ground.

![Conceptual pair of permanent GCPs beside stopbank works](https://boprc-drone-operations-manual.lissanddanvan.chatgpt.site/assets/review-v2/gcp-pair-stopbank-works-concept-v2.png)

*Figure 8. Conceptual overlay only — not a record of installed BOPRC control. Verify scale, access, services and future works on site.*

The proposed in-house target is a **290 × 290 mm ASA plate** with black-and-white quadrants, an exact surveyable centre and four low-profile corner fixings. ASA is preferred for the prototype because it is more suitable than PLA for outdoor UV and weather exposure. The council's Bambu Lab H2D has a published dual-nozzle work area of 300 × 320 mm, so the proposed plate fits with a small margin. Confirm the sliced toolpath, final thickness, colour contrast, print settings and outdoor durability through a field prototype.

![BOPRC survey-control plate concept](https://boprc-drone-operations-manual.lissanddanvan.chatgpt.site/assets/review-v2/boprc-gcp-plate-installation-concept-v1.png)

*Figure 9. Proposed face: BOPRC SURVEY CONTROL, unique point number, PLEASE DO NOT REMOVE and 0800 884 880.*

![Dimensioned plate and nearly flush installation](https://boprc-drone-operations-manual.lissanddanvan.chatgpt.site/assets/review-v2/boprc-gcp-plate-dimensioned.svg)

*Figure 10. Plate installed almost flush on a level compacted fine-gravel pad with a small vegetation-free collar.*

Installation:

1. Confirm ownership/access, underground services, present and future works, mowing, stock, flooding and erosion risk with the survey lead and site supervisor.
2. Remove vegetation and loose topsoil only as needed. Prepare a level, drained, compacted fine-gravel pad and suitable weed-resistant separator.
3. Bed the plate almost flush with the surrounding ground. Use a small gravel collar to reduce growth and ponding.
4. Use four low-profile fixings appropriate to the ground and services. Avoid raised heads, sharp edges and mower, tyre or trip hazards.
5. Survey the exact centre and record its ID, location, method, date, quality, photographs and witness description.
6. Before each repeat survey, check the plate against its reference photograph. Resurvey after suspected movement, flooding, grading, vehicle strike or replacement.

Use **NZTM2000 / NZGD2000 (EPSG:2193)** and **NZVD2016 (EPSG:7839)** unless the project specifies and records another coordinate system. Keep checkpoints out of the control adjustment: their residuals provide the independent check on the finished product.

The construction-survey sequence is: confirm the design, access and occupied work areas → install control outside the work but inside authorised project access → complete the full pre-construction baseline survey → save that checked route → repeat it during construction where it remains safe and suitable. If the project boundary or work layout changes, revise and record the route deliberately.

---

# 5. On-site positioning options

Choose the simplest positioning method that can meet the job's accuracy and repeatability needs.

![Four positioning options](https://boprc-drone-operations-manual.lissanddanvan.chatgpt.site/assets/training-v2/fig-b1-positioning-options.svg)

*Figure 11. RTK improves the aircraft position; independent surveyed checkpoints still test the finished result.*

| Option | Use it for | Key limitation |
|---|---|---|
| **Relative capture** | Progress photos, visual inspection and general context where engineering measurement is not required. | No surveyed control. Do not describe the output as an engineering survey. |
| **Rover-surveyed targets** | Engineering mapping, repeat surveys, quantities and independent checks. | Targets must be visible, stable and surveyed at the exact marked centre. |
| **D-RTK 2 base station** | Local RTK corrections, particularly where mobile coverage is poor. | A base on an arbitrary point does not by itself place the result correctly in the project datum. |
| **NTRIP network RTK** | Convenient RTK corrections where the controller has reliable internet coverage. | Connection, mountpoint and RTK FIX must be confirmed and recorded. |

## 5.1 Rover-surveyed ground markers

Use temporary or permanent high-contrast targets that can be identified in the source images. Survey the exact centre, photograph it and keep point names consistent.

- distribute control around the work, not in one cluster;
- keep it inside authorised access but outside likely disturbance;
- include separate checkpoints that are not used to adjust the model;
- check visibility, safe access, services, vegetation, water and movement; and
- do not assume a clearly visible feature is stable enough to be control.

## 5.2 D-RTK 2 base station

**Manufacturer guidance:** use the current D-RTK 2 guide and supported aircraft workflow.

1. Choose a firm, level location with a clear view of the sky, away from large obstructions, strong radio sources, high-voltage lines and large reflecting water surfaces.
2. Set the base over a verified known point whenever the output must be tied to the project datum. Measure the required antenna height correctly.
3. Level and secure the tripod. Do not move it or change its angle during the mission.
4. In DJI Pilot 2, select the D-RTK 2 correction source and link the aircraft/controller.
5. Wait for stable GNSS and **RTK FIX** before survey capture.
6. Record the base point, entered coordinates, height type, antenna height, start/end time and RTK status.

GNSS may use ellipsoidal height while the engineering project uses NZVD2016. Do not relabel one as the other. Record the transformation or geoid process used.

## 5.3 NTRIP network RTK

**Confirmed external service information:** LINZ PositioNZ Real Time uses NTRIP over the internet and broadcasts NZGD2000 corrections. Registration is required. The team also uses **SmartFix**; confirm the approved BOPRC profile and current service details internally and never reproduce credentials in this manual.

| PositioNZ item | Current value checked for this draft |
|---|---|
| Host | `positionz-rt.linz.govt.nz` |
| Port | `2101` |
| Data format | RTCM 3.2, 1-second epoch |
| Expected latency | Less than 2 seconds for 95% of observations |

1. Confirm mobile coverage and connect the controller to the approved internet source.
2. Select the current, appropriate mountpoint and enter the controlled credentials. **Do not put credentials in this manual.**
3. Confirm the aircraft shows **RTK FIX**, the home point is correct and the correction age/quality is stable.
4. Record the service, mountpoint and RTK status in the flight record.
5. If corrections are lost, keep the flight safe and follow Section 3.4. Re-fly the affected area when required.

> **Remember:** RTK/NTRIP improves the aircraft position. GCPs can strengthen or align the model. Independent checkpoints prove the finished result.

NTRIP may reduce the need to use GCPs to adjust a validated lower-risk model, but it does not independently prove the orthomosaic, point cloud or surface accuracy. Retain surveyed checkpoints for engineering quantities, repeat-surface comparison and as-built work unless an approved project specification says otherwise.

## 5.4 Temporary independent checkpoints

Use temporary checkpoints when the final positional or surface accuracy must be tested independently. A suitable checkpoint might be a small high-contrast spray mark on a completed, still-bare stopbank surface, provided marking is approved.

![Conceptual RTK rover measurement of a temporary stopbank checkpoint](https://boprc-drone-operations-manual.lissanddanvan.chatgpt.site/assets/training-v2/fig-b1-temporary-checkpoint-concept.png)

*Figure 12. Conceptual example — not a real BOPRC installation. Place the mark on stable, reasonably flat ground, clear of the crest edge, breaks in slope, loose material, active plant routes and any area likely to be reworked.*

1. Approve a safe, stable and visible location inside authorised access.
2. Paint or place a clear target with one unambiguous centre and a unique point ID. Use a removable target where paint is unsuitable.
3. Occupy the exact centre with the RTK rover and confirm a stable FIX.
4. Record E/N/Z, NZTM2000/NZVD2016, correction source, quality, time, operator and overview/detail photographs.
5. Fly the mission and confirm the target is visible in the source data.
6. In Terra, assign it as a **checkpoint**, not a GCP, and keep it out of optimisation.
7. Use its residual with the other distributed checkpoints in the final acceptance record.

One checkpoint is a useful local check, but it cannot describe accuracy across a whole site. The project engineer or survey lead must choose a suitably distributed independent set and an observation method that is accurate enough for the tolerance being tested.

**How this becomes an acceptance statement:** “The stopbank-stripping surface was checked against [number] RTK-rover checkpoints withheld from processing. Horizontal RMSE = [result] and vertical RMSE = [result]. The output [meets / does not meet] the project tolerance and is accepted for [stated use], subject to [limitations].” Section 11.3 shows a worked example.

**Equipment accuracy is not finished-product accuracy.** DJI lists centimetre-level RTK positioning for the L2 system components, but the published finished L2 mapping benchmark is **5 cm horizontal and 4 cm vertical at 150 m** under DJI's specified conditions. Terrain, IMU, ranging, calibration, trajectory, vegetation, classification and processing all affect the delivered surface. The project's checkpoint results determine whether the output is suitable for its stated use.

---

# 6. Mission planning and capture

## 6.1 Matrice 4E area route in DJI Pilot 2

![Matrice 4E area route workflow](https://boprc-drone-operations-manual.lissanddanvan.chatgpt.site/assets/training-v2/fig-b2-m4e-area-route.svg)

*Figure 13. Create the area route, select the aircraft and wide mapping camera, draw the authorised work area, then set and verify the route.*

**Manufacturer workflow:** `Flight Route` → `Create a Route` → `Area Route`; select the aircraft, camera and lens; choose **Ortho Collection**; set the boundary and route; preview it, save, upload and complete a low-hover check.

The route must cover more than the immediate earthworks. Include the construction footprint, site establishment, vehicle and plant operating areas, laydown/overnight parking, the full land-access or compensation area, every permanent control point and a useful margin beyond them. Keep the route inside authorised land and airspace.

![Repeat construction mission coverage](https://boprc-drone-operations-manual.lissanddanvan.chatgpt.site/assets/training-v2/fig-b2-repeat-route-coverage.svg)

*Figure 14. Conceptual coverage plan. Required features and control belong inside the reliable captured area, not at the edge where turns and reconstruction artefacts are more likely.*

**Proposed BOPRC starting point — Matrice 4E routine photogrammetry:**

| Setting | Starting value | Adjust when |
|---|---|---|
| Route | Area Route / Ortho Collection | Use another route type only when the capture purpose requires it. |
| Camera | Matrice 4E wide 20 MP | Confirm the correct camera/lens is selected. |
| Height | **60 m AGL** | Change to meet required GSD, terrain, obstacles, airspace and coverage. Pilot 2's displayed GSD should be checked. |
| Speed | **5–7 m/s** | Slow down in low light, gusty conditions, complex terrain or where sharper images are needed. |
| Forward overlap | **80%** | Increase to about 85% for relief, vegetation or difficult edges. |
| Side overlap | **70%** | Increase to about 75% for relief, vegetation or difficult edges. |
| Gimbal | **−90° nadir** | Add oblique capture only when required and planned. |
| RTK | **FIX before capture** | Pause survey capture if correction quality becomes uncertain. |
| Shutter | Mechanical shutter | Check that the mission can maintain the required photo interval. |
| Elevation optimisation | On for orthophoto work | Review the actual DJI workflow and output purpose. |
| Completion action | Return-to-home when suitable | Change when the site plan requires hover or landing; always verify RTH height/path. |

These values are not a substitute for designing the mission. Adjust them for the required GSD, terrain, obstacles, light, wind, safe operating area and agreed accuracy.

**Repeat construction survey:** save the checked pre-construction route as the controlled baseline. On the next visit, open it from the Flight Route library, review the saved aircraft/camera, boundary, height, speed, overlap, gimbal, RTK and completion action, and rerun it only after current airspace, access, obstacles, plant, take-off area and RTH path have been checked. If it no longer fits the site safely, save a controlled revision and record why it changed; do not overwrite the baseline casually.

Before each construction-site flight, confirm the site manager and BOPRC project contact, induction/sign-in requirements, flight window, workers, exclusion area and plant movements. No saved route replaces a current go/no-go decision.

> **Storage ready:** each aircraft travels with a clean, compatible, correctly formatted working microSD card and its own ready backup card. Confirm the card is recognised, has enough space and records a test file. Never format the only copy of a mission.

## 6.2 Matrice 4E photo settings

The Matrice 4E wide mapping camera is a 20 MP, 4/3 CMOS camera with adjustable f/2.8–f/11 aperture and a mechanical shutter.

### Nadir mapping photographs

| Setting | Proposed starting value | Practical note |
|---|---|---|
| ISO | **100** | Keep noise low; avoid going above 400 unless conditions require it. |
| Shutter | **1/800–1/1000 s** | Use a faster shutter for wind, movement or a faster route. Check actual images for blur. |
| Aperture | **f/5.6** | Work within roughly f/4–f/8 as light changes. Avoid forcing ISO or shutter outside the useful range. |
| White balance | Fixed Manual, Sunny or Cloudy | Do not leave it changing from image to image across a mapping mission. |
| Focus | Autofocus on a representative textured surface, verify, then lock/manual where available | Do not use an unverified infinity setting. Inspect a test image at full size. |
| File format | JPEG for routine mapping | Use JPEG + RAW only when the purpose justifies the additional interval, storage and processing cost. |

Before the production route, open a test image and check sharpness, exposure, storage and RTK/metadata. A short test is quicker than re-flying the full site.

### Oblique record photographs

Oblique images are angled records of flood conditions, assets, effects, site context and construction activity. They do not replace the nadir mapping dataset.

- use the wide camera unless a defined inspection requires another lens;
- use ISO 100–400, a shutter fast enough to prevent blur and a fixed white balance as practical starting points;
- make deliberate, overlapping views from a safe stable position rather than random isolated images;
- retain EXIF/location information and record the event/site, date and time, view direction, height and what the sequence shows; and
- retain the originals under the Survey/Event ID. Approved copies are intended to feed the future Flood Media Viewer when that system is ready.

## 6.3 Matrice 4E video settings

Video provides progress and visual updates for project, management, ELT/leadership, stakeholder and special-interest-group meetings. It also provides a time-specific construction or flood record and may help resolve a later question about what occurred and when.

| Setting | Proposed starting value | Practical note |
|---|---|---|
| Camera | Wide camera | Use zoom only for a defined inspection need; avoid digital zoom as a substitute for safe positioning. |
| Resolution | **4K, 30 fps** | The M4E records 4K or Full HD at 30 fps. |
| Codec | **H.264** | Use H.265 only where the viewing/editing workflow supports it. |
| ISO | **100–400** | Keep it low where possible. |
| Shutter | **1/60 s** for normal smooth 30 fps video | Use 1/250 s or faster when extracting sharp still frames or recording faster movement is more important than natural motion blur. |
| Aperture | **f/4–f/5.6** | Adjust for the light while protecting shutter and ISO. |
| White balance | Fixed manual value/preset | Avoid visible colour changes within a clip. |

Use slow, deliberate gimbal movement and short labelled clips. Record what the clip shows, where it was taken, the direction of view and the event or construction stage. Video supports communication and the project record; it is useful only when its master file and context can be found later.

## 6.4 Photosphere capture for flood records

DJI lists Panorama as a supported Matrice 4E still-photo mode, using 20 MP source images and producing an approximately 100 MP stitched panorama. Use Photospheres to show flood conditions in context — not as survey measurement.

![Matrice 4E Photosphere workflow](https://boprc-drone-operations-manual.lissanddanvan.chatgpt.site/assets/training-v2/fig-b3-photosphere-flood.svg)

*Figure 15. Use a repeatable safe hover point, fixed exposure and a complete event record.*

1. Choose a safe, repeatable hover point and a height that gives the required context. **Proposed starting range: 30–60 m AGL**, subject to VLOS, airspace, obstacles and the event purpose.
2. In the current DJI Pilot 2 camera view, select the wide camera and Panorama mode. Confirm the precise menu on the installed controller and verify focus.
3. Use stable manual exposure and fixed white balance where the current interface allows it, reducing visible seams between frames.
4. Hold a stable hover and wait until the capture is complete.
5. Inspect the stitch, horizon, gaps and blur before leaving the site.
6. Keep the stitched panorama and original source images.
7. Record site, flood/event name, date/time, position, height, weather and any available water-level reference.

**DroneDeploy option:** current DroneDeploy guidance supports uploading and managing panorama media from mobile or web, including processed panoramas from other devices. Where this remains the team workflow, open the correct project and date, upload the panorama/source set using the current **Upload → New Upload** path, confirm the media is recognised as a panorama, check the stitched view and location, name it with the Event/Survey ID and retain a durable reference in BOPRC metadata. Subscription features and menu labels can change; validate this workflow with the team's account before controlled issue.

Keep the original source images and DJI stitch in BOPRC-managed storage even when a copy is hosted in DroneDeploy. A cloud share link is not the archive.

## 6.5 M350 RTK and Zenmuse L2 LiDAR route

The settings belong to the **Zenmuse L2 payload on the M350 RTK**, not to the aircraft alone.

**Physical setup**

1. Inspect the M350 RTK, matched battery pair, propellers, controller, payload and clean working/backup storage cards.
2. With the aircraft powered off, fit and lock the L2 on the supported gimbal connector; check the cap, lens/window and connector are clean.
3. Power the controller, then the aircraft. Confirm the L2 is recognised and the aircraft, payload and firmware combination is supported.
4. Confirm gimbal movement, storage, GNSS/RTK and status messages, then complete the normal low-hover/function check.

**DJI Pilot 2 setup**

1. Open or create the approved **Area Route / LiDAR Mapping** task and confirm **M350 RTK + Zenmuse L2**.
2. Check the authorised boundary and the same full-site/edge-margin logic used in Section 6.1.
3. Set height, speed, scan mode, side overlap, IMU calibration, RGB colouring, visible-image overlap and completion action.
4. Confirm home point, RTH height/path, RTK FIX, storage, obstacle settings and route preview before upload.

**Manufacturer reference:** DJI describes LiDAR Mapping/Area Route, repetitive scanning, IMU calibration, RGB colouring and RTK FIX. Its published reference includes 150 m altitude, 15 m/s and side overlap of at least 20%. A routine Part 101 flight in New Zealand is limited to 120 m AGL, so **150 m is not a routine BOPRC Part 101 setting**.

**Proposed BOPRC Part 101 starting point — confirm through vendor consultation and field validation:**

| Setting | Starting value | Practical note |
|---|---|---|
| Route | Area Route / LiDAR Mapping | Confirm the payload and mission type before setting the boundary. |
| Height | **80–100 m AGL** | Adjust for density, terrain, vegetation, required detail, obstacles and the 120 m Part 101 ceiling. |
| Speed | **8–12 m/s** | Slow down for greater density, complex terrain or difficult vegetation. |
| Scan mode | **Repetitive** | DJI's normal topographic-mapping recommendation. |
| Side overlap | **30% general** | Increase toward **50%** for steep terrain, denser coverage or difficult edges. |
| IMU calibration | Enabled | Allow the planned calibration segments and do not clip them with a tight boundary. |
| RTK | FIX before capture | Pause and assess after correction or calibration warnings. |
| RGB colouring | On when required | Confirm image exposure and storage as well as LiDAR capture. |
| Visible-image forward overlap | **80% if an orthophoto is required** | Do not add the orthophoto output when it is not needed. |
| Completion action | Return-to-home when suitable | Verify RTH path, height, wind and landing area. |

Before leaving site, check that the complete L2 mission folder, trajectory/positioning files, LiDAR data and any required RGB images are present.

---

# 7. Post-flight data management

## 7.1 Check before packing up

Do not leave simply because the aircraft landed successfully.

- [ ] confirm the planned area was covered and the mission completed;
- [ ] check the image count or LiDAR mission folders is reasonable;
- [ ] open sample photographs and check focus, exposure, blur and target visibility;
- [ ] confirm RTK/positioning and trajectory indicators are consistent with the flight record;
- [ ] confirm the surveyed control/checkpoint file is available or know who will supply it;
- [ ] note paused lines, battery changes, warnings, unexpected landings or missing areas; and
- [ ] complete a safe re-flight while the site is still controlled when a clear gap can be corrected;
- [ ] complete the site sign-out and tell the site manager/project contact that flying is finished and whether field coverage passed;
- [ ] remove or close any temporary exclusion/control arrangement; and
- [ ] confirm no equipment, batteries, markers or waste have been left behind.

The field check does not prove accuracy. It confirms the expected data appears to be present and usable enough to process.

Arrival and departure notification are both a health-and-safety control and professional courtesy. Site personnel need to know when the drone operation and its temporary controls have ended.

| Matrice 4E photogrammetry | M350 RTK + Zenmuse L2 |
|---|---|
| Original images with metadata unchanged | Complete L2 mission folder and original file structure |
| Flight/controller record and mission settings | Flight record, trajectory/positioning data and payload settings |
| Mission boundary and interruption notes | Mission lines, calibration segments and warnings |
| GCP/checkpoint file and target photographs | Control/checkpoint file and target photographs |

## 7.2 Protect and organise the source

Use the memory card as the transfer source — not as the only copy and not as the working drive.

![From aircraft to protected project data](https://boprc-drone-operations-manual.lissanddanvan.chatgpt.site/assets/training-v2/fig-b1-field-to-project.svg)

*Figure 16. Check the data, create a primary project copy and a backup, then process a separate working copy.*

1. Copy the complete mission folder to the approved BOPRC project location.
2. Compare the card and copy: folder names, file count and total size; then open sample files.
3. Create a second verified copy in the approved backup location.
4. Record who copied the data, the date, aircraft/mission and any known issue.
5. Keep the source card unchanged until both copies are checked and the dataset is complete.
6. Process from a working copy, not the card or the only retained original.

If files are missing or the card reports an error, stop. Do not format it or run recovery software without involving the technical lead.

**Proposed BOPRC survey package — confirm the authoritative storage location and retention rules before issue:**

```text
SurveyID_YYYY-MM-DD_Site
├── 01_Raw_Flight
├── 02_Control_and_Checkpoints
├── 03_Terra_Project
├── 04_Final_Outputs
└── 05_QA_and_Metadata
    ├── SurveyID_Terra_Quality_Report.pdf
    ├── SurveyID_Checkpoint_Residuals.csv
    ├── SurveyID_Final_Surface_Check.csv
    └── SurveyID_QA_Metadata.pdf
```

Keep the raw files untouched. Put only checked, released products in `04_Final_Outputs`. The Terra PDF remains a normal preserved file beside the `.gdb` and output files—not only inside a processing computer or geodatabase. Use the same stable Survey ID in filenames and ArcGIS metadata. Prefer a relative package path or managed document reference over a drive-letter path that may break when data moves.

## 7.3 Coordinate and height record

For normal BOPRC engineering work, use **NZTM2000 / NZGD2000 (EPSG:2193)** and **NZVD2016 (EPSG:7839)** unless the project specifies and records another system.

Before processing, confirm:

- horizontal coordinate system and units;
- vertical datum or height system and units;
- whether heights are NZVD2016 orthometric or GNSS ellipsoidal;
- the geoid/transformation used; and
- the order of Easting, Northing and Height fields.

If the coordinate or height setup cannot be understood and independently checked, stop and ask the survey/technical lead.

## 7.4 Media outputs and DroneDeploy

After the source copy is verified, route each product to the appropriate workflow.

![Drone output routing](https://boprc-drone-operations-manual.lissanddanvan.chatgpt.site/assets/training-v2/fig-c1-output-routing.svg)

*Figure 17. Survey data, Photospheres and record media follow different processing paths but remain connected by one Survey/Event ID.*

| Output | Archive master | Working or published copy |
|---|---|---|
| **Video** | Untouched video and associated telemetry/subtitle file where produced. | Named derivative for meetings, communications or the future Flood Media Viewer. Never edit over the master. |
| **Oblique photographs** | Original files with EXIF/location metadata and enough sequence context to understand the view. | Approved smaller copy or viewer item, with event/site, time and direction recorded. |
| **Photosphere** | Original source images and DJI stitched panorama. | Checked DroneDeploy panorama and durable project reference where that platform remains approved. |

For DroneDeploy, use the correct project and capture date, upload the panorama through the current media upload workflow, check the stitch and mapped location, name it with the Event/Survey ID, and record the hosted reference. Confirm access/privacy settings. DroneDeploy storage or a public share link does not replace BOPRC-managed retention.

Flood photographs, oblique views, video and Photospheres are intended to feed the planned **Flood Media Viewer**. Until that workflow is operational and approved, record the archive location and do not imply that viewer publication has occurred.

---

# 8. DJI Terra processing and control

## 8.1 Control and checkpoints

A **GCP** influences the aerial-triangulation adjustment. An **independent checkpoint** is withheld from that adjustment and tests the finished result.

![Ground control points and independent checkpoints](https://boprc-drone-operations-manual.lissanddanvan.chatgpt.site/assets/training-v2/fig-b2-control-vs-checkpoint.svg)

*Figure 18. GCPs help align the model. Checkpoints provide the independent accuracy test.*

Do not change a failed checkpoint into a GCP simply to improve the report. Investigate the survey coordinate, target movement, image marking, data quality and model behaviour.

Permanent plates may be reused as GCPs in each repeat project, but inspect them against the reference photographs before every capture. Resurvey after flooding, grading, impact, replacement or suspected movement. If all six plates are used as GCPs, use separate surveyed checkpoints; a point cannot independently verify the model that it helped fit.

## 8.2 Create the Terra project

![Simplified DJI Terra project workflow](https://boprc-drone-operations-manual.lissanddanvan.chatgpt.site/assets/training-v2/fig-c2-terra-project-steps.svg)

*Figure 19. Simplified interface guide based on current DJI guidance. Use the help matching the installed Terra release.*

1. Create the project inside `04_Terra_Project` and record the DJI Terra version.
2. Choose only the reconstruction/output types required by the job.
3. Import the original images or complete supported mission dataset from the working copy.
4. Check positions, camera/payload information and coverage.
5. Set and record the output coordinate system, height handling and units.
6. Save the project before importing control.

**Manufacturer guidance:** menus change between DJI Terra versions. Use the current manual and help matching the installed release.

## 8.3 Import, mark and optimise control

DJI's current guidance uses this point order:

```text
Point name, X/Easting, Y/Northing, Z/Height, horizontal accuracy, vertical accuracy
```

![DJI Terra control and checkpoint workflow](https://boprc-drone-operations-manual.lissanddanvan.chatgpt.site/assets/training-v2/fig-b3-terra-gcp-workflow.svg)

*Figure 20. Use the same control-to-acceptance sequence for every photogrammetry project.*

1. Check IDs, coordinates, height, units, decimal places and Easting/Northing order before import.
2. Confirm each point plots near the correct place. Stop if it is kilometres away, swapped or at the wrong height.
3. Set every point deliberately as GCP or checkpoint.
4. Run the initial aerial triangulation.
5. Mark the exact surveyed centre in several clear, well-distributed images. Use assisted marking as a checked aid, not an unreviewed result.
6. Mark the checkpoints carefully but keep them independent.
7. Optimise, inspect errors and correct genuine marking mistakes.
8. Record the reason for any excluded point or changed role.
9. Run the required reconstruction and export the quality report and residual information.

DJI guidance is not entirely uniform on count: the FAQ recommends at least four GCPs in a target area, while the newer accuracy guide recommends an even distribution of at least five GCPs and five checkpoints for an actual project, with more for larger areas. These are manufacturer starting points, not a universal BOPRC specification. Site geometry, tolerance and the survey lead's approved control plan remain controlling.

## 8.4 Reusable templates

**Proposed BOPRC improvement — approval and vendor consultation required:** build controlled DJI Terra templates for common Matrice 4E photogrammetry and M350/L2 work.

Each template should state:

- aircraft/payload and intended output;
- input and output coordinate/height system;
- reconstruction settings and output formats;
- control/checkpoint import convention;
- naming and storage location;
- expected QA checks; and
- software version and date validated.

Test templates on known data and review them after material DJI Terra updates. A template speeds up setup; it does not remove the need to check each project.

The reusable master is the controlled site-coordinate file/register: point ID, E/N/Z, accuracy, CRS, vertical datum/height type, survey method/date, reference photographs and condition history. A Terra project or marked-point file may help within a supported workflow, but do not assume image marks transfer correctly to photographs captured on another date. Each campaign still needs its own role check, marking review, optimisation and checkpoint acceptance.

## 8.5 Check the independent points

The stopbank spray mark from Section 5 becomes a measured check—not a visual judgement.

1. Import its surveyed E/N/Z and assign it as a **checkpoint** before optimisation.
2. Mark the exact target centre in the relevant images. Terra predicts the checkpoint position from the reconstruction without using it to fit the model.
3. Record the E, N and height residuals and the combined checkpoint RMSE. Investigate outliers; do not hide them by changing roles.
4. After export, open the orthomosaic and DEM/DSM or LiDAR surface in ArcGIS Pro with the surveyed checkpoint layer. Sample the final surface elevation and calculate `model Z − rover Z`; compare plan position where XY accuracy is required.
5. Assess the distributed checkpoint set against the project tolerance and retain the result in the acceptance record.

Terra checks the reconstruction. ArcGIS Pro checks the actual final deliverable after classification, interpolation, rasterisation and export. Use both for an engineering surface.

## 8.6 Read and retain the quality report

Export the final Terra quality report as PDF and retain it in `05_QA_and_Metadata` with the checkpoint residuals. The report is processing evidence; it does not by itself approve the output.

| Report item | What it means |
|---|---|
| **GSD, pixel size or point density** | Detail or sampling resolution—not proof of accuracy. |
| **Calibrated images and coverage** | Whether the planned imagery reconstructed successfully. |
| **RTK FIX / POS status** | Quality of aircraft/image positioning—not an independent check of the surface. |
| **Reprojection error RMS** | Internal image-fit quality in pixels—not final ground accuracy. |
| **Georeferencing RMSE** | Agreement with recorded positions/control; useful, but not a substitute for checkpoints. |
| **GCP residuals** | Fit to points used to adjust the model. |
| **Checkpoint residuals / RMSE** | Independent accuracy evidence when the points were withheld from optimisation. |
| **Warnings, failed images or trajectory/IMU issues** | Items to investigate and document before acceptance. |

For LiDAR, review the flight parameters, trajectory/IMU quality, point-cloud warnings and checkpoint RMSE using the labels in the installed Terra version. Create a short BOPRC QA/metadata record that translates the technical report into: purpose, tolerance, result, exclusions, accepted use, limitations, reviewer and date.

---

# 9. ArcGIS Pro elevation products

## 9.1 LAS or point cloud to DEM/DSM

![Elevation processing workflow](https://boprc-drone-operations-manual.lissanddanvan.chatgpt.site/assets/training-v2/fig-d1-elevation-workflow.svg)

*Figure 21. Keep the source point cloud, create the surface needed for the job, then check it before deriving contours or volumes.*

![Conceptual LAS, DSM and bare-earth DEM comparison](https://boprc-drone-operations-manual.lissanddanvan.chatgpt.site/assets/training-v2/fig-d3-elevation-products.svg)

*Figure 22. Conceptual products from one site: the point cloud is the measured 3D sample, the DSM represents the upper visible surface, and the bare-earth DEM represents classified ground.*

1. Create or add a LAS dataset and calculate its statistics/pyramid where required.
2. Confirm the coordinate system, units, extent, point density and classification.
3. Apply the correct point filter:

| Product | Typical points used | What it represents |
|---|---|---|
| **DEM / bare-earth model** | Classified ground, commonly class 2 | Ground surface after vegetation/buildings have been excluded where classification supports that. |
| **DSM / first-surface model** | Suitable first/high returns | Trees, structures and other upper surfaces as well as ground. |

4. Clip processing to the real survey/study boundary. Esri recommends a boundary to prevent interpolation beyond the data and to improve performance.
5. Run **LAS Dataset To Raster** using elevation as the value field. Choose binning or triangulation deliberately; triangulation honours more surface constraints but is slower.
6. Set a cell size that is supported by the point spacing and output purpose. Do not create a very fine raster merely because the software allows it.
7. Save a floating-point GeoTIFF or geodatabase raster where elevation precision must be retained.
8. Check a hillshade, gaps, spikes, water, vegetation leakage, edges and known levels before use.

**Proposed BOPRC starting points:** use **0.5 m** cells for suitable small, dense engineering sites and **1 m** for wider general sites. Confirm from the actual point spacing, terrain and project requirement.

For context, the national LINZ 1 m DEM is specified at approximately **±0.20 m vertical and ±1.0 m horizontal at 95% confidence**. A local low-altitude L2 survey can be denser, newer and potentially more accurate, but cell size and appearance do not prove that. Use the project's independent checks.

## 9.2 Generate contours

Use contours for interpretation and drawing support after the DEM has passed its surface checks.

![Conceptual checked DEM to contours](https://boprc-drone-operations-manual.lissanddanvan.chatgpt.site/assets/training-v2/fig-d4-contours.svg)

*Figure 23. Generate contours from the checked bare-earth surface, then inspect the lines before presentation or CAD handover.*

| Parameter | Starting point | Check |
|---|---|---|
| Input | Checked bare-earth DEM | Do not contour a DSM by mistake. |
| Interval | **0.5 m** for suitable detailed sites; **1 m or more** for wider sites | Choose for purpose and map scale; smaller is not automatically better. |
| Base contour | Project datum/appropriate base | Confirm vertical datum and units. |
| Output | Geodatabase feature class | Retain the source DEM and processing record. |

Inspect contours for noisy vegetation remnants, water-edge artefacts, pits, spikes and unrealistic loops. Smoothing may improve presentation but must not hide data problems or be treated as improved survey accuracy.

---

# 10. Surface comparison and volumes

![Conceptual pre/post surface comparison and Cut Fill result](https://boprc-drone-operations-manual.lissanddanvan.chatgpt.site/assets/training-v2/fig-e1-surface-comparison.svg)

*Figure 24. Conceptual stopbank-stripping example. The reported volume comes from two checked surfaces; it is not automatically exact because the map looks detailed.*

## 10.1 Align the surfaces first

Before any subtraction or Cut Fill calculation, the two surfaces must use:

- the same horizontal coordinate system;
- the same vertical datum and units;
- the same cell size;
- coincident cell alignment/snap raster;
- the same analysis extent and valid comparison boundary; and
- suitable, comparable ground classification.

Use **Project Raster**, **Resample**, processing extent, cell size and **Snap Raster** deliberately. Reprojection or resampling does not repair an incorrect height datum or poor source data.

## 10.2 Pre/post difference

For a simple signed elevation-change raster:

```text
Difference = Post_DEM - Pre_DEM
```

- positive values mean the later surface is higher;
- negative values mean the later surface is lower; and
- values near zero may still contain measurement and surface-modelling noise.

Mask water, vegetation, moving stock/plant, edge interpolation and areas not common to both surveys before reporting change. Compare unchanged checkpoints or stable surfaces to understand the noise floor.

Validate **both** surfaces against independent checkpoints. A useful first estimate of the combined vertical uncertainty is:

```text
Combined RMSEz = √(RMSEpre² + RMSEpost²)
```

Use a project-approved minimum detectable change so differences inside the combined noise band are reported as **no reliable change**, not stripping or fill. Check stable, unchanged ground for a systematic vertical offset before calculating volumes.

## 10.3 Cut Fill

ArcGIS Pro's **Cut Fill** tool compares coincident before and after surfaces and reports areas and volumes of change. In the Esri output convention:

- **positive volume = cut / material removed**; and
- **negative volume = fill / material added**.

This sign convention is different from the simple `Post - Pre` difference above. State the convention in every map and table so users do not reverse the result.

Report:

| Item | Record |
|---|---|
| Source surveys | Dates, aircraft/payload, processing project and accepted surface names |
| Comparison setup | CRS, vertical datum, cell size, snap raster, extent and mask |
| Result | Cut, fill, net change, area and units |
| Checks | Checkpoints/stable-area comparison and review completed |
| Limitations | Water, vegetation, incomplete coverage, changed classification or edge effects |

Use a flat design surface only when it is genuinely the approved comparison surface. Record its elevation, datum, units and boundary; never create a convenient flat raster and treat it as an as-built requirement without confirmation.

Volume sensitivity is easy to underestimate. A persistent **0.02 m** vertical offset across **10,000 m²** changes the calculated volume by about **200 m³**. The simple `area × vertical uncertainty` calculation is a useful conservative sensitivity check, not a complete statistical confidence interval, because neighbouring surface cells are correlated and random errors may partly cancel.

For contractual quantities or other high-consequence decisions, use a project-specific QA method and independent validation such as rover/level cross-sections, a known test area or comparison with an accepted conventional survey. Report gross cut, gross fill, net volume, compared area, pre/post checkpoint results, stable-area offset, exclusions and the accepted use together.

---

# 11. QA, acceptance and Civil 3D handover

## 11.1 Accept the result for a stated purpose

![QA and handover workflow](https://boprc-drone-operations-manual.lissanddanvan.chatgpt.site/assets/training-v2/fig-d2-qa-handover.svg)

*Figure 25. A sharp-looking map is not enough: check positioning, surface behaviour, outputs and the intended use before release.*

- [ ] coverage includes the required work and edges;
- [ ] images are sharp and reconstruction has no unexplained holes, doubles or severe warping;
- [ ] water, vegetation, moving plant and shadows are not treated as reliable ground;
- [ ] CRS, vertical datum, units, pixel size and file formats are correct;
- [ ] GCP marks and residuals are reviewed and exclusions are explained;
- [ ] independent checkpoint results meet the project tolerance;
- [ ] DEM/DSM and classification are suitable for the intended analysis;
- [ ] contours, differences and volumes have been visually and numerically checked;
- [ ] outputs open correctly in the intended GIS, CAD or viewer; and
- [ ] limitations and permitted use are written down.

The project must define an accuracy tolerance suited to the decision. Avoid unsupported labels such as “survey grade” or “centimetre accurate”. State what was checked, the checkpoint result and what the data is suitable for.

| Output class | Appropriate statement |
|---|---|
| **Visual/context** | Inspection, communication or progress record; no engineering-accuracy claim. |
| **Engineering planning/monitoring** | Checked surface or mapping suitable for the stated planning, monitoring or comparison purpose. |
| **Quantities, as-built or contractual** | Requires an approved tolerance, independent checks, processing record and appropriate engineering/survey acceptance. |
| **Cadastral or legally certified survey** | Outside this manual unless completed under the separate professional and legal framework. |

## 11.2 Checkpoint record

| Point | Surveyed E / N / Z | Modelled E / N / Z | ΔE / ΔN / ΔZ | Pass / investigate |
|---|---|---|---|---|
| CHK-01 |  |  |  |  |
| CHK-02 |  |  |  |  |
| CHK-03 |  |  |  |  |

Plain-language acceptance example:

> **Accepted for:** construction progress mapping and comparison at the stated scale.  
> **Checked against:** three independent checkpoints in NZTM2000 / NZVD2016.  
> **Limitations:** standing water and dense vegetation are not reliable ground; the shaded northern edge has reduced image quality.

Retain the checkpoint CSV, Terra PDF and final ArcGIS surface check with the output. The QA/metadata record should include the Survey ID, purpose/date, pilot, aircraft/payload, mission name, software/firmware versions where available, source and output files, coordinate/height systems, RTK method/FIX status, control and checkpoint IDs, GSD or point density, residuals/RMSE, stable-ground check, exclusions, processing choices, accepted use, limitations, reviewer and report location.

## 11.3 Worked example — stopbank stripping

**Proposed project example only — not an approved universal BOPRC tolerance.** The project engineer or survey lead must confirm the purpose, checks and values before capture.

> **Purpose:** compare the pre-construction bare-earth surface with the post-stripping surface across the defined works, establishment and access footprint; map stripped area and calculate an indicative volume.  
> **Method:** repeat the controlled M350/L2 mission in NZTM2000/NZVD2016; use comparable ground classification, the same analysis boundary and distributed RTK-rover checkpoints withheld from processing.  
> **Illustrative achieved result:** horizontal RMSE = 0.04 m; vertical RMSE = 0.025 m; stable-area mean difference = 0.01 m; no unexplained outlier.  
> **Illustrative project tolerance:** horizontal RMSE ≤ 0.05 m and vertical RMSE ≤ 0.03 m, with separate maximum-residual or detection limits set by the project. Confirm these figures through site validation before adopting them.  
> **Accepted for:** construction planning/progress, mapped stripping extent and indicative volume where the project engineer accepts the method.  
> **Not automatically accepted for:** cadastral work, final crest/formation compliance or contractual payment certification. These may require rover, total-station, level or other approved survey observations.  
> **Limitations:** exclude vegetation, standing water, moving plant and low-confidence edges. Change smaller than the approved combined uncertainty is recorded as no reliable change.

## 11.4 Civil 3D handover

Agree the required deliverable with the designer before export. Do not hand over every available file by default.

| Deliverable | Typical handover | Civil 3D use |
|---|---|---|
| DEM | GeoTIFF or ESRI grid with coordinate information | Create or add a grid surface from DEM. |
| Contours | Checked 3D polylines/feature export or agreed CAD format | Add as surface contour data where appropriate. |
| Point cloud | Classified LAS/LAZ or agreed converted point-cloud format | Use the supported point-cloud/surface workflow for the installed Civil 3D version. |
| Surface | LandXML where the workflow and surface type support it | Create/reference a TIN surface and apply boundaries/breaklines as required. |

Autodesk Civil 3D can create a grid surface from GeoTIFF, ESRI Arc Grid and supported DEM formats. Confirm the drawing coordinate system, units, vertical datum, boundary and grid spacing before use. The designer must review triangles, contours, boundaries and any breaklines before design or quantities.

Retain the raw source, Terra project, GIS processing history, QA record and released deliverables together. If a later correction changes a released surface, issue it as a controlled revision and tell the project team.

---

# 12. Sources and items to confirm

## 12.1 Official quick references

“Last checked” records when the source was reviewed. It does not freeze the information.

| Official source | Use | Last checked |
|---|---|---|
| [CAA — CATI 101-1](https://www.aviation.govt.nz/assets/rules/transport-instruments/CATI-101-1.pdf) and [Part 101](https://www.aviation.govt.nz/rules/rule-part/part-101/) | Current operating requirements | 16 Oct 2026; check current version before issue and flight |
| [AirShare](https://airshare.co.nz/), [AIP New Zealand](https://www.aip.net.nz/) and [IFIS](https://ifis.airways.co.nz/) | Airspace, aerodrome and NOTAM checks | 15 Oct 2026; every flight |
| [Aeropath — Visual Navigation Charts](https://shop.aeropath.aero/collections/2025-2026-visual-navigation-charts) | Current VNC edition | 15 Oct 2026; every flight |
| [Whakatāne Airport](https://www.whakatane.govt.nz/services/airport), [Tauranga Airport drones](https://airport.tauranga.govt.nz/general-aviation/drones) and [Rotorua Airport](https://www.rotorua-airport.co.nz/visiting-ga-pilots/) | Local airport processes and contacts | 15 Oct 2026; affected flights |
| [DOC — drones](https://www.doc.govt.nz/drones) and [Waka Kotahi — drone requests](https://www.nzta.govt.nz/partners/traffic-management/accessing-our-state-highways/special-activity-types-and-applications/requests-to-fly-drones-over-a-state-highway) | Conservation land and state highways | 15 Oct 2026; affected flights |
| [LINZ — NZTM2000](https://www.linz.govt.nz/guidance/geodetic-system/coordinate-systems-used-new-zealand/projections/new-zealand-transverse-mercator-2000-nztm2000), [NZVD2016](https://www.linz.govt.nz/guidance/geodetic-system/coordinate-systems-used-new-zealand/vertical-datums/new-zealand-vertical-datum-2016-nzvd2016) and [PositioNZ Real Time](https://www.linz.govt.nz/products-services/geodetic/positionz/positionz-real-time-service/connect-positionz-real-time-service) | Coordinate, height and NTRIP reference | 15 Oct 2026 |
| [DJI Matrice 4 Series downloads](https://enterprise.dji.com/matrice-4-series/downloads), [specifications](https://enterprise.dji.com/matrice-4-series/specs), [Matrice 350 RTK downloads](https://enterprise.dji.com/matrice-350-rtk/downloads) and [Zenmuse L2 FAQ](https://enterprise.dji.com/zenmuse-l2/faq) | Aircraft, panorama, mission, payload and accuracy guidance | 16 Oct 2026; use manual matching firmware |
| [DJI Terra downloads](https://enterprise.dji.com/dji-terra/downloads), [FAQ](https://enterprise.dji.com/dji-terra/faq), [tutorials](https://enterprise.dji.com/dji-terra/video) and [accuracy guide](https://terra.dji.com/user-manual/en/accuracy-whitepaper/photogrammetry-accuracy.html) | Processing, GCP/checkpoint, report and final-raster guidance | 16 Oct 2026; use help matching installed version |
| [DroneDeploy — Photo, Video and Pano Media](https://help.dronedeploy.com/hc/en-us/articles/1500004964822-Photo-Video-and-Pano-Media) | Panorama upload, hosting and comparison workflow | 16 Oct 2026; confirm BOPRC plan/interface |
| [Esri — LAS Dataset To Raster](https://pro.arcgis.com/en/pro-app/latest/tool-reference/conversion/las-dataset-to-raster.htm), [Contour](https://pro.arcgis.com/en/pro-app/latest/tool-reference/spatial-analyst/contour.htm) and [Cut Fill](https://pro.arcgis.com/en/pro-app/latest/tool-reference/spatial-analyst/cut-fill.htm) | Point-cloud, contour and volume workflows | 16 Oct 2026 |
| [LINZ — New Zealand LiDAR 1 m DEM](https://data.linz.govt.nz/layer/121859-new-zealand-lidar-1m-dem/) and [geospatial accuracy framework](https://www.linz.govt.nz/guidance/geodetic-system/geodetic-standards-specifications-and-resources/geodetic-standards-and-factsheets) | National DEM comparison and accuracy reporting | 16 Oct 2026 |
| [ASPRS Positional Accuracy Standards](https://asprs.org/Main/Main/Standards/Positional-Accuracy-Standards.aspx) | Independent product-accuracy reference | 16 Oct 2026 |
| [Autodesk — Create a grid surface from DEM](https://help.autodesk.com/cloudhelp/2027/ENU/Civil3D-UserGuide/files/GUID-BD1EEFAA-598E-4767-A1DC-0352852191AC.htm) | Civil 3D DEM handover | 16 Oct 2026 |
| [Ferntech service request](https://www.ferntech.co.nz/Service-Request-Form) | Service booking | 15 Oct 2026; when booking |
| [Bambu Lab H2D specifications](https://eu.store.bambulab.com/products/h2d) and [PB Tech H2DC listing](https://www.pbtech.co.nz/product/PTRBAM0009/Bambu-Lab-H2DC-FDM-3D-Printer-with-AMS-2-Pro-Multi) | Proposed 290 mm in-house target fit and printer capacity | 16 Oct 2026 |

## 12.2 Confirm before controlled issue

- approve the proposed six-month service interval or retain annual as the minimum;
- prototype and field-test the 290 mm ASA plate, thickness, fixings and durability;
- validate the Matrice 4E and M350/L2 starting settings with representative field tests and the vendor;
- confirm the approved SmartFix profile/workflow and record no credentials in the manual;
- test the Matrice 4E panorama and DroneDeploy upload workflow using the team's current accounts;
- confirm DJI Terra templates and responsibility for maintaining them;
- confirm project folder, Survey/Event ID, naming, backup, managed-report link and retention requirements;
- confirm the Flood Media Viewer ingestion and publication process when available;
- confirm who sets and signs off each project's accuracy tolerance;
- confirm the current internal Vault/H&S incident workflow and controlled forms; and
- complete final technical and aviation review against the current controlled documents.

**Internal controlled documents remain authoritative:** *Drones at Toi Moana — Technical Reference and Source Document*, *2023-06 JSA Engineering Team — Projects Team (FINAL)* and *BOPRC Safe Job Procedure template V4*.


