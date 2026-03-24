import './Team.css';

const team = [
  {
    name: 'Akshit Goyal',
    role: 'Project Lead & Backend',
    icon: '🧠',
    image: '/teams/akshit.jpg',
    desc: 'Leads the project vision and architecture, driving backend systems and core app infrastructure.',
  },
  {
    name: 'Tapur Aggarwal',
    role: 'UI/UX & Swift Developer',
    icon: '🎨',
    image: '/teams/tapur.jpg',
    desc: "Crafts the app's interface and user experience, bringing designs to life with Swift on iOS.",
  },
  {
    name: 'Seerat Sharma',
    role: 'Swift Developer',
    icon: '📱',
    image: '/teams/seerat.jpg',
    desc: 'Builds and refines core iOS features, ensuring smooth performance and native app quality.',
  },
  {
    name: 'Tanmay Kataria',
    role: 'Support',
    icon: '🤝',
    image: '/teams/tanmay.jpg',
    desc: 'Ensures users and lawyers get the help they need, handling feedback and platform support.',
  },
];

function Avatar({ member }) {
  const handleError = (e) => {
    e.target.style.display = 'none';
    e.target.nextSibling.style.display = 'flex';
  };

  return (
    <div className="team-avatar">
      <img
        src={member.image}
        alt={member.name}
        className="team-avatar-img"
        onError={handleError}
      />
      <span className="team-avatar-fallback" style={{ display: 'none' }}>{member.icon}</span>
    </div>
  );
}

export default function Team() {
  return (
    <section className="team-section" id="team">
      <div className="team-header">
        <div className="section-label">The Team</div>
        <h2>Built by People Who Care About Law</h2>
        <p>A small, focused team dedicated to making legal access simpler, safer, and more transparent for everyone in India.</p>
      </div>
      <div className="team-grid">
        {team.map((member, idx) => (
          <div key={idx} className="team-card fade-up" style={{ animationDelay: `${idx * 0.1}s` }}>
            <Avatar member={member} />
            <div className="team-info">
              <h3>{member.name}</h3>
              <span className="team-role">{member.role}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
