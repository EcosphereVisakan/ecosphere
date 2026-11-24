# EcoScope — Sustainable Demand Intelligence

EcoScope is an offline-ready dashboard for exploring eco-friendly product demand across Indian regions, states, and buyer sectors. It compares units sold, sales value, regional coverage, sector demand, and monthly changes in recorded demand, with filters for geography, buyer sector, and product category.

The bundled sample contains illustrative records across North, South, East, West, Central, and Northeast India. It demonstrates the dashboard and is not market research or a forecast. Use your own validated sales data for business decisions.

## Run the dashboard

- **Offline:** Open `index.html` in a modern browser.
- **Local server:** Run `python server.py` (Python 3.8+, no additional packages required).

## Host it as a web app

EcoScope is a static, browser-only app: it has no build step, database, or backend. Publish the contents of `dashboard-app-v3/` as the website root, keeping the `data/` and `vendor/` folders beside `index.html`.

- **GitHub Pages:** Push this folder to a repository, then enable Pages for the branch and folder containing `index.html`.
- **Netlify or another static host:** Deploy this folder as-is; leave the build command empty and set the publish directory to the folder containing `index.html`.
- **Custom web server:** Configure it to serve `index.html` for the site root and serve `.js`, `.css`, `.json`, and `.csv` files from the same directory tree.

The app loads its bundled datasets and chart engine locally. Data imported from a file stays in the browser; remote CSV/JSON sources must allow browser access (CORS). Do not host private records publicly unless the site itself is access-controlled.

## Bring your own data

Import a CSV or JSON file, or connect a published CSV / CORS-enabled JSON URL. Each record should include `region`, `state`, `sector`, `category`, `product_name`, `units_sold`, and `revenue_inr`; `date`, `channel`, and `repeat_order` are optional. If `sector` is omitted, the dashboard estimates it from product and category names, so explicit buyer-sector data is recommended for reliable sector analysis.

The dashboard can export the currently filtered records to CSV. Monthly comparisons are based on the records available for each period; partial months should not be interpreted as full-period forecasts. No data is sent anywhere when using local files.
