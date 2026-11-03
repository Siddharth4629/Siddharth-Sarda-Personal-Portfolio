import React from 'react';
import {
  Clock,
  CheckCircle2,
  Users,
  Sparkles,
  WifiOff,
  Radio,
  Layers,
  ArrowRight,
  TrendingUp,
  Cpu,
  Database,
  ShieldCheck,
  TableProperties,
  Compass,
} from 'lucide-react';

export default function ProjectMockupVisual({ projectId }) {
  if (projectId === 'skipline') {
    return (
      <div className="w-full h-48 sm:h-52 bg-gradient-to-br from-[#121216] to-[#0A0A0D] p-4 flex flex-col justify-between border-b border-[#27272A] relative overflow-hidden font-sans select-none">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-bl-full pointer-events-none" />

        {/* Top Header */}
        <div className="flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] font-mono text-cyan-400">
              Live Queue Tracking • Ably WebSockets
            </span>
          </div>
          <span className="text-[10px] font-mono text-[#A1A1AA] bg-[#18181B] px-2 py-0.5 rounded border border-[#27272A]">
            Clerk Auth • ImageKit CDN
          </span>
        </div>

        {/* Middle Digital Token Card */}
        <div className="z-10 bg-[#18181B]/90 border border-cyan-500/30 rounded-xl p-3 shadow-lg flex items-center justify-between">
          <div>
            <div className="text-[10px] text-[#A1A1AA] uppercase tracking-wider font-mono">
              Digital Token
            </div>
            <div className="text-2xl font-mono font-bold text-[#F4F4F5] flex items-center gap-2">
              <span>#PU-108</span>
              <span className="text-[11px] font-sans font-normal text-cyan-300 bg-cyan-500/20 px-2 py-0.5 rounded-full">
                Real-time
              </span>
            </div>
          </div>

          <div className="text-right">
            <div className="text-[10px] text-[#A1A1AA] flex items-center justify-end gap-1 font-mono">
              <Clock size={11} className="text-cyan-400" />
              <span>Est. Wait</span>
            </div>
            <div className="text-base font-mono font-semibold text-cyan-400">
              ~4 mins
            </div>
          </div>
        </div>

        {/* Bottom stats */}
        <div className="grid grid-cols-3 gap-2 z-10 text-[10px] font-mono text-[#A1A1AA] pt-1 border-t border-[#27272A]/60">
          <div>Stack: <span className="text-[#F4F4F5]">React + Express</span></div>
          <div className="text-center">ORM: <span className="text-purple-300">Prisma</span></div>
          <div className="text-right">DB: <span className="text-emerald-400">Neon PostgreSQL</span></div>
        </div>
      </div>
    );
  }

  if (projectId === 'getcareerpilot') {
    return (
      <div className="w-full h-48 sm:h-52 bg-gradient-to-br from-[#120F1C] to-[#0A0912] p-4 flex flex-col justify-between border-b border-[#27272A] relative overflow-hidden font-sans select-none">
        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-bl-full pointer-events-none" />

        <div className="flex items-center justify-between z-10">
          <div className="text-[11px] font-mono text-purple-300 flex items-center gap-1.5">
            <Sparkles size={13} className="text-purple-400" />
            <span>Google Gemini 2.5 Flash • 12 Industry Sectors</span>
          </div>
          <span className="text-[10px] font-mono text-purple-400 bg-purple-950/60 border border-purple-800/40 px-2 py-0.5 rounded">
            RIASEC Assessment
          </span>
        </div>

        {/* Career Discovery & Roadmap Card */}
        <div className="z-10 bg-[#18181B] border border-[#27272A] rounded-xl p-3 space-y-2">
          <div className="flex justify-between items-center text-xs">
            <span className="text-[#A1A1AA] flex items-center gap-1.5">
              <Compass size={13} className="text-cyan-400" />
              <span>Aptitude Assessment & Skill-Gap</span>
            </span>
            <span className="font-mono font-bold text-cyan-400">Structured JSON</span>
          </div>
          <div className="w-full bg-[#09090B] rounded-full h-2 overflow-hidden border border-[#27272A]">
            <div className="bg-gradient-to-r from-purple-500 via-cyan-400 to-emerald-400 h-full rounded-full" style={{ width: '94%' }} />
          </div>
          <div className="flex justify-between text-[10px] font-mono text-[#A1A1AA] pt-0.5">
            <span>Stream & College Discovery</span>
            <span className="text-purple-300">AI Mock Interview Feedback</span>
          </div>
        </div>

        <div className="flex items-center justify-between z-10 text-[10px] font-mono text-[#A1A1AA] pt-1 border-t border-[#27272A]/60">
          <span>Node/Express AI Gateway</span>
          <span className="text-cyan-400">Supabase Sync + LocalStorage</span>
        </div>
      </div>
    );
  }

  if (projectId === 'student-management') {
    return (
      <div className="w-full h-48 sm:h-52 bg-gradient-to-br from-[#0F1612] to-[#0A0F0D] p-4 flex flex-col justify-between border-b border-[#27272A] relative overflow-hidden font-sans select-none">
        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-bl-full pointer-events-none" />

        <div className="flex items-center justify-between z-10">
          <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
            <Database size={13} />
            <span>Academic CRUD Database System</span>
          </div>
          <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-800/30 px-2 py-0.5 rounded">
            Role-Based Access Control
          </span>
        </div>

        {/* Database records preview */}
        <div className="bg-[#18181B] border border-[#27272A] rounded-xl p-3 z-10 space-y-2">
          <div className="flex justify-between items-center text-xs">
            <span className="font-mono text-[#F4F4F5] flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-emerald-400" />
              <span>Optimized SQL Queries (3NF)</span>
            </span>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">
              ACID Compliant
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-[10px] font-mono text-[#A1A1AA] bg-[#09090B] p-2 rounded border border-[#27272A]">
            <div>Admin: <span className="text-emerald-300">Full</span></div>
            <div>Faculty: <span className="text-cyan-300">Grades</span></div>
            <div>Student: <span className="text-purple-300">Read-only</span></div>
          </div>
        </div>

        <div className="flex items-center justify-between z-10 text-[10px] font-mono text-[#A1A1AA] pt-1 border-t border-[#27272A]/60">
          <span>MySQL / Relational</span>
          <span className="text-emerald-400">Indexed Query Plans</span>
        </div>
      </div>
    );
  }

  if (projectId === 'collabmind') {
    return (
      <div className="w-full h-48 sm:h-52 bg-gradient-to-br from-[#0F141C] to-[#0A0D12] p-4 flex flex-col justify-between border-b border-[#27272A] relative overflow-hidden font-sans select-none">
        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-bl-full pointer-events-none" />

        <div className="flex items-center justify-between z-10">
          <div className="flex items-center gap-1.5 bg-cyan-950/60 border border-cyan-800/40 text-cyan-300 text-[10px] font-mono px-2 py-0.5 rounded-full">
            <Sparkles size={10} />
            <span>Google Gemini AI Engine</span>
          </div>
          <div className="flex items-center gap-1 text-[10px] font-mono text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-ping" />
            <span>Socket.IO Active</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 z-10">
          <div className="bg-[#18181B] border border-[#27272A] rounded-lg p-2.5 space-y-1">
            <div className="text-[9px] font-mono text-purple-400 uppercase">AI Task Breakdown</div>
            <div className="text-xs font-semibold text-[#F4F4F5] truncate">
              Design DB Sharding Strategy
            </div>
            <div className="flex items-center gap-1 text-[9px] text-[#A1A1AA]">
              <Users size={10} />
              <span>Assigned: Siddharth</span>
            </div>
          </div>

          <div className="bg-[#18181B] border border-cyan-500/30 rounded-lg p-2.5 space-y-1 bg-cyan-950/10">
            <div className="text-[9px] font-mono text-cyan-400 uppercase">Sprint Retrospective</div>
            <div className="text-xs font-semibold text-[#F4F4F5] truncate">
              Velocity: +24% vs Target
            </div>
            <div className="text-[9px] text-emerald-400 font-mono">
              AI Summary Ready
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between z-10 text-[10px] font-mono text-[#A1A1AA] pt-1 border-t border-[#27272A]/60">
          <span>React 18 + Vite</span>
          <span>MongoDB + JWT</span>
        </div>
      </div>
    );
  }

  // GramShiksha AI
  return (
    <div className="w-full h-48 sm:h-52 bg-gradient-to-br from-[#0F1813] to-[#080E0A] p-4 flex flex-col justify-between border-b border-[#27272A] relative overflow-hidden font-sans select-none">
      <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-bl-full pointer-events-none" />

      <div className="flex items-center justify-between z-10">
        <div className="flex items-center gap-1.5 bg-emerald-950/60 border border-emerald-800/40 text-emerald-300 text-[10px] font-mono px-2 py-0.5 rounded-full">
          <WifiOff size={10} />
          <span>Offline First PWA</span>
        </div>
        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/30">
          Rural Education Impact
        </span>
      </div>

      <div className="bg-[#18181B] border border-[#27272A] rounded-xl p-3 z-10 space-y-1.5">
        <div className="flex justify-between items-center text-xs">
          <span className="font-semibold text-[#F4F4F5] flex items-center gap-1.5">
            <Cpu size={12} className="text-emerald-400" />
            <span>Local STEM Curriculum</span>
          </span>
          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">
            Cached 100%
          </span>
        </div>
        <p className="text-[11px] text-[#A1A1AA]">
          Interactive science exercises stored in IndexedDB for zero-latency execution without internet.
        </p>
      </div>

      <div className="flex items-center justify-between z-10 text-[10px] font-mono text-[#A1A1AA] pt-1 border-t border-[#27272A]/60">
        <span>Low-Bandwidth UI</span>
        <span className="text-emerald-400">Multi-lingual Prompt Engine</span>
      </div>
    </div>
  );
}
