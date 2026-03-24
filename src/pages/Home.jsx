import Hero from '../components/Hero';
import AppFeatureRows from '../components/AppFeatureRows';
import Screenshots from '../components/Screenshots';
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
      <AppFeatureRows />
      <Screenshots />
      <Security />
      <AgreementFlow />
      <Team />
    </main>
  );
}
