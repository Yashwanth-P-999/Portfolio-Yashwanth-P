import React from 'react';
import { certifications } from '../../data/portfolio';
import { Award, ExternalLink, ShieldCheck } from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-20 sm:py-28 bg-white relative border-b border-[#E8E8EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-[#E8E8EC]">
          <div>
            <div className="flex items-center gap-2 mb-2 text-xs font-mono uppercase tracking-widest text-black font-semibold">
              <span>06</span>
              <span className="text-zinc-300">/</span>
              <span>Accreditations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-black tracking-tight">
              Certifications &amp; Credentials
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#585860] max-w-md font-sans">
            Verified proof of technical competence in full-stack engineering and algorithmic problem solving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="group p-6 sm:p-8 rounded-xs bg-[#F9F9FB] border border-[#E8E8EC] hover:border-black transition-all duration-200 text-left flex flex-col justify-between shadow-2xs hover:shadow-sm"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-[#E8E8EC]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-2xs bg-black text-white flex items-center justify-center">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-black font-bold">
                        {cert.issuer}
                      </span>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono text-black bg-[#D4FF00] px-2 py-0.5 rounded-2xs font-bold border border-black/20">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Verified</span>
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-5 text-lg sm:text-xl font-display font-bold text-black tracking-tight">
                  {cert.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-xs sm:text-sm text-[#585860] leading-relaxed font-sans">
                  {cert.description}
                </p>
              </div>

              {/* Action area */}
              <div className="mt-6 pt-4 border-t border-[#E8E8EC] flex items-center justify-between">
                <span className="text-[11px] font-mono text-zinc-500 font-medium">
                  Authority: {cert.issuer}
                </span>

                {cert.credentialUrl ? (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-black hover:underline"
                  >
                    <span>View Certificate</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="text-[11px] font-mono text-zinc-500 font-medium">
                    Certified Program
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
