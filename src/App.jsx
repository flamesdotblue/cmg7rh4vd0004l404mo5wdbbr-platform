import React from 'react';
import HeroCover from './components/HeroCover';
import KPIGrid from './components/KPIGrid';
import SpendingDonut from './components/SpendingDonut';
import TransactionsTable from './components/TransactionsTable';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <HeroCover />

      <main className="relative -mt-24 md:-mt-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <section className="grid gap-6">
            <KPIGrid />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="col-span-1 lg:col-span-2">
                <SpendingDonut />
              </div>
              <div className="col-span-1">
                <TransactionsTable />
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="mt-16 py-10 text-center text-slate-400 text-sm">
        Built for a sleek, modern personal finance experience
      </footer>
    </div>
  );
}
