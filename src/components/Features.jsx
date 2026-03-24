import './Features.css';

const features = [
  {
    icon: '📍',
    title: 'Location-Based Discovery',
    desc: 'Find top-rated lawyers near you using MapKit. Filter by region or let the app suggest the best advocates in your area.'
  },
  {
    icon: '✅',
    title: 'Bar Council Verification',
    desc: 'Every lawyer on JuriX is verified via their Bar Council ID and photo — through API or manual review — before they can accept cases.'
  },
  {
    icon: '📨',
    title: 'Enquiry System',
    desc: 'Clients send consultation enquiries; lawyers choose to accept or decline. Transparent, simple, and no pressure on either side.'
  },
  {
    icon: '💬',
    title: 'Encrypted Chat',
    desc: 'All conversations in the In Discussion phase are end-to-end encrypted. No third parties. No data sharing. Completely private.'
  },
  {
    icon: '📝',
    title: 'Digital Agreement Signing',
    desc: 'Lawyers upload an agreement form; clients sign and return it within the app. Once signed, the case is officially opened — paperless and secure.'
  },
  {
    icon: '📂',
    title: 'Case Progress Tracking',
    desc: 'A dedicated Cases tab lets clients follow every stage of their case — from discussion through to resolution — all in one place.'
  },
  {
    icon: '🏛️',
    title: 'Live Court Dashboard',
    desc: 'Lawyers get a real-time dashboard showing upcoming hearings, ongoing hearings, and daily cause lists — directly from official court data.'
  },
  {
    icon: '📋',
    title: 'Daily Cause Lists',
    desc: 'Auto-synced cause list updates from official state court APIs every day — so lawyers are always prepared without manual searching.'
  },
  {
    icon: '🗓️',
    title: 'Meetings & Apple Calendar',
    desc: 'Schedule lawyer-client meetings in the app. All meetings and hearings sync seamlessly to the iPhone\'s built-in Calendar with notifications.'
  }
];

export default function Features() {
  return (
    <section className="features-section" id="features">
      <div className="feat-header">
        <div className="section-label">Features</div>
        <h2>Built for Every Step of Your Legal Journey</h2>
        <p>Every feature in JuriX is designed around real legal workflows — nothing unnecessary, everything essential.</p>
      </div>
      <div className="feat-grid">
        {features.map((feature, idx) => (
          <div key={idx} className="feat-card fade-up" style={{ animationDelay: `${idx * 0.08}s` }}>
            <div className="feat-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
