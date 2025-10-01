import React from 'react';
import Spline from '@splinetool/react-spline';
import { Wallet, Settings } from 'lucide-react';

export default function HeroCover() {
  return (
    <header className="relative h-[64vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/IKzHtP5ThSO83edK/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/40 to-slate-950 pointer-events-none" />

      <div className="relative z-10 h-full">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-orange-400 to-blue-500 grid place-items-center shadow-lg shadow-orange-500/20">
              <Wallet className="h-5 w-5 text-white" />
            </div>
            <span className="font-semibold tracking-tight text-white">FlowLedger</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-white/80">
            <button className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-sm backdrop-blur hover:bg-white/15 transition">Sign in</button>
            <button className="rounded-full border border-white/20 bg-white/20 px-3 py-1.5 text-sm backdrop-blur flex items-center gap-2 hover:bg-white/25 transition">
              <Settings className="h-4 w-4" />
              Settings
            </button>
          </div>
        </nav>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-[calc(100%-64px)] flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]">
              Your Money. Clear and Effortless.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-white/85">
              Track spending, monitor budgets, and visualize cash flow with a minimal, futuristic dashboard designed for clarity.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <button className="rounded-xl bg-white text-slate-900 px-5 py-3 text-sm font-medium shadow-[0_8px_24px_rgba(255,255,255,0.15)] hover:shadow-[0_12px_32px_rgba(255,255,255,0.18)] transition">
                Start Tracking
              </button>
              <button className="rounded-xl bg-white/10 text-white px-5 py-3 text-sm font-medium border border-white/20 backdrop-blur hover:bg-white/15 transition">
                Live Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
