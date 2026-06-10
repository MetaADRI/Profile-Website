import { useState } from 'react';
import { Award, CheckCircle, Shield, Cpu, ExternalLink, Download, X } from 'lucide-react';
import { certificationsConfig, personalDocsConfig } from '../config';
import LiquidGlassButton from '../components/LiquidGlassButton';

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<typeof certificationsConfig[0] | null>(null);

  return (
    <section id="certifications" style={{ padding: '120px 5vw', background: '#0a0a0a' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        <div style={{ marginBottom: 60 }}>
          <span style={{ 
            fontFamily: "'Inter', sans-serif", 
            fontSize: 12, 
            fontWeight: 300, 
            letterSpacing: '3px', 
            textTransform: 'uppercase', 
            color: '#dadada', 
            opacity: 0.5 
          }}>
            Credentials
          </span>
          <h2 style={{ 
            fontFamily: "'EB Garamond', serif", 
            fontSize: 'clamp(32px, 4vw, 56px)', 
            color: '#ffffff', 
            marginTop: 16,
            fontWeight: 400 
          }}>
            Certifications & CV
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {certificationsConfig.map((cert) => (
            <div 
              key={cert.title}
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.05)',
                padding: '40px',
                borderRadius: '4px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s ease',
              }}
              className="group hover:border-white/20"
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 }}>
                  <div style={{ background: 'rgba(200, 170, 130, 0.1)', padding: 12, borderRadius: 4 }}>
                    {cert.title.includes('Cybersecurity') ? <Shield className="w-6 h-6 text-[#c8aa82]" /> : <Cpu className="w-6 h-6 text-[#c8aa82]" />}
                  </div>
                  <span style={{ fontFamily: "'GeistMono', monospace", fontSize: 12, color: '#ffffff', opacity: 0.4 }}>{cert.date}</span>
                </div>
                <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: 24, fontWeight: 500, color: '#ffffff', marginBottom: 16 }}>{cert.title}</h3>
                <p style={{ color: '#dadada', opacity: 0.6, lineHeight: 1.6, marginBottom: 24, fontSize: 15, fontWeight: 200 }}>{cert.description}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 32 }}>
                  {cert.skills.slice(0, 4).map(skill => (
                    <span key={skill} style={{ fontSize: 11, background: 'rgba(255,255,255,0.05)', color: '#ffffff', padding: '4px 10px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.1)' }}>{skill}</span>
                  ))}
                  {cert.skills.length > 4 && <span style={{ fontSize: 11, color: '#ffffff', opacity: 0.4 }}>+{cert.skills.length - 4} more</span>}
                </div>
              </div>
              <button 
                onClick={() => setSelectedCert(cert)}
                style={{ 
                  background: 'transparent', 
                  border: '1px solid rgba(255,255,255,0.2)', 
                  color: '#ffffff', 
                  padding: '12px 24px', 
                  fontSize: 14, 
                  cursor: 'pointer',
                  fontFamily: "'Inter', sans-serif",
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  width: 'fit-content',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'white'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; }}
              >
                View Certificate Details <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 80, display: 'flex', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center', maxWidth: 600 }}>
            <h3 style={{ color: '#ffffff', fontSize: 24, marginBottom: 16, fontFamily: "'EB Garamond', serif" }}>Professional Curriculum Vitae</h3>
            <p style={{ color: '#dadada', opacity: 0.6, marginBottom: 32, fontSize: 15, fontWeight: 200 }}>Detailed overview of my professional experience, education, and technical stack.</p>
            <LiquidGlassButton 
              onClick={() => {
                const link = document.createElement('a');
                link.href = personalDocsConfig.cvPath;
                link.download = 'Bwalya-Adrian-Mange-CV.pdf';
                link.click();
              }}
            >
              Download My CV <Download className="w-4 h-4 ml-2 inline-block" />
            </LiquidGlassButton>
          </div>
        </div>
      </div>

      {/* Detail Overlay */}
      {selectedCert && (
        <div 
          style={{ 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            zIndex: 100, 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            padding: '20px'
          }}
        >
          <div 
            onClick={() => setSelectedCert(null)}
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.9)', backdropFilter: 'blur(10px)' }}
          />
          <div 
            style={{ 
              position: 'relative', 
              zIndex: 101, 
              width: '100%', 
              maxWidth: 800, 
              maxHeight: '90vh', 
              background: '#0f0f0f', 
              border: '1px solid rgba(255,255,255,0.1)', 
              borderRadius: '8px', 
              padding: '40px',
              overflowY: 'auto'
            }}
          >
            <button 
              onClick={() => setSelectedCert(null)}
              style={{ position: 'absolute', top: 20, right: 20, background: 'transparent', border: 'none', color: '#ffffff', cursor: 'pointer', opacity: 0.5 }}
            >
              <X className="w-6 h-6" />
            </button>

            <div style={{ marginBottom: 40 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
                <Award className="w-8 h-8 text-[#c8aa82]" />
                <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: 28, fontWeight: 400, color: '#ffffff', margin: 0 }}>{selectedCert.title}</h3>
              </div>
              <p style={{ fontFamily: "'GeistMono', monospace", fontSize: 14, color: '#c8aa82' }}>Issued by {selectedCert.issuer} • {selectedCert.date}</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }} className="flex flex-col md:grid">
              <div>
                <h4 style={{ color: '#ffffff', fontSize: 14, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 20, opacity: 0.6 }}>What I Learned</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {selectedCert.modules.map(module => (
                    <div key={module} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                      <CheckCircle className="w-4 h-4 text-[#c8aa82] mt-1 shrink-0" />
                      <span style={{ color: '#dadada', fontSize: 14, fontWeight: 200 }}>{module}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 style={{ color: '#ffffff', fontSize: 14, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 20, opacity: 0.6 }}>Core Competencies</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                  {selectedCert.skills.map(skill => (
                    <span key={skill} style={{ border: '1px solid rgba(255,255,255,0.1)', color: '#dadada', padding: '6px 14px', fontSize: 13, borderRadius: 4, background: 'rgba(255,255,255,0.02)' }}>{skill}</span>
                  ))}
                </div>
                <div style={{ marginTop: 40, padding: 24, background: 'rgba(200, 170, 130, 0.05)', border: '1px solid rgba(200, 170, 130, 0.1)', borderRadius: 4 }}>
                  <p style={{ color: '#c8aa82', fontSize: 12, margin: 0, fontStyle: 'italic' }}>
                    * To protect document integrity, certificates are displayed as verified credentials. Full documentation is available upon request for verified employers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
