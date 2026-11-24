/* LocalCharts v1.0.0 - Zero-dependency HTML5 Canvas Charting Engine */
(function (global) {
  "use strict";

  class LocalChart {
    constructor(ctx, config) {
      this.canvas = ctx.canvas || ctx;
      this.ctx = this.canvas.getContext("2d");
      this.config = config || {};
      this._resizeObserver = null;
      this.render();
      if (typeof ResizeObserver !== "undefined" && this.canvas.parentElement) {
        this._resizeObserver = new ResizeObserver(() => this.render());
        this._resizeObserver.observe(this.canvas.parentElement);
      }
    }

    destroy() {
      if (this._resizeObserver) {
        this._resizeObserver.disconnect();
        this._resizeObserver = null;
      }
      const { width, height } = this.canvas;
      this.ctx.clearRect(0, 0, width, height);
    }

    render() {
      const parent = this.canvas.parentElement;
      const cssWidth = parent ? parent.clientWidth : 400;
      const cssHeight = parent ? parent.clientHeight : 260;
      if (cssWidth <= 0 || cssHeight <= 0) return;

      const dpr = window.devicePixelRatio || 1;
      this.canvas.width = Math.floor(cssWidth * dpr);
      this.canvas.height = Math.floor(cssHeight * dpr);
      this.canvas.style.width = cssWidth + "px";
      this.canvas.style.height = cssHeight + "px";

      const ctx = this.ctx;
      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, cssWidth, cssHeight);

      const type = this.config.type || "bar";
      if (type === "doughnut" || type === "pie") {
        this._renderDoughnut(ctx, cssWidth, cssHeight);
      } else {
        this._renderBar(ctx, cssWidth, cssHeight);
      }
      ctx.restore();
    }

    _renderBar(ctx, w, h) {
      const labels = (this.config.data && this.config.data.labels) || [];
      const dataset = (this.config.data && this.config.data.datasets && this.config.data.datasets[0]) || { data: [] };
      const values = dataset.data || [];
      const barColor = Array.isArray(dataset.backgroundColor) ? dataset.backgroundColor[0] : (dataset.backgroundColor || "#1b6b48");

      if (!labels.length || !values.length) {
        this._drawEmpty(ctx, w, h);
        return;
      }

      const padLeft = 68;
      const padRight = 18;
      const padTop = 20;
      const padBottom = 42;
      const plotW = Math.max(40, w - padLeft - padRight);
      const plotH = Math.max(40, h - padTop - padBottom);
      const maxVal = Math.max(...values, 1);
      const ticks = 4;

      ctx.font = "11px -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif";
      ctx.strokeStyle = "#e3ebe6";
      ctx.fillStyle = "#5a6b62";
      ctx.lineWidth = 1;

      for (let i = 0; i <= ticks; i++) {
        const ratio = i / ticks;
        const y = padTop + plotH - ratio * plotH;
        const tickVal = Math.round(maxVal * ratio);
        ctx.beginPath();
        ctx.moveTo(padLeft, y);
        ctx.lineTo(padLeft + plotW, y);
        ctx.stroke();

        ctx.textAlign = "right";
        ctx.textBaseline = "middle";
        ctx.fillText(this._compactNumber(tickVal), padLeft - 8, y);
      }

      const slotW = plotW / labels.length;
      const barW = Math.min(54, slotW * 0.56);

      labels.forEach((label, idx) => {
        const val = Number(values[idx]) || 0;
        const barH = (val / maxVal) * plotH;
        const x = padLeft + idx * slotW + (slotW - barW) / 2;
        const y = padTop + plotH - barH;

        ctx.fillStyle = barColor;
        this._roundRect(ctx, x, y, barW, barH, 6);
        ctx.fill();

        ctx.fillStyle = "#16221c";
        ctx.textAlign = "center";
        ctx.textBaseline = "bottom";
        ctx.fillText(this._compactNumber(val), x + barW / 2, Math.max(padTop + 10, y - 4));

        ctx.fillStyle = "#5a6b62";
        ctx.textBaseline = "top";
        const shortLabel = label.length > 14 ? label.slice(0, 13) + "…" : label;
        ctx.fillText(shortLabel, x + barW / 2, padTop + plotH + 10);
      });
    }

    _renderDoughnut(ctx, w, h) {
      const labels = (this.config.data && this.config.data.labels) || [];
      const dataset = (this.config.data && this.config.data.datasets && this.config.data.datasets[0]) || { data: [] };
      const values = (dataset.data || []).map((v) => Number(v) || 0);
      const colors = dataset.backgroundColor || ["#1b6b48", "#4f9d79", "#9acbb4", "#d99b26", "#3b82f6"];
      const total = values.reduce((a, b) => a + b, 0);

      if (!labels.length || total <= 0) {
        this._drawEmpty(ctx, w, h);
        return;
      }

      const legendW = Math.min(170, w * 0.42);
      const chartAreaW = w - legendW;
      const cx = chartAreaW / 2;
      const cy = h / 2;
      const outerR = Math.max(30, Math.min(chartAreaW, h) * 0.40);
      const innerR = outerR * 0.56;

      let startAngle = -Math.PI / 2;
      values.forEach((val, idx) => {
        const sliceAngle = (val / total) * Math.PI * 2;
        ctx.beginPath();
        ctx.arc(cx, cy, outerR, startAngle, startAngle + sliceAngle);
        ctx.arc(cx, cy, innerR, startAngle + sliceAngle, startAngle, true);
        ctx.closePath();
        ctx.fillStyle = colors[idx % colors.length];
        ctx.fill();
        startAngle += sliceAngle;
      });

      ctx.fillStyle = "#16221c";
      ctx.font = "bold 12px -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(this._compactNumber(total), cx, cy);

      const legendX = chartAreaW + 8;
      const itemH = 24;
      const startY = Math.max(16, (h - labels.length * itemH) / 2);
      ctx.font = "12px -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif";
      ctx.textAlign = "left";
      ctx.textBaseline = "middle";

      labels.forEach((label, idx) => {
        const y = startY + idx * itemH;
        const pct = ((values[idx] / total) * 100).toFixed(0);
        ctx.fillStyle = colors[idx % colors.length];
        ctx.fillRect(legendX, y - 5, 10, 10);
        ctx.fillStyle = "#16221c";
        const text = `${label} (${pct}%)`;
        ctx.fillText(text.length > 20 ? text.slice(0, 19) + "…" : text, legendX + 16, y);
      });
    }

    _roundRect(ctx, x, y, w, h, r) {
      const radius = Math.min(r, w / 2, h / 2);
      ctx.beginPath();
      ctx.moveTo(x + radius, y);
      ctx.lineTo(x + w - radius, y);
      ctx.quadraticCurveTo(x + w, y, x + w, y + radius);
      ctx.lineTo(x + w, y + h);
      ctx.lineTo(x, y + h);
      ctx.lineTo(x, y + radius);
      ctx.quadraticCurveTo(x, y, x + radius, y);
      ctx.closePath();
    }

    _compactNumber(num) {
      if (this.config.options && this.config.options.valueFormat === "number") {
        if (num >= 1000000000) return (num / 1000000000).toFixed(1) + "B";
        if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
        if (num >= 1000) return (num / 1000).toFixed(1) + "k";
        return String(num);
      }
      if (num >= 10000000) return "₹" + (num / 10000000).toFixed(1) + "Cr";
      if (num >= 100000) return "₹" + (num / 100000).toFixed(1) + "L";
      if (num >= 1000) return "₹" + (num / 1000).toFixed(0) + "k";
      return "₹" + num;
    }

    _drawEmpty(ctx, w, h) {
      ctx.fillStyle = "#5a6b62";
      ctx.font = "13px -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("No chart data for current filters", w / 2, h / 2);
    }
  }

  global.Chart = LocalChart;
})(window);
