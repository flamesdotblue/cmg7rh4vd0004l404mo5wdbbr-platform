import React from 'react';
import { PieChart } from 'lucide-react';

const categories = [
  { name: 'Housing', value: 1200, color: '#22d3ee' },
  { name: 'Groceries', value: 540, color: '#f59e0b' },
  { name: 'Transport', value: 230, color: '#6366f1' },
  { name: 'Dining', value: 410, color: '#10b981' },
  { name: 'Subscriptions', value: 180, color: '#f43f5e' },
  { name: 'Other', value: 700, color: '#a78bfa' },
];

function getArcs(data) {
  const total = data.reduce((a, b) => a + b.value, 0);
  let cumulative = 0;
  return data.map((d) => {
    const start = (cumulative / total) * 2 * Math.PI;
    cumulative += d.value;
    const end = (cumulative / total) * 2 * Math.PI;
    return { ...d, start, end, total };
  });
}

function polarToCartesian(cx, cy, r, angle) {
  return {
    x: cx + r * Math.cos(angle - Math.PI / 2),
    y: cy + r * Math.sin(angle - Math.PI / 2),
  };
}

function arcPath(cx, cy, r, t, start, end) {
  const p1 = polarToCartesian(cx, cy, r, start);
  const p2 = polarToCartesian(cx, cy, r, end);
  const largeArc = end - start > Math.PI ? 1 : 0;
  const outer = `M ${p1.x} ${p1.y} A ${r} ${r} 0 ${largeArc} 1 ${p2.x} ${p2.y}`;
  const p3 = polarToCartesian(cx, cy, r - t, end);
  const p4 = polarToCartesian(cx, cy, r - t, start);
  const inner = `L ${p3.x} ${p3.y} A ${r - t} ${r - t} 0 ${largeArc} 0 ${p4.x} ${p4.y} Z`;
  return `${outer} ${inner}`;
}

export default function SpendingDonut() {
  const arcs = getArcs(categories);
  const total = arcs[0]?.total || 1;

  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur p-5 md:p-6 h-full">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-white">Spending Breakdown</h2>
          <p className="text-slate-400 text-sm">This month overview</p>
        </div>
        <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 grid place-items-center text-white/90">
          <PieChart className="h-5 w-5" />
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="relative mx-auto w-full max-w-sm">
          <svg viewBox="0 0 240 240" className="w-full h-auto">
            {arcs.map((a, i) => (
              <path
                key={a.name}
                d={arcPath(120, 120, 100, 28, a.start, a.end)}
                fill={a.color}
                opacity="0.9"
                className="transition-all duration-300 hover:opacity-100"
              />
            ))}
            <defs>
              <filter id="soft-shadow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#000" floodOpacity="0.35" />
              </filter>
            </defs>
            <circle cx="120" cy="120" r="86" fill="#0f172a" filter="url(#soft-shadow)" />
            <text x="120" y="110" textAnchor="middle" className="fill-white" style={{ fontSize: 18, fontWeight: 600 }}>
              Total Spend
            </text>
            <text x="120" y="135" textAnchor="middle" className="fill-white" style={{ fontSize: 26, fontWeight: 700 }}>
              ${total.toLocaleString()}
            </text>
            <text x="120" y="160" textAnchor="middle" className="fill-white/60" style={{ fontSize: 12 }}>
              across {categories.length} categories
            </text>
          </svg>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 content-start">
          {categories.map((c) => (
            <div key={c.name} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-3">
              <div className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full" style={{ backgroundColor: c.color }} />
                <div>
                  <p className="text-sm font-medium text-white">{c.name}</p>
                  <p className="text-xs text-slate-400">{Math.round((c.value / total) * 100)}%</p>
                </div>
              </div>
              <p className="text-sm font-semibold text-white">${c.value.toLocaleString()}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
