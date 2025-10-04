import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.8, ease: "easeOut" },
  }),
};

const Portfolio: React.FC = () => {
  return (
    <motion.main
      className="relative min-h-[100svh] overflow-hidden bg-black text-white"
      initial={{ opacity: 0, filter: "blur(8px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -80 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    >
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.08),_transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,_rgba(20,20,20,0.9),_rgba(0,0,0,0.6))]" />
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-px bg-gradient-to-b from-transparent via-white/40 to-transparent animate-pulse-bright" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 sm:py-20 flex flex-col gap-16">
        <motion.header
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          custom={0.2}
        >
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">[ new destination ]</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light leading-tight">
              FASTAPI BACKEND<br className="hidden sm:block" />
              BLUEPRINT
            </h1>
          </div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 border border-white/40 rounded-full text-sm uppercase tracking-[0.3em] hover:border-white hover:bg-white hover:text-black transition"
          >
            ← back to checkpoint
          </Link>
        </motion.header>

        <motion.section
          className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          custom={0.4}
        >
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 sm:p-10 flex flex-col gap-6">
            <span className="text-xs uppercase tracking-[0.3em] text-white/50">mission brief</span>
            <h2 className="text-2xl sm:text-3xl font-light leading-snug">
              Translate complex domain logic into resilient FastAPI services that feel instantaneous.
            </h2>
            <p className="text-sm sm:text-base text-white/70 leading-relaxed">
              A portfolio shell for a backend engineer focused on performance, observability, and developer experience. Swap content blocks with real projects, metrics, and code stories to ship your narrative.
            </p>
            <div className="grid gap-4 sm:grid-cols-3 text-sm">
              <div className="rounded-xl border border-white/10 bg-black/60 p-4">
                <p className="text-white/50 uppercase tracking-[0.2em] text-[11px] mb-1">core stack</p>
                <p>FastAPI · PostgreSQL · Redis · Celery</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/60 p-4">
                <p className="text-white/50 uppercase tracking-[0.2em] text-[11px] mb-1">focus</p>
                <p>Async APIs, Observability, CI/CD</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/60 p-4">
                <p className="text-white/50 uppercase tracking-[0.2em] text-[11px] mb-1">availability</p>
                <p>Remote · UTC+3 · Open to consulting</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-transparent backdrop-blur-lg p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-white/50">signal map</span>
              <p className="mt-4 text-sm text-white/70 leading-relaxed">
                Plug in highlights for the systems you’ve stabilized: throughput gains, latency wins, migration stories. Frame them as quick signals that tease deeper case studies.
              </p>
            </div>
            <div className="mt-8 grid gap-3 text-xs uppercase tracking-[0.4em] text-white/60">
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <span>uptime</span>
                <span className="text-white">99.98%</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <span>p95 latency</span>
                <span className="text-white">-37%</span>
              </div>
              <div className="flex items-center justify-between">
                <span>deploy cadence</span>
                <span className="text-white">daily</span>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="grid gap-8 md:grid-cols-2"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          custom={0.6}
        >
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 flex flex-col gap-4">
            <span className="text-xs uppercase tracking-[0.3em] text-white/50">api showcase slots</span>
            <p className="text-sm text-white/70 leading-relaxed">
              Feature three flagship services. Pair each with architecture notes, tech, and a link to your repo or demo.
            </p>
            <ul className="mt-2 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                <div>
                  <p className="uppercase tracking-[0.2em] text-white/60 text-xs">alerts gateway</p>
                  <p>Event-driven router stitching WebSockets, Kafka, and Push services.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-sky-400" />
                <div>
                  <p className="uppercase tracking-[0.2em] text-white/60 text-xs">ledger api</p>
                  <p>Idempotent transaction writer with audit trails &amp; Grafana dashboards.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-fuchsia-400" />
                <div>
                  <p className="uppercase tracking-[0.2em] text-white/60 text-xs">ml delivery</p>
                  <p>Batch + realtime inference orchestrated through Celery and Redis streams.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-black/70 p-8 flex flex-col gap-6">
            <span className="text-xs uppercase tracking-[0.3em] text-white/50">workflow timeline</span>
            <div className="space-y-5 text-sm text-white/70">
              <div className="border-l border-white/20 pl-4">
                <p className="uppercase tracking-[0.2em] text-xs text-white/50">01 · discovery</p>
                <p>Assess requirements, sketch async flows, define SLAs.</p>
              </div>
              <div className="border-l border-white/20 pl-4">
                <p className="uppercase tracking-[0.2em] text-xs text-white/50">02 · build</p>
                <p>Implement FastAPI routers, integrate auth, wire persistence.</p>
              </div>
              <div className="border-l border-white/20 pl-4">
                <p className="uppercase tracking-[0.2em] text-xs text-white/50">03 · observe</p>
                <p>Instrument tracing, metrics, SLO dashboards, and auto-scaling.</p>
              </div>
              <div className="border-l border-white/20 pl-4">
                <p className="uppercase tracking-[0.2em] text-xs text-white/50">04 · iterate</p>
                <p>Measure, refactor, document, and share learnings.</p>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          custom={0.8}
        >
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">contact channel</p>
            <h3 className="mt-2 text-2xl font-light">Ready to wire your platform?</h3>
            <p className="mt-2 text-sm text-white/70 leading-relaxed">
              Drop in your actual email, Calendly, or chat handle. Encourage quick syncs to review architecture or plan migrations.
            </p>
          </div>
          <button className="px-6 py-3 rounded-full border border-white/40 text-sm uppercase tracking-[0.3em] hover:border-white hover:bg-white hover:text-black transition">
            initiate handshake
          </button>
        </motion.section>
      </div>
    </motion.main>
  );
};

export default Portfolio;
