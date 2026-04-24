export default function About({ profile, skills, researchAreas }) {
  const infoItems = [
    { icon: 'fa-envelope', label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: 'fa-phone', label: 'Phone', value: profile.phone, href: `tel:${profile.phone}` },
    { icon: 'fa-location-dot', label: 'Location', value: profile.location },
    { icon: 'fa-id-card', label: 'ORCID', value: profile.orcid ? 'View Profile' : null, href: profile.orcid },
  ].filter(i => i.value);

  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">About Me</span>
          <h2 className="section-title">Who Am I?</h2>
          <p className="section-subtitle">
            A researcher driven by curiosity and the desire to make an impact through science
          </p>
        </div>

        <div className="about-grid">
          {/* ── Left: Contact info + Skills ── */}
          <div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.25rem', fontFamily: 'Inter' }}>
              Contact &amp; Details
            </h3>
            <div className="about-info-grid">
              {infoItems.map(({ icon, label, value, href }) => (
                <div key={label} className="about-info-item">
                  <div className="about-info-icon">
                    <i className={`fas ${icon}`}></i>
                  </div>
                  <div className="about-info-content">
                    <div className="about-info-label">{label}</div>
                    {href ? (
                      <a href={href} target="_blank" rel="noopener noreferrer"
                        className="about-info-value" style={{ color: 'var(--primary-light)' }}>
                        {value}
                      </a>
                    ) : (
                      <div className="about-info-value">{value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: '1.5rem 0 1rem', fontFamily: 'Inter' }}>
              Technical Skills
            </h3>
            <div className="about-skills">
              {skills.map(skill => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>

          {/* ── Right: Bio + Research Areas ── */}
          <div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem', fontFamily: 'Inter' }}>
              About Lekhraj
            </h3>
            {profile.bio.split('\n\n').map((para, i) => (
              <p key={i} style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1rem', fontSize: '0.95rem' }}>
                {para.trim()}
              </p>
            ))}

            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: '2rem 0 1rem', fontFamily: 'Inter' }}>
              Research Interests
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '0.75rem' }}>
              {researchAreas.map(area => (
                <div key={area.id} className="card research-area-card">
                  <span className="research-area-icon">{area.icon}</span>
                  <div className="research-area-name">{area.name}</div>
                  <div className="research-area-desc">{area.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
