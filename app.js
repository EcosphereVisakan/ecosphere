const EMBEDDED_FALLBACK_DATA = [
  { date: "2026-10-01", region: "South", state: "Tamil Nadu", sector: "Offices & Education", category: "Recycled A4 Paper", product_name: "EcoBright 75 GSM Recycled A4 (500 Sheets)", channel: "B2B Bulk", units_sold: 450, revenue_inr: 112500, repeat_order: "Yes" },
  { date: "2026-10-02", region: "South", state: "Karnataka", sector: "Offices & Education", category: "Recycled A4 Paper", product_name: "EcoBright 75 GSM Recycled A4 (500 Sheets)", channel: "B2B Bulk", units_sold: 600, revenue_inr: 150000, repeat_order: "Yes" },
  { date: "2026-10-04", region: "West", state: "Maharashtra", sector: "Retail & E-commerce", category: "Kraft & Paper Bags", product_name: "Heavy Duty Kraft Carry Bags (Pack of 100)", channel: "B2B Bulk", units_sold: 320, revenue_inr: 89600, repeat_order: "Yes" },
  { date: "2026-10-05", region: "South", state: "Tamil Nadu", sector: "Food & Beverage", category: "Eco Packaging", product_name: "Compostable Food Containers (Pack of 250)", channel: "Amazon", units_sold: 85, revenue_inr: 34000, repeat_order: "No" },
  { date: "2026-10-07", region: "South", state: "Telangana", sector: "Offices & Education", category: "Recycled A4 Paper", product_name: "EcoBright 75 GSM Recycled A4 (500 Sheets)", channel: "B2B Bulk", units_sold: 400, revenue_inr: 100000, repeat_order: "Yes" },
  { date: "2026-10-09", region: "South", state: "Tamil Nadu", sector: "Hospitality", category: "Eco Packaging", product_name: "Areca & Paper Straws / Cups Combo", channel: "Flipkart", units_sold: 64, revenue_inr: 22400, repeat_order: "No" },
  { date: "2026-10-12", region: "West", state: "Maharashtra", sector: "Offices & Education", category: "Recycled A4 Paper", product_name: "EcoBright 75 GSM Recycled A4 (500 Sheets)", channel: "B2B Bulk", units_sold: 750, revenue_inr: 187500, repeat_order: "Yes" },
  { date: "2026-10-15", region: "South", state: "Karnataka", sector: "Retail & E-commerce", category: "Kraft & Paper Bags", product_name: "Standy Pouches & Tissues Bundle", channel: "Amazon", units_sold: 110, revenue_inr: 49500, repeat_order: "Yes" },
  { date: "2026-10-18", region: "South", state: "Telangana", sector: "Hospitality", category: "Eco Packaging", product_name: "Bagasse & Wooden Cutlery Pack", channel: "Flipkart", units_sold: 52, revenue_inr: 18200, repeat_order: "No" },
  { date: "2026-10-21", region: "South", state: "Tamil Nadu", sector: "Offices & Education", category: "Recycled A4 Paper", product_name: "EcoBright 75 GSM Recycled A4 (500 Sheets)", channel: "B2B Bulk", units_sold: 500, revenue_inr: 125000, repeat_order: "Yes" },
  { date: "2026-10-25", region: "West", state: "Maharashtra", sector: "Food & Beverage", category: "Eco Packaging", product_name: "Compostable Food Containers (Pack of 250)", channel: "B2B Bulk", units_sold: 280, revenue_inr: 112000, repeat_order: "Yes" },
  { date: "2026-11-02", region: "South", state: "Karnataka", sector: "Offices & Education", category: "Recycled A4 Paper", product_name: "EcoBright 75 GSM Recycled A4 (500 Sheets)", channel: "B2B Bulk", units_sold: 820, revenue_inr: 205000, repeat_order: "Yes" },
  { date: "2026-11-08", region: "South", state: "Telangana", sector: "Retail & E-commerce", category: "Kraft & Paper Bags", product_name: "Heavy Duty Kraft Carry Bags (Pack of 100)", channel: "B2B Bulk", units_sold: 410, revenue_inr: 114800, repeat_order: "Yes" },
  { date: "2026-11-14", region: "South", state: "Tamil Nadu", sector: "Offices & Education", category: "Recycled A4 Paper", product_name: "EcoBright 75 GSM Recycled A4 (500 Sheets)", channel: "Amazon", units_sold: 95, revenue_inr: 28500, repeat_order: "No" },
  { date: "2026-11-20", region: "West", state: "Maharashtra", sector: "Offices & Education", category: "Recycled A4 Paper", product_name: "EcoBright 75 GSM Recycled A4 (500 Sheets)", channel: "B2B Bulk", units_sold: 900, revenue_inr: 225000, repeat_order: "Yes" },
  { date: "2026-10-03", region: "North", state: "Delhi", sector: "Retail & E-commerce", category: "Kraft & Paper Bags", product_name: "Recycled Kraft Retail Bags (Pack of 100)", channel: "B2B Bulk", units_sold: 390, revenue_inr: 109200, repeat_order: "Yes" },
  { date: "2026-10-11", region: "East", state: "West Bengal", sector: "Food & Beverage", category: "Eco Packaging", product_name: "Compostable Meal Boxes (Pack of 100)", channel: "B2B Bulk", units_sold: 230, revenue_inr: 92000, repeat_order: "Yes" },
  { date: "2026-10-16", region: "Central", state: "Madhya Pradesh", sector: "Offices & Education", category: "Recycled A4 Paper", product_name: "Recycled Office Paper (500 Sheets)", channel: "B2B Bulk", units_sold: 340, revenue_inr: 85000, repeat_order: "Yes" },
  { date: "2026-10-22", region: "Northeast", state: "Assam", sector: "Agriculture & Rural Retail", category: "Kraft & Paper Bags", product_name: "Compostable Produce Bags (Pack of 50)", channel: "Direct", units_sold: 140, revenue_inr: 28000, repeat_order: "No" },
  { date: "2026-11-04", region: "North", state: "Uttar Pradesh", sector: "Hospitality", category: "Eco Packaging", product_name: "Bagasse Food Trays (Pack of 100)", channel: "Amazon", units_sold: 175, revenue_inr: 52500, repeat_order: "No" },
  { date: "2026-11-10", region: "East", state: "Odisha", sector: "Agriculture & Rural Retail", category: "Kraft & Paper Bags", product_name: "Recycled Paper Produce Sacks (Pack of 25)", channel: "Direct", units_sold: 95, revenue_inr: 19000, repeat_order: "No" },
  { date: "2026-11-16", region: "Central", state: "Chhattisgarh", sector: "Food & Beverage", category: "Eco Packaging", product_name: "Compostable Takeaway Containers (Pack of 100)", channel: "B2B Bulk", units_sold: 210, revenue_inr: 84000, repeat_order: "Yes" },
  { date: "2026-11-21", region: "Northeast", state: "Meghalaya", sector: "Retail & E-commerce", category: "Kraft & Paper Bags", product_name: "Recycled Kraft Shopping Bags (Pack of 50)", channel: "Amazon", units_sold: 120, revenue_inr: 30000, repeat_order: "No" }
];

const state = {
  rawRows: [],
  charts: { byRegion: null, bySector: null, byMonth: null }
};

const els = {
  sourceTypeSelect: document.getElementById("sourceTypeSelect"),
  remoteUrlGroup: document.getElementById("remoteUrlGroup"),
  remoteUrlInput: document.getElementById("remoteUrlInput"),
  loadSourceBtn: document.getElementById("loadSourceBtn"),
  fileUploadInput: document.getElementById("fileUploadInput"),
  exportCsvBtn: document.getElementById("exportCsvBtn"),
  resetDataBtn: document.getElementById("resetDataBtn"),
  statusBanner: document.getElementById("statusBanner"),
  regionFilter: document.getElementById("regionFilter"),
  stateFilter: document.getElementById("stateFilter"),
  sectorFilter: document.getElementById("sectorFilter"),
  categoryFilter: document.getElementById("categoryFilter"),
  searchFilter: document.getElementById("searchFilter"),
  kpiRevenue: document.getElementById("kpiRevenue"),
  kpiOrders: document.getElementById("kpiOrders"),
  kpiUnits: document.getElementById("kpiUnits"),
  kpiSector: document.getElementById("kpiSector"),
  kpiSectorMeta: document.getElementById("kpiSectorMeta"),
  kpiRegions: document.getElementById("kpiRegions"),
  kpiRegionsMeta: document.getElementById("kpiRegionsMeta"),
  ordersTableBody: document.getElementById("ordersTableBody"),
  tableCount: document.getElementById("tableCount"),
  sourcesList: document.getElementById("sourcesList"),
  monthlyTrendNote: document.getElementById("monthlyTrendNote"),
  insightTitle: document.getElementById("insightTitle"),
  insightText: document.getElementById("insightText")
};

function setStatus(message, isError = false) {
  els.statusBanner.innerHTML = message;
  els.statusBanner.classList.toggle("error", isError);
}

function parseCSV(csvText) {
  const lines = csvText.split(/\r?\n/).filter((line) => line.trim());
  if (lines.length < 2) return [];
  const headers = splitCSVLine(lines[0]).map((header) => header.trim().toLowerCase());
  return lines.slice(1).map((line) => {
    const values = splitCSVLine(line);
    const row = {};
    headers.forEach((header, index) => {
      row[header] = (values[index] ?? "").trim();
    });
    return normalizeRow(row);
  });
}

function splitCSVLine(line) {
  const values = [];
  let value = "";
  let inQuotes = false;
  for (let index = 0; index < line.length; index += 1) {
    const character = line[index];
    if (character === '"') {
      if (inQuotes && line[index + 1] === '"') {
        value += '"';
        index += 1;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (character === "," && !inQuotes) {
      values.push(value);
      value = "";
    } else {
      value += character;
    }
  }
  values.push(value);
  return values;
}

function inferSector(row) {
  const hint = `${row.category || ""} ${row.product_name || row.product || ""}`.toLowerCase();
  if (/paper|office|stationery|school|tissue/.test(hint)) return "Offices & Education";
  if (/food|container|cutlery|straw|cup|bagasse|areca|compostable/.test(hint)) return "Food & Beverage";
  if (/bag|pouch|retail|shopping|kraft/.test(hint)) return "Retail & E-commerce";
  return "Other / Unspecified";
}

function normalizeRow(row) {
  const unitsValue = Number(row.units_sold ?? row.units ?? 0);
  const revenueValue = Number(row.revenue_inr ?? row.revenue ?? row.amount ?? 0);
  const repeatRaw = String(row.repeat_order ?? row.repeat ?? "").toLowerCase();
  const isRepeat = ["yes", "true", "1", "y"].includes(repeatRaw);
  const normalized = {
    date: String(row.date || "-"),
    region: String(row.region || "Unspecified"),
    state: String(row.state || "Unspecified"),
    sector: String(row.sector || row.buyer_sector || inferSector(row)),
    category: String(row.category || "General"),
    product_name: String(row.product_name || row.product || "Item"),
    channel: String(row.channel || "Direct"),
    units_sold: Number.isFinite(unitsValue) ? unitsValue : 0,
    revenue_inr: Number.isFinite(revenueValue) ? revenueValue : 0,
    repeat_order: isRepeat ? "Yes" : "No",
    isRepeat
  };
  return normalized;
}

function formatINR(value) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(value);
}

async function loadDataSourcesCatalog() {
  const fallbackSources = [
    { name: "Sample CSV", description: "Illustrative regional eco-product orders.", how_to_connect: "Default sample source" },
    { name: "Sample JSON", description: "Structured mirror of the bundled sample.", how_to_connect: "Select Sample dataset (JSON)" },
    { name: "Published spreadsheet", description: "Connect a published CSV URL.", how_to_connect: "Paste a CORS-accessible CSV URL" },
    { name: "JSON API", description: "Connect a JSON array or records/data/rows object.", how_to_connect: "Paste a CORS-enabled JSON URL" }
  ];
  try {
    const response = await fetch("data/data_sources.json");
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    renderSourcesCatalog(data.sources || fallbackSources);
  } catch (error) {
    renderSourcesCatalog(fallbackSources);
  }
}

function renderSourcesCatalog(sources) {
  els.sourcesList.innerHTML = sources.map((source) => `
    <div class="source-item">
      <h3>${escapeHtml(source.name)}</h3>
      <p>${escapeHtml(source.description)}</p>
      <code>${escapeHtml(source.how_to_connect)}</code>
    </div>
  `).join("");
}

function getRecords(json) {
  if (Array.isArray(json)) return json;
  return json.records || json.data || json.rows || [];
}

async function loadFromSource() {
  const sourceType = els.sourceTypeSelect.value;
  try {
    if (sourceType === "local_csv") {
      try {
        const response = await fetch("data/sales_data.csv");
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        state.rawRows = parseCSV(await response.text());
        setStatus("Active source: <strong>Sample dataset (CSV)</strong>");
      } catch (error) {
        state.rawRows = EMBEDDED_FALLBACK_DATA.map(normalizeRow);
        setStatus("Active source: <strong>Bundled sample dataset</strong> (offline fallback)");
      }
    } else if (sourceType === "local_json") {
      try {
        const response = await fetch("data/sales_data.json");
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        state.rawRows = getRecords(await response.json()).map(normalizeRow);
        setStatus("Active source: <strong>Sample dataset (JSON)</strong>");
      } catch (error) {
        state.rawRows = EMBEDDED_FALLBACK_DATA.map(normalizeRow);
        setStatus("Active source: <strong>Bundled sample dataset</strong> (offline fallback)");
      }
    } else if (sourceType === "google_sheets" || sourceType === "json_api") {
      const url = els.remoteUrlInput.value.trim();
      if (!url) {
        setStatus("Enter a data URL before loading.", true);
        return;
      }
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP ${response.status} while fetching data`);
      const contentType = response.headers.get("content-type") || "";
      if (sourceType === "json_api" || contentType.includes("application/json")) {
        state.rawRows = getRecords(await response.json()).map(normalizeRow);
      } else {
        state.rawRows = parseCSV(await response.text());
      }
      setStatus(`Active source: <strong>${escapeHtml(url)}</strong>`);
    }
    if (!state.rawRows.length) throw new Error("The selected source contains no usable records.");
    populateFilterOptions();
    renderDashboard();
  } catch (error) {
    setStatus(`Could not load data: ${escapeHtml(error.message)}`, true);
  }
}

function handleFileUpload(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const content = String(reader.result || "");
      if (file.name.toLowerCase().endsWith(".json")) {
        state.rawRows = getRecords(JSON.parse(content)).map(normalizeRow);
      } else {
        state.rawRows = parseCSV(content);
      }
      if (!state.rawRows.length) throw new Error("The file contains no usable records.");
      setStatus(`Active source: <strong>Uploaded file (${escapeHtml(file.name)})</strong>`);
      populateFilterOptions();
      renderDashboard();
    } catch (error) {
      setStatus(`Could not read uploaded file: ${escapeHtml(error.message)}`, true);
    }
  };
  reader.onerror = () => setStatus("Could not read the selected file.", true);
  reader.readAsText(file);
  event.target.value = "";
}

function exportFilteredCSV() {
  const rows = getFilteredRows();
  const headers = ["date", "region", "state", "sector", "category", "product_name", "channel", "units_sold", "revenue_inr", "repeat_order"];
  const csvLines = [
    headers.join(","),
    ...rows.map((row) => headers.map((header) => {
      const value = String(row[header] ?? "");
      return /[",\r\n]/.test(value) ? `"${value.replaceAll('"', '""')}"` : value;
    }).join(","))
  ];
  const blob = new Blob([csvLines.join("\n")], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "ecoscope_filtered_demand.csv";
  link.click();
  URL.revokeObjectURL(url);
}

function uniqueValues(rows, key) {
  return [...new Set(rows.map((row) => row[key]).filter(Boolean))].sort((a, b) => a.localeCompare(b));
}

function fillSelect(select, values, allLabel) {
  const previous = select.value;
  select.innerHTML = `<option value="ALL">${escapeHtml(allLabel)}</option>` +
    values.map((value) => `<option value="${escapeAttr(value)}">${escapeHtml(value)}</option>`).join("");
  select.value = values.includes(previous) ? previous : "ALL";
}

function populateFilterOptions() {
  fillSelect(els.regionFilter, uniqueValues(state.rawRows, "region"), "All regions");
  fillSelect(els.stateFilter, uniqueValues(state.rawRows, "state"), "All states");
  fillSelect(els.sectorFilter, uniqueValues(state.rawRows, "sector"), "All sectors");
  fillSelect(els.categoryFilter, uniqueValues(state.rawRows, "category"), "All categories");
}

function getFilteredRows() {
  const region = els.regionFilter.value;
  const stateName = els.stateFilter.value;
  const sector = els.sectorFilter.value;
  const category = els.categoryFilter.value;
  const query = els.searchFilter.value.trim().toLowerCase();
  return state.rawRows.filter((row) => {
    if (region !== "ALL" && row.region !== region) return false;
    if (stateName !== "ALL" && row.state !== stateName) return false;
    if (sector !== "ALL" && row.sector !== sector) return false;
    if (category !== "ALL" && row.category !== category) return false;
    return !query || `${row.product_name} ${row.category} ${row.state} ${row.region} ${row.sector}`.toLowerCase().includes(query);
  });
}

function groupSum(rows, key, valueKey = "units_sold") {
  const totals = new Map();
  rows.forEach((row) => totals.set(row[key] || "Unspecified", (totals.get(row[key] || "Unspecified") || 0) + row[valueKey]));
  return [...totals.entries()].sort((a, b) => b[1] - a[1]);
}

function groupMonthlyDemand(rows) {
  const totals = new Map();
  rows.forEach((row) => {
    const month = /^(\d{4})-(0[1-9]|1[0-2])(?:-\d{2})?$/.exec(row.date);
    if (!month) return;
    const key = `${month[1]}-${month[2]}`;
    totals.set(key, (totals.get(key) || 0) + row.units_sold);
  });
  return [...totals.entries()]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([key, units]) => ({
      key,
      units,
      label: new Intl.DateTimeFormat("en-IN", { month: "short", year: "numeric", timeZone: "UTC" })
        .format(new Date(`${key}-01T00:00:00Z`))
    }));
}

function renderDashboard() {
  const rows = getFilteredRows();
  const totalUnits = rows.reduce((sum, row) => sum + row.units_sold, 0);
  const totalRevenue = rows.reduce((sum, row) => sum + row.revenue_inr, 0);
  const bySector = groupSum(rows, "sector");
  const byRegion = groupSum(rows, "region");
  const byMonth = groupMonthlyDemand(rows);
  const regionCount = new Set(rows.map((row) => row.region)).size;

  els.kpiUnits.textContent = totalUnits.toLocaleString("en-IN");
  els.kpiRevenue.textContent = formatINR(totalRevenue);
  els.kpiOrders.textContent = `${rows.length.toLocaleString("en-IN")} recorded order${rows.length === 1 ? "" : "s"}`;
  els.kpiSector.textContent = bySector[0]?.[0] || "—";
  els.kpiSectorMeta.textContent = bySector.length
    ? `${bySector[0][1].toLocaleString("en-IN")} units in selected view`
    : "No sector data yet";
  els.kpiRegions.textContent = regionCount.toLocaleString("en-IN");
  els.kpiRegionsMeta.textContent = `${regionCount === 1 ? "region" : "regions"} represented in this view`;
  els.tableCount.textContent = `${rows.length.toLocaleString("en-IN")} record${rows.length === 1 ? "" : "s"}`;

  renderTable(rows);
  renderCharts(rows, byMonth);
  renderInsight(rows, byRegion, bySector);
}

function renderInsight(rows, byRegion, bySector) {
  if (!rows.length) {
    els.insightTitle.textContent = "No matching demand signals";
    els.insightText.textContent = "Try broadening your filters or load another dataset.";
    return;
  }
  const [topRegion, regionUnits] = byRegion[0];
  const [topSector, sectorUnits] = bySector[0];
  const share = Math.round((sectorUnits / rows.reduce((sum, row) => sum + row.units_sold, 0)) * 100);
  els.insightTitle.textContent = `${topRegion} leads in recorded demand`;
  els.insightText.textContent = `${topSector} is the strongest buyer sector with ${sectorUnits.toLocaleString("en-IN")} units (${share}% of this view). ${topRegion} contributes ${regionUnits.toLocaleString("en-IN")} units across the selected records.`;
}

function renderTable(rows) {
  if (!rows.length) {
    els.ordersTableBody.innerHTML = '<tr><td class="empty-state" colspan="8">No matching records. Adjust the filters to explore demand.</td></tr>';
    return;
  }
  els.ordersTableBody.innerHTML = rows.map((row) => `
    <tr>
      <td>${escapeHtml(row.date)}</td><td><span class="region-tag">${escapeHtml(row.region)}</span></td>
      <td>${escapeHtml(row.state)}</td><td>${escapeHtml(row.sector)}</td>
      <td>${escapeHtml(row.category)}</td><td class="product-cell">${escapeHtml(row.product_name)}</td>
      <td class="num">${row.units_sold.toLocaleString("en-IN")}</td>
      <td class="num">${formatINR(row.revenue_inr)}</td>
    </tr>
  `).join("");
}

function renderCharts(rows, byMonth) {
  if (typeof Chart === "undefined") return;
  if (state.charts.byRegion) state.charts.byRegion.destroy();
  if (state.charts.bySector) state.charts.bySector.destroy();
  if (state.charts.byMonth) state.charts.byMonth.destroy();
  const byRegion = groupSum(rows, "region");
  const bySector = groupSum(rows, "sector");
  state.charts.byRegion = new Chart(document.getElementById("demandByRegionChart").getContext("2d"), {
    type: "bar",
    data: {
      labels: byRegion.map(([label]) => label),
      datasets: [{ label: "Units sold", data: byRegion.map(([, value]) => value), backgroundColor: "#267452" }]
    },
    options: { valueFormat: "number" }
  });
  state.charts.bySector = new Chart(document.getElementById("demandBySectorChart").getContext("2d"), {
    type: "doughnut",
    data: {
      labels: bySector.map(([label]) => label),
      datasets: [{
        data: bySector.map(([, value]) => value),
        backgroundColor: ["#267452", "#81b99b", "#d9a64a", "#508b9b", "#c5d8ca", "#a9a59a"]
      }]
    },
    options: { valueFormat: "number" }
  });
  const previousMonth = byMonth[byMonth.length - 2];
  const latestMonth = byMonth[byMonth.length - 1];
  if (latestMonth && previousMonth && previousMonth.units > 0) {
    const change = ((latestMonth.units - previousMonth.units) / previousMonth.units) * 100;
    const direction = change > 0 ? "up" : change < 0 ? "down" : "unchanged";
    els.monthlyTrendNote.textContent =
      `${latestMonth.label} recorded ${latestMonth.units.toLocaleString("en-IN")} units, ${direction} ${Math.abs(change).toFixed(1)}% from ${previousMonth.label}. Totals reflect available records; partial months may be incomplete.`;
  } else if (latestMonth) {
    els.monthlyTrendNote.textContent =
      `${latestMonth.label} recorded ${latestMonth.units.toLocaleString("en-IN")} units. Add another month of records to compare periods.`;
  } else {
    els.monthlyTrendNote.textContent = "No valid dates in the selected records. Use dates formatted as YYYY-MM-DD to see monthly demand.";
  }
  state.charts.byMonth = new Chart(document.getElementById("demandByMonthChart").getContext("2d"), {
    type: "bar",
    data: {
      labels: byMonth.map((month) => month.label),
      datasets: [{ label: "Units sold", data: byMonth.map((month) => month.units), backgroundColor: "#508b9b" }]
    },
    options: { valueFormat: "number" }
  });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function escapeAttr(value) {
  return escapeHtml(value).replaceAll("'", "&#39;");
}

els.sourceTypeSelect.addEventListener("change", () => {
  els.remoteUrlGroup.style.display = ["google_sheets", "json_api"].includes(els.sourceTypeSelect.value) ? "flex" : "none";
});
els.loadSourceBtn.addEventListener("click", loadFromSource);
els.fileUploadInput.addEventListener("change", handleFileUpload);
els.exportCsvBtn.addEventListener("click", exportFilteredCSV);
els.resetDataBtn.addEventListener("click", () => {
  els.sourceTypeSelect.value = "local_csv";
  els.remoteUrlGroup.style.display = "none";
  [els.regionFilter, els.stateFilter, els.sectorFilter, els.categoryFilter].forEach((select) => { select.value = "ALL"; });
  els.searchFilter.value = "";
  loadFromSource();
});
[els.regionFilter, els.stateFilter, els.sectorFilter, els.categoryFilter, els.searchFilter].forEach((element) => {
  element.addEventListener("input", renderDashboard);
  element.addEventListener("change", renderDashboard);
});

loadDataSourcesCatalog();
loadFromSource();
