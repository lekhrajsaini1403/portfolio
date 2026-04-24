export default function Awards({ awards = [] }) {
  if (!awards.length) return null;

  return (
    <section className="awards-section" id="awards">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Recognition</span>
          <h2 className="section-title">Awards &amp; Honors</h2>
          <p className="section-subtitle">
            Recognition for research excellence and academic achievements
          </p>
        </div>

        <div className="awards-grid">
          {awards.map((award, idx) => (
            <div key={award.id} className="card award-card" style={{ animationDelay: `${idx * 0.08}s` }}>
              <div className="award-icon">
                <i className="fas fa-trophy"></i>
              </div>
              <div className="award-year">{award.year}</div>
              <h3 className="award-title">{award.title}</h3>
              <div className="award-org">{award.organization}</div>
              {award.description && (
                <p className="award-desc">{award.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
