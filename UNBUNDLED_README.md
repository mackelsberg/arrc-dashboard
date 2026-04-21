# Unbundled ARRC Dashboard

This `/unbundled` directory contains a clean, editable version of the ARRC dashboard extracted from the Claude Design bundler format.

## Structure

```
unbundled/
  index.html          ← Main HTML file
  styles.css          ← All CSS (fonts, layout, colors)
  map.js              ← Map data and D3 rendering logic
  assets/
    ├── *.woff2       ← Font files (Inter and serif)
    ├── *.json        ← US map topology (TopoJSON)
    ├── *.js          ← D3 (7e11...) and TopoJSON (489d...) libraries
    └── *.png         ← ARRC logo
```

## Files

- **index.html**: Main page. Loads CSS, then D3/TopoJSON, then map.js. The `window.__resources` object maps asset names to file paths.
- **styles.css**: Brand colors, typography, layout. Font URLs already point to `assets/*.woff2` files.
- **map.js**: The entire map rendering logic: the `points` array (22 institutions), color functions, D3 projection and drawing, and tooltip handlers. This is where you'll add the network toggle and zoom controls.
- **assets/**: Fonts, D3/TopoJSON libraries, the US map GeoJSON topology, and the logo.

## Testing

Run a local server:
```bash
cd unbundled
python3 -m http.server 8000
# Visit http://localhost:8000
```

The page should render identically to the original bundled version.

## Next: Network Toggle and Zoom

After confirming the unbundled version works:
1. Add network institution geocoding to a new data file (e.g., `network-institutions.js`)
2. Add toggle switch HTML above the map
3. Add zoom controls (buttons + d3-zoom handler)
4. Update map.js to render network dots when toggled
5. Update the legend to show network institution entry when active

See the plan in the main conversation for details on placement, geocoding approach, and zoom behavior.
