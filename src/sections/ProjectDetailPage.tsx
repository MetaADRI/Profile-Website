import { useParams, Link } from 'react-router-dom';
import BaseDetailPage from './BaseDetailPage';
import { projectDetailsConfig } from '../config';

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? projectDetailsConfig[slug] : undefined;

  if (!project) {
    const title = slug 
      ? slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') 
      : 'Project';

    return (
      <BaseDetailPage
        title={title}
        sectionLabel="Project Detail"
        subtitle="Detailed overview coming soon."
      >
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center', 
          padding: '100px 20px',
          textAlign: 'center',
          background: 'rgba(255, 255, 255, 0.02)',
          borderRadius: '12px',
          border: '1px dashed rgba(255, 255, 255, 0.1)'
        }}>
          <h2 style={{ 
            fontFamily: "'EB Garamond', serif", 
            fontSize: 32, 
            color: '#ffffff', 
            marginBottom: 16,
            fontWeight: 400 
          }}>
            Details Coming Soon
          </h2>
          <p style={{ 
            color: '#dadada', 
            maxWidth: 600, 
            lineHeight: 1.6,
            opacity: 0.6,
            fontWeight: 200 
          }}>
            I'm currently documenting the technical specifications and impact of this project. 
            Check back soon for a comprehensive breakdown of the architecture, challenges, and solutions.
          </p>
          <Link 
            to="/" 
            style={{ 
              marginTop: 32,
              color: '#ffffff',
              fontSize: 14,
              textDecoration: 'none',
              borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
              paddingBottom: 4,
              opacity: 0.8
            }}
          >
            Return to Portfolio
          </Link>
        </div>
      </BaseDetailPage>
    );
  }

  return (
    <BaseDetailPage
      title={project.title}
      sectionLabel="Project Detail"
      subtitle={project.shortDescription}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 64, paddingBottom: 100 }}>
        
        {/* Project Summary */}
        <section>
          <h3 style={sectionHeadingStyle}>Project Summary</h3>
          <p style={paragraphStyle}>{project.summary}</p>
        </section>

        {/* Key Features */}
        <section>
          <h3 style={sectionHeadingStyle}>Key Features</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {project.keyFeatures.map((feature, idx) => (
              <li key={idx} style={{ 
                ...paragraphStyle, 
                marginBottom: 16, 
                display: 'flex', 
                gap: 16 
              }}>
                <span style={{ color: 'rgba(255, 255, 255, 0.3)', fontFamily: "'Fira Code', monospace", fontSize: 14 }}>0{idx + 1}</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Tech Stack */}
        <section>
          <h3 style={sectionHeadingStyle}>Tech Stack</h3>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
            gap: 24 
          }}>
            {Object.entries(project.techStack).map(([category, tech]) => (
              <div key={category} style={{ 
                padding: 20, 
                background: 'rgba(255, 255, 255, 0.03)', 
                border: '1px solid rgba(255, 255, 255, 0.05)' 
              }}>
                <h4 style={{ 
                  fontFamily: "'Inter', sans-serif", 
                  fontSize: 12, 
                  textTransform: 'uppercase', 
                  letterSpacing: '1px', 
                  color: 'rgba(255, 255, 255, 0.4)',
                  marginBottom: 8
                }}>{category}</h4>
                <p style={{ 
                  fontFamily: "'Inter', sans-serif", 
                  fontSize: 15, 
                  color: '#ffffff', 
                  fontWeight: 300,
                  margin: 0
                }}>{tech}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Architecture & Challenges */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, flexWrap: 'wrap' }}>
          <section>
            <h3 style={sectionHeadingStyle}>Architecture Notes</h3>
            <p style={{ ...paragraphStyle, fontSize: 16 }}>{project.architectureNotes}</p>
          </section>
          <section>
            <h3 style={sectionHeadingStyle}>Challenges Solved</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {project.challengesSolved.map((challenge, idx) => (
                <li key={idx} style={{ 
                  ...paragraphStyle, 
                  fontSize: 16,
                  marginBottom: 12, 
                  display: 'flex', 
                  gap: 12,
                  alignItems: 'flex-start'
                }}>
                  <span style={{ color: 'rgba(255, 255, 255, 0.3)', marginTop: 4 }}>•</span>
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Screenshots Section */}
        <section>
          <h3 style={sectionHeadingStyle}>Visual Overview</h3>
          {project.screenshots && project.screenshots.length > 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
              {project.screenshots.map((shot, idx) => (
                <div key={idx} style={{ width: '100%' }}>
                  <div style={{ 
                    width: '100%', 
                    background: 'rgba(255, 255, 255, 0.03)', 
                    padding: '2px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    overflow: 'hidden'
                  }}>
                    <img 
                      src={shot.url} 
                      alt={shot.caption} 
                      style={{ 
                        width: '100%', 
                        height: 'auto', 
                        display: 'block',
                        transition: 'transform 0.5s ease'
                      }}
                      onMouseEnter={(e) => {
                        (e.target as HTMLImageElement).style.transform = 'scale(1.02)';
                      }}
                      onMouseLeave={(e) => {
                        (e.target as HTMLImageElement).style.transform = 'scale(1)';
                      }}
                    />
                  </div>
                  <p style={{ 
                    fontFamily: "'Inter', sans-serif", 
                    fontSize: 14, 
                    color: 'rgba(255, 255, 255, 0.4)', 
                    marginTop: 16,
                    textAlign: 'center',
                    fontWeight: 300,
                    fontStyle: 'italic'
                  }}>
                    — {shot.caption}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ 
              height: 300, 
              background: 'rgba(255, 255, 255, 0.02)', 
              border: '1px dashed rgba(255, 255, 255, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'rgba(255, 255, 255, 0.3)',
              fontFamily: "'EB Garamond', serif",
              fontSize: 24,
              fontStyle: 'italic'
            }}>
              Screenshots coming soon!
            </div>
          )}
        </section>

        {/* Links */}
        <section style={{ 
          display: 'flex', 
          gap: 24, 
          paddingTop: 40, 
          borderTop: '1px solid rgba(255, 255, 255, 0.1)' 
        }}>
          {project.liveDemoUrl && (
            <a 
              href={project.liveDemoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              style={linkButtonStyle}
            >
              Live Demo
            </a>
          )}
          <a 
            href={project.repoUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{...linkButtonStyle, background: 'transparent', border: '1px solid rgba(255, 255, 255, 0.2)'}}
          >
            GitHub Repository
          </a>
        </section>
      </div>
    </BaseDetailPage>
  );
}

const sectionHeadingStyle = {
  fontFamily: "'EB Garamond', serif",
  fontSize: 24,
  fontWeight: 400,
  color: '#ffffff',
  marginBottom: 24,
};

const paragraphStyle = {
  color: '#dadada',
  lineHeight: 1.8,
  fontSize: 18,
  fontWeight: 200,
  margin: 0,
};

const linkButtonStyle = {
  padding: '12px 24px',
  background: '#ffffff',
  color: '#000000',
  textDecoration: 'none',
  fontFamily: "'Inter', sans-serif",
  fontSize: 14,
  fontWeight: 500,
  borderRadius: '4px',
  transition: 'opacity 0.2s',
};
