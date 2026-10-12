# FIT3179 Data Visualisation 2 — Updated Supermarket Shopping Showcase

Author: Syed Abdul Muid Adnan  
Last updated: 13 October 2026  
Status: **Working critique prototype, not a complete Moodle submission**

## Python versus JavaScript: what is permitted?

- **The assignment explicitly requires Vega-Lite or Vega for maps and diagrams.** Every one of the 12 numbered charts is a separate human-readable Vega-Lite or Vega JSON spec in `charts/`.
- **JavaScript is used by the actual website** (`scripts/main.js`) to fetch JSON and embed Vega/Vega-Lite charts. HTML and CSS are in `index.html` and `style.css`.
- **Python is NOT needed to run the final GitHub Pages website.** `python -m http.server 8000` is only a local file-serving convenience because browsers restrict `file://` JSON loading. Python can also preprocess the underlying CSV data offline; it doesn't render the charts.
- No Matplotlib, Plotly, or Python backend is used to draw web charts.

## How to preview

Unzip, open a terminal inside this folder (where `index.html` is), and run:

```bash
python -m http.server 8000
```

Open `http://localhost:8000` in Chrome. An internet connection is necessary for the Vega libraries and external Australian boundary GeoJSON. If you don't have Python you can use the VS Code **Live Server** extension to preview the same folder.

## Charts (12 panels, 3 distinct map idioms plus an extra tile map)

| # | Chart | Idiom | Rubric grouping |
|---|---|---|---|
| 01 | Supermarket chains / population by state | Choropleth map | Advanced map #1 |
| 02 | Store totals by state | Proportional symbol map | Advanced map #2 |
| 03 | State sizes re-expressed as circles | Dorling cartogram | Advanced map #3 |
| 04 | Chains' relative shares across schematic tiles | Tile-grid map | Advanced, classification confirm with tutor |
| 05 | Coles vs Woolworths store totals | Grouped bar chart | Basic |
| 06 | Retailer densities side-by-side | Connected dot plot | Advanced |
| 07 | Grocery market composition | Vega treemap | Advanced |
| 08 | Roughly 57 of 100 grocery-sales dollars | Waffle chart | Advanced |
| 09 | Market share rank changes | Bump chart | Advanced |
| 10 | Market share change in percentage points | Diverging bar chart | **Treat as basic** |
| 11 | Food retailing turnover 2020–2025 | Area / line chart | Basic |
| 12 | Year-on-year food retailing change | Heatmap | Advanced |

**Rubric threshold:** written DV2 requirements specify **10 minimum charts**; HD column says **more than 10 charts with at least 8 advanced idioms**. This prototype has 12 chart files and at least 8 advanced idioms even if the schematic tile map (#04) is not separately credited. Your tutor has the final say on counting idioms and applying them meaningfully.

## Publish on GitHub Pages

1. Create a *public* repository in your GitHub account, e.g. `FIT3179-DV2-Supermarket-Shopping`.
2. Commit/upload the contents of this entire folder to the *root* (not the ZIP file itself).
3. On GitHub choose Settings → Pages → Deploy from branch → main → /(root).
4. Open the public Pages URL in an incognito window to ensure it works. Python server is not used for hosting.
5. Inspect **all 12 charts**, ensure maps render, hover tooltips work, and both legend highlights work.
6. Place that exact public URL into **Part A** of the assignment template.

## Crucial final requirements not yet complete

- **Hand-drawn A4 sketch** with at least four clearly separated sections, headings, text, varied maps and charts; the rubric awards **0 for digital sketches**. Scan/photograph your own hand sketch, save as PDF and upload it to the same public repo; add the URL in **Part C** of template, alongside the scan.
- **Tutor discussion of your sketch**, and ensure your site follows the sketch closely. The submitted sketch must be for the *same topic*. If you previously submitted a materially different sketch, ask your tutor how to reconcile this.
- Fill **Part B** with domain, Who/Why/What/How; include data sources, dataset production, and reasons for the selected idioms. `SUBMISSION_NOTES.md` contains editable model descriptions.
- Fill **Part D** with a full-size website screenshot (not a cropped selection); test on a smaller laptop without horizontal scrolling.
- Attend the **Week 12 interview** and explain your design choices and code.
- The assignment is due **Sunday 25 October 2026, 11:55pm**. Submit the template on Moodle.
- Check rights/attribution for all external data and geometries. **Acknowledge generative AI** in the submission as well as website.
- Look again at whether the 3 geospatial approaches truly suit your intended story and whether the final design meets tutor feedback; chart count alone does not guarantee a grade.

## Data quality and scope

The location snapshot counts are from 5 Oct 2026 (Woolworths) and 28 Sep 2026 (Coles), derived from ScrapeHero and used only for those *two* chains. The per-person comparison uses the most recent available ABS **March 2026** population release. ACCC market shares are **FY 2002–03, 2006–07, 2022–23** and not 2026; the Metcash category is a wholesale proxy and its limitations matter. The seasonally adjusted food-retailing data are genuine ABS published values for June 2020–June 2025 and cover specialist food and liquor retailing too. This historical ABS series ceased after June 2025; do not present it as the most recent 2026 spending series. The maps use source-linked Australian geographic boundaries and a deliberately schematic Dorling/cartogram layout. Details and original source links are in `data/SOURCES.md` and the website footer.
