import React from 'react';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';

const transactions = [
  { id: 1, name: 'Rent', date: 'Sep 01', amount: -1200, category: 'Housing' },
  { id: 2, name: 'Salary', date: 'Sep 01', amount: 7850, category: 'Income' },
  { id: 3, name: 'Whole Foods', date: 'Sep 06', amount: -126.45, category: 'Groceries' },
  { id: 4, name: 'Spotify', date: 'Sep 08', amount: -9.99, category: 'Subscriptions' },
  { id: 5, name: 'Uber', date: 'Sep 11', amount: -18.7, category: 'Transport' },
  { id: 6, name: 'Cafe Aurora', date: 'Sep 13', amount: -7.5, category: 'Dining' },
];

export default function TransactionsTable() {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur p-5 md:p-6 h-full">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg font-semibold text-white">Recent Activity</h2>
          <p className="text-slate-400 text-sm">Latest transactions</p>
        </div>
        <button className="rounded-lg bg-white/10 text-white px-3 py-1.5 text-xs border border-white/20 hover:bg-white/15 transition">View all</button>
      </div>

      <div className="divide-y divide-white/10">
        {transactions.map((t) => (
          <div key={t.id} className="py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className={`h-9 w-9 rounded-lg grid place-items-center border ${
                  t.amount >= 0
                    ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-300'
                    : 'bg-rose-500/10 border-rose-500/20 text-rose-300'
                }`}
              >
                {t.amount >= 0 ? (
                  <ArrowUpRight className="h-4 w-4" />
                ) : (
                  <ArrowDownRight className="h-4 w-4" />
                )}
              </div>
              <div>
                <p className="text-sm font-medium text-white">{t.name}</p>
                <p className="text-xs text-slate-400">{t.category} · {t.date}</p>
              </div>
            </div>
            <p className={`text-sm font-semibold ${t.amount >= 0 ? 'text-emerald-300' : 'text-rose-300'}`}>
              {t.amount >= 0 ? '+' : '-'}${Math.abs(t.amount).toLocaleString(undefined, { minimumFractionDigits: t.amount % 1 !== 0 ? 2 : 0 })}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
