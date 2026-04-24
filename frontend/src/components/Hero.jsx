export default function Hero({ profile, stats }) {
  const initials = profile.name
    .split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-bg" />
      <div className="hero-grid" />
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />

      <div className="hero-content">
        {/* ── Left: Text ── */}
        <div className="animate-fade-up">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Open to Collaboration
          </div>

          <h1 className="hero-name">{profile.name}</h1>
          <p className="hero-title">{profile.title}</p>

          <div className="hero-institution">
            <i className="fas fa-location-dot"></i>
            <span>{profile.institution}</span>
            {profile.location && <span>· {profile.location}</span>}
          </div>

          <p className="hero-bio">{profile.shortBio}</p>

          {/* Stats */}
          <div className="hero-stats">
            {stats.map(s => (
              <div key={s.label} className="hero-stat">
                <span className="hero-stat-number">{s.number}</span>
                <span className="hero-stat-label">{s.label}</span>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="hero-actions">
            <button className="btn btn-primary" onClick={() => scrollTo('publications')}>
              <i className="fas fa-book-open"></i>
              View Publications
            </button>
            <button className="btn btn-outline" onClick={() => scrollTo('contact')}>
              <i className="fas fa-envelope"></i>
              Get in Touch
            </button>
          </div>

          {/* Social Links */}
          <div className="hero-social">
            {profile.googleScholar && (
              <a href={profile.googleScholar} target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fas fa-graduation-cap"></i> Scholar
              </a>
            )}
            {profile.github && (
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-github"></i> GitHub
              </a>
            )}
            {profile.linkedin && (
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
            )}
            {profile.researchgate && (
              <a href={profile.researchgate} target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-researchgate"></i> ResearchGate
              </a>
            )}
            {profile.cv && (
              <a href={profile.cv} target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fas fa-download"></i> CV
              </a>
            )}
          </div>
        </div>

        {/* ── Right: Avatar ── */}
        <div className="hero-visual">
          <div className="hero-avatar-container">
            <div className="hero-avatar-ring-2" />
            <div className="hero-avatar-ring" />
            <div className="hero-avatar">
              <img src="/lekh.jpeg"
                alt="lekh"
                width="400"
                height="300"></img>
            </div>
            <div className="hero-floating-tag hero-tag-1">
              <i class="fa-solid fa-cloud-rain"></i>
              Polar Meteorology
            </div>
            <div className="hero-floating-tag hero-tag-2">
              <i class="fa-solid fa-snowflake"></i>
              Precipitation Microphysics
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
