import { useEffect } from 'react';
import './AppFeatureRows.css';

const rows = [
  {
    label: 'Lawyer Discovery',
    title: 'Find the Right Lawyer, Right Near You',
    desc: 'Browse Bar Council verified lawyers by domain — Criminal, Civil, Family, Property and more. See ratings, years of experience, and expertise at a glance before you consult.',
    pills: ['📍 Location-Based', '✅ Verified Profiles', '⭐ Rated Lawyers'],
    image: '/appss/Jurix1.png',
    flip: false,
  },
  {
    label: 'Case Management',
    title: 'Track Every Step of Your Case',
    desc: 'A dedicated Cases tab keeps you updated on every stage — from the moment you send an enquiry to when your case is officially opened and progressing.',
    pills: ['📂 Open Cases', '⚖️ Ongoing Cases', '🔔 Status Updates'],
    image: '/appss/Jurix4.png',
    flip: true,
  },
  {
    label: 'Encrypted Messaging',
    title: 'Private Chats. No Exceptions.',
    desc: 'All conversations between clients and lawyers are end-to-end encrypted. No third parties, no data sharing — what you say stays between you and your lawyer.',
    pills: ['🔒 E2E Encrypted', '💬 Secure Inbox', '🚫 No Third Parties'],
    image: '/appss/Jurix6.png',
    flip: false,
  },
  {
    label: 'Calendar Sync',
    title: 'Never Miss a Hearing Again',
    desc: 'Your schedule, hearings, and lawyer meetings sync automatically to your iPhone Calendar. Get reminders right on your lock screen — no manual entry needed.',
    pills: ['📅 Apple Calendar', '⏰ Auto Reminders', '🗓️ Hearing Alerts'],
    image: '/appss/Jurix5.png',
    flip: true,
  },
  {
    label: 'Lawyer Dashboard',
    title: 'Lawyers: Manage Everything in One Place',
    desc: 'Accept or decline new enquiries, manage ongoing cases, view your schedule, and stay on top of daily cause lists — all from a single powerful dashboard.',
    pills: ['📋 New Enquiries', '🏛️ Court Updates', '📊 Case Overview'],
    image: '/appss/Jurix8.png',
    flip: false,
  },
  {
    label: 'Location & Maps',
    title: 'Know Exactly Where Your Lawyer Is',
    desc: 'View your lawyer\'s office location on an integrated map. Get directions, check proximity, and plan your in-person meetings with ease.',
    pills: ['🗺️ Office Location', '📍 Directions', '🏢 Legal Firms'],
    image: '/appss/Jurix9.png',
    flip: true,
  },
];

export default function AppFeatureRows() {
  useEffect(() => {
    const els = document.querySelectorAll('.afr-row');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('afr-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="afr-section" id="features">
      <div className="afr-header">
        <div className="section-label">Features</div>
        <h2>Built for Every Step of Your Legal Journey</h2>
        <p>Every feature in JuriX is designed around real legal workflows — nothing unnecessary, everything essential.</p>
      </div>
      <div className="afr-rows">
        {rows.map((row, idx) => (
          <div key={idx} className={`afr-row ${row.flip ? 'afr-flip' : ''}`}>
            <div className="afr-text">
              <span className="afr-label">{row.label}</span>
              <h3>{row.title}</h3>
              <p>{row.desc}</p>
              <div className="afr-pills">
                {row.pills.map((pill, i) => (
                  <span key={i} className="afr-pill">{pill}</span>
                ))}
              </div>
            </div>
            <div className="afr-visual">
              <div className="afr-phone-wrap">
                <div className="afr-glow"></div>
                <div className="afr-phone-frame">
                  <div className="afr-phone-inner">
                    <img src={row.image} alt={row.title} className="afr-screenshot" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
