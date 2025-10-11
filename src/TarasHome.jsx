// src/TarasHome.jsx
import React from "react"

const SECTORS = [
  {
    name: "Retail & eCommerce",
    pain: "Thin margins, volatile demand, high service overheads.",
    wins: [
      "AI agents for 24/7 support & returns",
      "Personalised promotions & cross-sell",
      "Demand forecasting to reduce stockouts",
    ],
  },
  {
    name: "Manufacturing & Logistics",
    pain: "Downtime, forecasting errors, manual paperwork.",
    wins: [
      "Predictive maintenance with sensor data",
      "AI scheduling to reduce idle time",
      "Autofilled export docs & PODs",
    ],
  },
  {
    name: "Financial Services",
    pain: "Compliance overhead, slow onboarding, churn.",
    wins: [
      "KYC automation & document extraction",
      "AI advisors for SMEs & retail customers",
      "Early churn risk detection",
    ],
  },
  {
    name: "Healthcare",
    pain: "Admin burden, slow triage, leakage in referrals.",
    wins: [
      "AI intake & triage assistants",
      "Automated ICD coding & claims support",
      "No-show reduction with smart reminders",
    ],
  },
  {
    name: "Mining & Energy",
    pain: "Safety risk, equipment failure, complex reporting.",
    wins: [
      "Anomaly detection from telemetry",
      "LLM copilots for safety & SOP queries",
      "Automated sustainability reporting",
    ],
  },
  {
    name: "Hospitality & Tourism",
    pain: "Seasonality, slow responses, manual quoting.",
    wins: [
      "24/7 itinerary assistants (web/WhatsApp)",
      "Dynamic pricing recommendations",
      "Auto-quote generation & follow-ups",
    ],
  },
]

export default function TarasHome() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAF7F2] to-white text-[#1A1A1A]">
      {/* NAV */}
      <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="TarasAI" className="h-9 w-9 rounded-2xl border border-[#A85C32]" />
            <span className="font-extrabold text-xl tracking-tight">TarasAI</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#why-now" className="hover:text-[#A85C32]">Why now</a>
            <a href="#services" className="hover:text-[#A85C32]">What we do</a>
            <a href="#sectors" className="hover:text-[#A85C32]">Sectors</a>
            <a href="#case" className="hover:text-[#A85C32]">Use cases</a>
            <a href="https://calendar.app.google/9Lg9BzZy97jv3poHA" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-2xl bg-[#A85C32] text-white px-4 py-2">
              Book strategy call
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-serif font-extrabold leading-tight tracking-tight">
            Operationalise AI across your business — <span className="text-[#A85C32]">catch the efficiency wave</span> and unlock new capabilities.
          </h1>
          <p className="mt-4 text-lg text-slate-700 max-w-xl">
            It can feel overwhelming to know where to start or where to invest. <strong>TarasAI</strong> turns AI into practical outcomes:
            faster ops, lower costs, and new growth. We find the low-hanging fruit in your workflows and scale from there.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="https://calendar.app.google/9Lg9BzZy97jv3poHA" target="_blank" rel="noopener noreferrer" className="rounded-2xl bg-[#A85C32] hover:bg-[#8F4E2B] text-white px-5 py-3">
              Book a (free) strategy call
            </a>
            <a href="#services" className="rounded-2xl border border-[#A85C32] text-[#A85C32] hover:bg-[#A85C32]/10 px-5 py-3">
              See how we help
            </a>
          </div>
          <div className="mt-6 grid grid-cols-3 max-w-md gap-3 text-center">
            {[
              { kpi: "30–60%", label: "faster cycle times" },
              { kpi: "15–35%", label: "ops cost reduction" },
              { kpi: "24/7", label: "AI co-workers" },
            ].map(x => (
              <div key={x.label} className="rounded-2xl border bg-white p-4 shadow-sm">
                <div className="text-2xl font-extrabold">{x.kpi}</div>
                <div className="text-slate-600 text-sm">{x.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Proof card stack */}
        <div className="relative">
          <div className="rounded-3xl p-6 bg-white border shadow-sm grid gap-4">
            <div className="rounded-2xl border p-5">
              <div className="text-sm text-slate-500">Before</div>
              <div className="mt-1 text-slate-800 text-sm">
                Manual data capture, backlogs, 3–5 days turnaround on quotes/reports.
              </div>
            </div>
            <div className="rounded-2xl border p-5">
              <div className="text-sm text-slate-500">After (TarasAI)</div>
              <div className="mt-1 text-slate-800 text-sm">
                AI assistants draft 80–90% of quotes/reports; humans review. Hours → minutes. Happier teams. More closed deals.
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 text-center text-xs">
              {[
                { label: "Quote SLA", value: "−70%" },
                { label: "Error rates", value: "−40%" },
                { label: "Agent capacity", value: "+2×" },
              ].map(x => (
                <div key={x.label} className="rounded-xl border p-3">
                  <div className="font-semibold">{x.value}</div>
                  <div className="text-slate-600">{x.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* WHY NOW */}
      <section id="why-now" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-3xl font-serif font-bold tracking-tight">Why now — and why SA companies can’t wait</h2>
        <p className="mt-3 text-slate-700 max-w-3xl">
          The AI curve is compounding. Early movers are locking in cost advantages, faster decision-making, and new product experiences.
          In South Africa, that gap will widen quickly—creating <strong>winners</strong> who scale and <strong>laggards</strong> who get squeezed.
          TarasAI helps you move with confidence, focusing on quick payback and POPIA-mindful design.
        </p>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {[
            { title: "Practical, not hype", desc: "We prioritise use cases with visible ROI in weeks, not years." },
            { title: "Start small, scale fast", desc: "Pilot a low-risk slice of a process, prove value, then expand." },
            { title: "POPIA-mindful", desc: "Data minimisation, opt-in analytics, private model options where needed." },
          ].map(c => (
            <div key={c.title} className="rounded-2xl border bg-white p-5 shadow-sm">
              <div className="font-semibold">{c.title}</div>
              <div className="text-slate-600 text-sm mt-1">{c.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT WE DO */}
      <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-3xl font-serif font-bold tracking-tight">What TarasAI does</h2>
        <div className="mt-6 grid lg:grid-cols-3 gap-6">
          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <h3 className="font-semibold text-lg">AI Opportunity Audit</h3>
            <p className="text-slate-600 text-sm mt-1">We map your workflows and data, then surface 5–10 “low-hanging-fruit” use cases with ROI, timeline, and risk.</p>
          </div>
          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <h3 className="font-semibold text-lg">Pilot & Prove</h3>
            <p className="text-slate-600 text-sm mt-1">We implement a small, safe slice (2–4 weeks) to prove value—no heavy IT lift or risky spend.</p>
          </div>
          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <h3 className="font-semibold text-lg">Scale & Upskill</h3>
            <p className="text-slate-600 text-sm mt-1">We productionise what works, train your people, and set up governance so you can keep compounding ROI.</p>
          </div>
        </div>
      </section>

      {/* SECTORS & USE CASES */}
      <section id="sectors" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-3xl font-serif font-bold tracking-tight">Who we help (and how)</h2>
        <p className="mt-3 text-slate-700 max-w-3xl">
          Every sector is being reshaped by AI. The companies that win will blend human expertise with AI copilots and automation. Here’s where our clients start:
        </p>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SECTORS.map(s => (
            <div key={s.name} className="rounded-2xl border bg-white p-5 shadow-sm">
              <div className="font-semibold">{s.name}</div>
              <div className="text-slate-600 text-sm mt-1">{s.pain}</div>
              <ul className="mt-3 text-sm list-disc list-inside space-y-1">
                {s.wins.map(w => <li key={w}>{w}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* “Winners vs Losers” PANEL */}
      <section id="case" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="rounded-3xl border bg-white p-6 shadow-sm grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-2xl font-serif font-bold tracking-tight">Winners vs. losers in the AI revolution</h3>
            <ul className="mt-3 text-slate-700 space-y-2 text-sm">
              <li><strong>Winners:</strong> automate the grunt work, redeploy people to higher-value tasks, and launch AI-enhanced services before competitors.</li>
              <li><strong>Losers:</strong> wait for “perfect,” overspend on platforms without use cases, and bleed customers to faster, smarter rivals.</li>
            </ul>
          </div>
          <div>
            <div className="rounded-2xl border p-5">
              <div className="font-semibold">Example: Quote-to-Cash (B2B services)</div>
              <ol className="mt-2 text-slate-700 list-decimal list-inside text-sm space-y-1">
                <li>Lead qualification handled by an AI agent (web/WhatsApp).</li>
                <li>Proposal/quote drafted automatically from your templates & CRM.</li>
                <li>Manager reviews & approves; e-sign & invoice trigger automatically.</li>
              </ol>
              <div className="mt-3 text-sm text-slate-600">Result: cycle time ↓ 70%, win rate ↑, happier customers.</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="rounded-3xl border p-8 bg-[rgba(168,92,50,0.06)]">
          <h3 className="text-2xl font-serif font-bold tracking-tight">Start with a low-risk pilot. Prove value in 2–4 weeks.</h3>
          <p className="mt-2 text-slate-700 max-w-2xl">
            We’ll identify the fastest ROI opportunities, implement a focused pilot, and set your roadmap. POPIA-mindful by design.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href="https://calendar.app.google/9Lg9BzZy97jv3poHA" target="_blank" rel="noopener noreferrer" className="rounded-2xl bg-[#A85C32] hover:bg-[#8F4E2B] text-white px-5 py-3">
              Book a strategy call
            </a>
            <a href="mailto:lucien@devio.co.za" className="rounded-2xl border border-[#A85C32] text-[#A85C32] hover:bg-[#A85C32]/10 px-5 py-3">
              Email us your goals
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t bg-white/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-600">
          <div>© {new Date().getFullYear()} TarasAI. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#A85C32]">Privacy</a>
            <a href="#" className="hover:text-[#A85C32]">Terms</a>
            <a href="#" className="hover:text-[#A85C32]">Security (POPIA)</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
