import React, { useState } from 'react';
import { creativeDisciplines } from '../../data/portfolio';
import { SectionHeader } from '../common/SectionHeader';
import { Palette, Compass, Layers, Sparkles, Layout, Info } from 'lucide-react';

export const CreativeWorkSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('poster-design');

  const activeData =
    creativeDisciplines.find((item) => item.id === activeTab) || creativeDisciplines[0];

  return (
    <section id="creative" className="py-20 sm:py-28 bg-[#0D0D0D] relative border-t border-[#181818]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="08"
          category="Visual Discipline"
          title="Creative Direction, Brand Identity & Poster Systems"
          subtitle="Leveraging Swiss typographic hierarchy, geometric rigor, and minimalism to design event branding, departmental posters, and marketing assets."
        />

        {/* Clear disclaimer note as requested in prompt */}
        <div className="flex items-start gap-3 p-4 rounded-xl bg-[#141414] border border-[#222222] mb-10 max-w-3xl text-left">
          <Info className="w-4 h-4 text-[#EADCB0] shrink-0 mt-0.5" />
          <p className="text-xs text-zinc-400 leading-relaxed">
            <strong className="text-zinc-200">Creative Representation Note:</strong> The cards below illustrate the visual paradigms, layout principles, and graphic systems applied across college symposiums, hackathons, and departmental branding initiatives.
          </p>
        </div>

        {/* Discipline Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {creativeDisciplines.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-lg transition-all border ${
                  isActive
                    ? 'bg-[#EADCB0] text-black font-semibold border-[#EADCB0]'
                    : 'bg-[#141414] text-zinc-400 hover:text-white border-[#222222] hover:bg-[#1a1a1a]'
                }`}
              >
                {item.title}
              </button>
            );
          })}
        </div>

        {/* Interactive Discipline Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Visual Composition Canvas */}
          <div className="lg:col-span-7 rounded-2xl bg-[#121212] border border-[#262626] p-6 sm:p-8 flex flex-col justify-between overflow-hidden relative min-h-[340px]">
            {/* Background geometric accents */}
            <div className="absolute inset-0 bg-grid-subtle opacity-20 pointer-events-none" />

            {/* Dynamic visual representation based on selected tab */}
            {activeTab === 'poster-design' && (
              <div className="relative z-10 w-full h-full flex flex-col justify-between space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#DC5C3F] block">
                      Symposium Poster System
                    </span>
                    <h4 className="text-2xl sm:text-3xl font-display font-black text-white tracking-tighter mt-1">
                      AXIOM / 2026
                    </h4>
                  </div>
                  <div className="text-right font-mono text-[10px] text-zinc-500">
                    <div>GRID: 12-COL</div>
                    <div>SCALE: 1.618</div>
                  </div>
                </div>

                {/* Algorithmic graphic lines */}
                <div className="my-6 p-4 rounded-lg bg-[#0A0A0A] border border-zinc-800 space-y-2">
                  <div className="h-0.5 bg-[#EADCB0] w-3/4" />
                  <div className="h-0.5 bg-zinc-700 w-1/2" />
                  <div className="h-0.5 bg-[#DC5C3F] w-5/6" />
                  <div className="flex justify-between text-[10px] font-mono text-zinc-400 pt-2">
                    <span>DEPARTMENT OF COMPUTER SCIENCE</span>
                    <span>TECH SYMPOSIUM</span>
                  </div>
                </div>

                <div className="flex justify-between items-end text-[11px] font-mono text-zinc-500">
                  <span>SWISS TYPOGRAPHIC LAYOUT</span>
                  <span className="text-[#EADCB0]">VTU TECHNICAL EVENT</span>
                </div>
              </div>
            )}

            {activeTab === 'logo-design' && (
              <div className="relative z-10 w-full h-full flex flex-col justify-between space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#DC5C3F] block">
                      Identity System
                    </span>
                    <h4 className="text-xl sm:text-2xl font-display font-bold text-white mt-1">
                      Geometric Monogram & Emblems
                    </h4>
                  </div>
                  <span className="text-[10px] font-mono text-[#EADCB0]">VECTOR GEOMETRY</span>
                </div>

                {/* Central Monogram Graphic */}
                <div className="py-6 flex items-center justify-center">
                  <div className="relative w-28 h-28 border border-[#EADCB0]/40 rounded-xl rotate-45 flex items-center justify-center bg-[#181818]/60 shadow-2xl">
                    <div className="w-16 h-16 border border-[#DC5C3F]/60 rounded-lg -rotate-45 flex items-center justify-center">
                      <span className="font-display font-black text-2xl text-[#EADCB0] rotate-0">
                        Y
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between text-[11px] font-mono text-zinc-500">
                  <span>SCALE INDEPENDENCE</span>
                  <span>CLEAN EMBEDDING</span>
                </div>
              </div>
            )}

            {activeTab === 'creative-direction' && (
              <div className="relative z-10 w-full h-full flex flex-col justify-between space-y-6">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#DC5C3F] block">
                    Design Tokens
                  </span>
                  <h4 className="text-xl sm:text-2xl font-display font-bold text-white mt-1">
                    Unified Color & Typography Scale
                  </h4>
                </div>

                {/* Palette and typography sample */}
                <div className="grid grid-cols-4 gap-2 py-4">
                  <div className="p-3 rounded bg-[#0A0A0A] border border-zinc-800 text-[10px] font-mono">
                    <div className="w-full h-6 rounded bg-[#0A0A0A] border border-zinc-700 mb-1" />
                    <span>#0A0A0A</span>
                  </div>
                  <div className="p-3 rounded bg-[#0A0A0A] border border-zinc-800 text-[10px] font-mono">
                    <div className="w-full h-6 rounded bg-[#151515] border border-zinc-700 mb-1" />
                    <span>#151515</span>
                  </div>
                  <div className="p-3 rounded bg-[#0A0A0A] border border-zinc-800 text-[10px] font-mono">
                    <div className="w-full h-6 rounded bg-[#EADCB0] mb-1" />
                    <span className="text-[#EADCB0]">#EADCB0</span>
                  </div>
                  <div className="p-3 rounded bg-[#0A0A0A] border border-zinc-800 text-[10px] font-mono">
                    <div className="w-full h-6 rounded bg-[#DC5C3F] mb-1" />
                    <span className="text-[#DC5C3F]">#DC5C3F</span>
                  </div>
                </div>

                <div className="flex justify-between text-[11px] font-mono text-zinc-500">
                  <span>HIGH CONTRAST RATIO</span>
                  <span>PRECISE TOKENS</span>
                </div>
              </div>
            )}

            {activeTab === 'content-creation' && (
              <div className="relative z-10 w-full h-full flex flex-col justify-between space-y-6">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#DC5C3F] block">
                    Promotional Media
                  </span>
                  <h4 className="text-xl sm:text-2xl font-display font-bold text-white mt-1">
                    Campaign Marketing & Narrative
                  </h4>
                </div>

                <div className="p-4 rounded-xl bg-[#0A0A0A] border border-zinc-800 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#EADCB0]">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>High-Retention Event Campaign</span>
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    "Bridging collegiate engineering talent with hands-on computational problem solving."
                  </p>
                  <div className="flex items-center gap-4 text-[10px] font-mono text-zinc-500 pt-1">
                    <span>DIGITAL OUTREACH</span>
                    <span>ENGAGEMENT STRATEGY</span>
                  </div>
                </div>

                <div className="flex justify-between text-[11px] font-mono text-zinc-500">
                  <span>ACADEMIC AUDIENCE</span>
                  <span className="text-[#DC5C3F]">HIGH CONVERSION</span>
                </div>
              </div>
            )}
          </div>

          {/* Right: Technical Explanation */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-[#121212] border border-[#262626] text-left flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#202020]">
                <span className="text-xs font-mono uppercase tracking-wider text-[#DC5C3F]">
                  Discipline Blueprint
                </span>
                <span className="text-xs font-mono text-zinc-500">{activeData.role}</span>
              </div>

              <h3 className="text-xl font-display font-bold text-white">
                {activeData.title}
              </h3>

              <p className="text-sm text-zinc-300 leading-relaxed">
                {activeData.description}
              </p>

              <div className="p-3.5 rounded-lg bg-[#181818] border border-zinc-800">
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 block mb-1">
                  Design Concept
                </span>
                <p className="text-xs text-zinc-300">{activeData.concept}</p>
              </div>

              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-2">
                  Key Deliverables
                </span>
                <ul className="space-y-1.5 text-xs text-zinc-300 font-mono">
                  {activeData.deliverables.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#EADCB0]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#1E1E1E] text-xs font-mono text-zinc-500">
              Style: {activeData.visualTheme}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
