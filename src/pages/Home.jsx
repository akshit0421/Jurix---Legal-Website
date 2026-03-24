import Hero from '../components/Hero';
import Features from '../components/Features';
import Security from '../components/Security';
import AgreementFlow from '../components/AgreementFlow';
import Team from '../components/Team';

const marqueeItems = [
  'Find Lawyers Nearby', 'Bar Council Verified', 'Send Enquiry', 'Encrypted Chat',
  'Agreement Signing', 'Case Tracking', 'Daily Cause Lists', 'Real-Time Hearings',
  'Calendar Sync', 'Secure Documents',
];

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="marquee-band">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, idx) => (
            <span key={idx} className="marquee-item">{item}</span>
          ))}
        </div>
      </div>
      <Features />
      <Security />
      <AgreementFlow />
      <Team />
    </main>
  );
}
