import BaseDetailPage from './BaseDetailPage';
import { architectureConfig } from '../config';

export default function AboutPage() {
  return (
    <BaseDetailPage
      title="About Me"
      sectionLabel="Biography"
      subtitle={architectureConfig.title}
    >
      <div className="flex flex-col lg:flex-row gap-12 lg:items-start">
        {/* Image Container */}
        <div 
          className="w-full lg:w-1/2 sticky top-24"
          style={{
            aspectRatio: '4/5',
            overflow: 'hidden',
            borderRadius: '4px',
            backgroundColor: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)'
          }}
        >
          <img 
            src="/images/profile.jpg" 
            alt="Bwalya Adrian Mange" 
            className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 hover:scale-105"
            style={{
              display: 'block'
            }}
          />
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2">
          <p 
            style={{ 
              color: '#dadada', 
              lineHeight: 1.9, 
              fontSize: 18, 
              fontWeight: 200,
              fontFamily: "'Inter', sans-serif"
            }}
          >
            {architectureConfig.description}
          </p>
          
          <div 
            style={{ 
              marginTop: 48,
              paddingTop: 32,
              borderTop: '1px solid rgba(255,255,255,0.08)'
            }}
          >
            <h4 
              style={{ 
                fontFamily: "'EB Garamond', serif", 
                fontSize: 24, 
                color: '#ffffff', 
                marginBottom: 16 
              }}
            >
              My Mission
            </h4>
            <p 
              style={{ 
                color: '#dadada', 
                lineHeight: 1.8, 
                fontSize: 16, 
                fontWeight: 200,
                opacity: 0.8
              }}
            >
              My mission is to be the bridge in the digital gap. I combine a customer-first mindset with deep technical IT and cybersecurity skills to assist users through every challenge, ensuring they navigate products and services with confidence. I am dedicated to creating digital experiences that are not only functional and beautiful, but purposefully resilient.
            </p>
          </div>
        </div>
      </div>
    </BaseDetailPage>
  );
}
