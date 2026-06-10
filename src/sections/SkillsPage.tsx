import BaseDetailPage from './BaseDetailPage';
import { capabilitiesConfig } from '../config';

export default function SkillsPage() {
  return (
    <BaseDetailPage
      title="Skills & Expertise"
      sectionLabel="Technical Proficiency"
      subtitle="A comprehensive overview of my technical capabilities."
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 60 }}>
        {capabilitiesConfig.items.map((item) => (
          <div key={item.slug}>
            <h3 
              style={{ 
                fontFamily: "'EB Garamond', serif", 
                fontSize: 28, 
                color: '#ffffff', 
                marginBottom: 16,
                fontWeight: 400 
              }}
            >
              {item.title}
            </h3>
            <p style={{ color: '#dadada', lineHeight: 1.8, fontSize: 16, fontWeight: 200 }}>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </BaseDetailPage>
  );
}
