import BaseDetailPage from './BaseDetailPage';
import { footerConfig } from '../config';
import { Github, Linkedin, Mail } from 'lucide-react';

const IconMap: Record<string, any> = {
  LinkedIn: Linkedin,
  GitHub: Github,
  Email: Mail,
};

export default function ContactPage() {
  return (
    <BaseDetailPage
      title="Connect"
      sectionLabel="Contact Information"
      subtitle="Feel free to reach out for collaborations or opportunities."
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        {footerConfig.bottomLinks.map((link) => {
          const Icon = IconMap[link.label];
          return (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 20,
                color: '#dadada',
                textDecoration: 'none',
                padding: '24px',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: '8px',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)';
                (e.currentTarget as HTMLElement).style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.02)';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.05)';
                (e.currentTarget as HTMLElement).style.color = '#dadada';
              }}
            >
              <div style={{ color: 'rgba(200, 170, 130, 0.8)' }}>
                {Icon && <Icon className="w-6 h-6" />}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <span style={{ 
                  fontFamily: "'Inter', sans-serif", 
                  fontSize: 12, 
                  fontWeight: 300, 
                  letterSpacing: '2px', 
                  textTransform: 'uppercase',
                  opacity: 0.5 
                }}>
                  {link.label}
                </span>
                <span style={{ 
                  fontFamily: "'GeistMono', monospace", 
                  fontSize: 18, 
                  fontWeight: 400 
                }}>
                  {link.label === 'Email' ? 'adrianmange00@gmail.com' : (link.label === 'LinkedIn' ? 'Bwalya Adrian Mange' : '@MetaADRI')}
                </span>
              </div>
            </a>
          );
        })}
      </div>
    </BaseDetailPage>
  );
}
