import { useParams } from 'react-router-dom';
import BaseDetailPage from './BaseDetailPage';

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const title = slug ? slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : 'Project';

  return (
    <BaseDetailPage
      title={title}
      sectionLabel="Project Detail"
      subtitle="Detailed overview of the project and its impact."
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
        <p style={{ color: '#dadada', lineHeight: 1.8, fontSize: 18, fontWeight: 200 }}>
          This project represents a significant milestone in my development journey. It showcases my ability to solve complex problems using modern technologies and a user-centric approach.
        </p>
        <p style={{ color: '#dadada', lineHeight: 1.8, fontSize: 18, fontWeight: 200 }}>
          Detailed technical specifications and implementation details will be provided as this section is updated.
        </p>
      </div>
    </BaseDetailPage>
  );
}
