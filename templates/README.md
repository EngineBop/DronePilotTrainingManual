# DJI Terra survey-control CSV templates

These two files use DJI Terra's six-column GCP import order and intentionally contain **no header row**, because DJI states that the first row must be coordinate data.

1. Point name
2. X / Easting
3. Y / Northing
4. Z / height
5. Horizontal accuracy (optional)
6. Vertical accuracy (optional)

For BOPRC engineering surveys, enter X and Y as **NZTM2000 Easting and Northing**, and Z as the **NZVD2016 height**, all in metres. Confirm those coordinate systems in DJI Terra during import. X is Easting and Y is Northing; do not reverse them.

## Files

- `dji-terra-ground-control-points.csv` — six pre-numbered GCP rows.
- `dji-terra-independent-checkpoints.csv` — five pre-numbered checkpoint rows.

## Use

1. Open a copy of the relevant CSV in Excel or a text editor.
2. Replace each blank X, Y and Z field with the surveyed coordinate.
3. Enter the rover's horizontal and vertical accuracy when available, or leave those two optional fields blank.
4. Delete unused rows. Do not add a column-header row.
5. Save as comma-separated CSV without changing the point names unless the survey register requires different IDs.
6. In DJI Terra, open **GCP Management**, select the matching GCP coordinate system, and import the file.
7. Set points from the independent-checkpoint file to **Check Point**. Checkpoints must not be used to optimise the reconstruction.

Keep the two files separate so the control points used to adjust the model cannot be mistaken for the independent points used to test it.

Source checked 16 October 2026: [DJI Terra GCP Management guidance](https://repair.dji.com/help/content?customId=01700004973&lang=en&paperDocType=ARTICLE&re=US&spaceId=17).

