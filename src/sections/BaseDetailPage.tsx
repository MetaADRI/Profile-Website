import { useNavigate } from 'react-router-dom';
import AmberCascades from './AmberCascades';
import { siteConfig } from '../config';

interface BaseDetailPageProps {
  title: string;
  subtitle?: string;
  sectionLabel?: string;
  children: React.ReactNode;
}

export default function BaseDetailPage({ title, subtitle, sectionLabel, children }: BaseDetailPageProps) {
  const navigate = useNavigate();

  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', zIndex: 0, opacity: 0.4 }}>
        <AmberCascades />
      </div>

      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          height: 80,
          padding: '0 5vw',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: 'rgba(10, 10, 10, 0.9)',
          backdropFilter: 'blur(8px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        }}
      >
        <a
          href="/"
          onClick={(e) => { e.preventDefault(); navigate('/'); }}
          className="text-white no-underline"
          style={{
            fontFamily: "'GeistMono', monospace",
            fontSize: 18,
            fontWeight: 400,
            letterSpacing: '-0.5px',
          }}
        >
          {siteConfig.brandName}
        </a>
        <a
          href="/"
          onClick={(e) => { e.preventDefault(); navigate('/'); }}
          className="nav-link"
        >
          Back to home
        </a>
      </nav>

      <div style={{ position: 'relative', zIndex: 2 }}>
        <section style={{ padding: '180px 5vw 100px', maxWidth: 860, margin: '0 auto' }}>
          {sectionLabel && (
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 12,
                fontWeight: 300,
                letterSpacing: '3px',
                textTransform: 'uppercase',
                color: '#dadada',
                opacity: 0.5,
                marginBottom: 24,
              }}
            >
              {sectionLabel}
            </div>
          )}
          <h1
            style={{
              fontFamily: "'EB Garamond', serif",
              fontWeight: 400,
              fontSize: 'clamp(40px, 5vw, 72px)',
              lineHeight: 1.1,
              letterSpacing: '-1.5px',
              color: '#ffffff',
              margin: '0 0 24px 0',
            }}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
                fontSize: 18,
                lineHeight: 1.6,
                color: 'rgba(218, 218, 218, 0.8)',
                margin: 0,
                maxWidth: 540,
              }}
            >
              {subtitle}
            </p>
          )}
        </section>

        <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 5vw' }}>
          <div style={{ width: '100%', height: 1, background: 'rgba(255,255,255,0.08)' }} />
        </div>

        <article style={{ padding: '80px 5vw', maxWidth: 860, margin: '0 auto' }}>
          {children}
        </article>
      </div>
    </div>
  );
}
