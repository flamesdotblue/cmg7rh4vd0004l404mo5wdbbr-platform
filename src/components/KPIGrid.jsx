import React from 'react';
import { DollarSign, TrendingUp, TrendingDown, CreditCard } from 'lucide-react';

const cards = [
  {
    title: 'Net Worth',
    value: '$48,920',
    delta: '+4.2%',
    positive: true,
    icon: DollarSign,
    gradient: 'from-emerald-400/20 to-emerald-400/10',
  },
  {
    title: 'Monthly Income',
    value: '$7,850',
    delta: '+2.1%',
    positive: true,
    icon: TrendingUp,
    gradient: 'from-blue-400/20 to-blue-400/10',
  },
  {
    title: 'Monthly Spend',
    value: '$3,260',
    delta: '-1.4%',
    positive: false,
    icon: TrendingDown,
    gradient: 'from-orange-400/20 to-orange-400/10',
  },
  {
    title: 'Credit Utilization',
    value: '23%',
    delta: '-3%',
    positive: true,
    icon: CreditCard,
    gradient: 'from-fuchsia-400/20 to-fuchsia-400/10',
  },
];

export default function KPIGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((c) => (
        <div
          key={c.title}
          className="relative rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur overflow-hidden p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
        >
          <div className={`absolute -top-16 -right-8 h-40 w-40 rounded-full bg-gradient-to-br ${c.gradient} blur-2xl`} />
          <div className="relative flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-400">{c.title}</p>
              <p className="mt-2 text-2xl font-semibold text-white">{c.value}</p>
              <span
                className={`mt-2 inline-flex items-center rounded-full px-2 py-1 text-xs font-medium border ${
                  c.positive
                    ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20'
                    : 'bg-rose-500/10 text-rose-300 border-rose-500/20'
                }`}
              >
                {c.delta}
              </span>
            </div>
            <div className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 grid place-items-center text-white/90">
              <c.icon className="h-5 w-5" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
