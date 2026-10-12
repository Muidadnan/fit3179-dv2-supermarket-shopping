# DV2 submission notes — to adapt in your own words

## Part A: Visualisation URL

[ADD PUBLIC GITHUB PAGES URL AFTER UPLOADING]

## Part B: Domain, Who, Why, What, How

**Domain:** Supermarket shopping in Australia (Topic 1 in the Shopping & Consumer Life domain). The visualisation combines the physical footprint of Woolworths and Coles, historical grocery market shares, and changes in broader food retailing.

**Who:** Interested members of the Australian public, including supermarket customers who want a simple overview of where the two largest supermarket chains are located and what that means for grocery shopping.

**Why:** Readers can compare the geographic footprint of major chains, understand why state store totals are not equivalent to access per resident, and see how estimated market share and national food turnover changed. The goal is communication rather than expert data mining.

**What:** 2026 Australian state-level Coles and Woolworths location counts from ScrapeHero; March 2026 Australian Bureau of Statistics population estimates; national take-home food-and-grocery sales share estimates in the ACCC supermarket inquiry report for three years (2002–03, 2006–07 and 2022–23); and the historical ABS food retailing monthly seasonally-adjusted series from June 2020 to June 2025. Data are tables, with a geographic polygon/point reference. Densities and other basic derived columns were calculated from these public sources; no synthetic observations were used. The map geometry is attributed to an external GeoJSON repository, and only its location data are used, not copied infographics.

**How:** Choropleth map uses quantitative sequential colour for state outlet density; proportional-symbol map uses circle area for absolute numbers at state-representative positions; Dorling cartogram replaces state areas with area-proportional labelled circles in approximately geographic order. A supplementary tile map compares each state's retailer balance without using land area. Grouped bars allow exact store totals to be compared; connected dots allow paired retailer densities to be compared on the same numeric scale. A treemap and waffle chart highlight part-to-whole market shares, while the bump chart shows changes in rank and diverging bars show the direction of percentage-point changes. An area/line chart communicates a five-year turnover time series, and a heatmap makes year-over-year changes across months easy to scan. Information-on-hover and click-to-highlight legends support focus without splitting the single scrolling narrative.

**Design rationale:** Use a restrained consistent colour palette, light background, clear typographic hierarchy, restrained annotations, appropriate visual channels, concise and accurate caveats, and sectional narrative progression (footprint → market structure → spending). Distinguish sales market share from store-location share, and nominal money sales from purchases/volumes. Avoid causal or misleading claims.

**AI acknowledgment draft:** Generative AI (OpenAI ChatGPT, October 2026) assisted with idea development, JavaScript/HTML/CSS, Vega and Vega-Lite specification drafting, derived data calculations, layout, metadata wording and visual critique. I reviewed and adapted the code, figures and writing and checked claims against cited sources. [EDIT TO REFLECT WHAT YOU ACTUALLY DID.]

## Part C: Sketch

[ADD URL OF HAND-DRAWN A4 SKETCH PDF HOSTED ON SAME GITHUB REPO]

The rubric states the sketch receives **zero if made with digital tools**. Draw on paper (not with an AI tool), photograph or scan, and insert a clear full-page image of it in the submitted document. Suggested hand-drawn sections: Hero → Maps/chains (four maps plus two comparisons) → Industry shares (four charts) → Food-spending history (two charts) → Conclusions/sources. Include small chart drawings, headings, brief notes and arrows connecting narrative ideas.

## Part D: Full-size webpage screenshot

[ADD FULL WEBPAGE SCREENSHOT AFTER GITHUB PAGES IS WORKING]

## Quick interview practice

1. Why do you normalise store counts by population for your choropleth? What are the limitations?
2. How is a Dorling cartogram different from a proportional-symbol map on a geographic basemap?
3. Why is a schematic tile map useful, and why might it not count as a separate map idiom?
4. Why does the treemap (part-to-whole) show a different insight from the bump chart (ranking over time)?
5. Explain your exact data sources and what period each dataset describes.
6. How does `vegaEmbed` render a JSON visualisation in the JavaScript webpage?
7. Why are the ABS food retailing numbers nominal rather than food basket quantities?
8. What role did you and AI each play, and how did you verify the charts?
