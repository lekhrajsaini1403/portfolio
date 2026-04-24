import { useState } from 'react';

function EducationTimeline({ items }) {
  return (
    <div className="timeline">
      {items.map(edu => (
        <div key={edu.id} className="timeline-item">
          <div className="timeline-dot">
            <i className="fas fa-graduation-cap"></i>
          </div>
          <div className="timeline-content">
            <div className="timeline-period">
              {edu.yearStart} — {edu.yearEnd ?? 'Present'}
            </div>
            <h3 className="timeline-title">{edu.degree}</h3>
            <div className="timeline-org">{edu.institution}</div>
            {edu.department && (
              <div style={{ fontSize: '0.84rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                {edu.department}
              </div>
            )}
            {edu.thesis && (
              <div className="timeline-thesis">
                <i className="fas fa-file-lines" style={{ marginRight: '0.35rem' }}></i>
                Thesis: {edu.thesis}
              </div>
            )}
            {edu.grade && (
              <div className="timeline-grade">
                <i className="fas fa-star" style={{ fontSize: '0.75rem' }}></i>
                {edu.grade}
              </div>
            )}
            {edu.description && (
              <p className="timeline-desc" style={{ marginTop: '0.75rem' }}>{edu.description}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

function ExperienceTimeline({ items }) {
  return (
    <div className="timeline">
      {items.map(exp => (
        <div key={exp.id} className="timeline-item">
          <div className="timeline-dot" style={{ borderColor: 'var(--accent)' }}>
            <i className="fas fa-briefcase"></i>
          </div>
          <div className="timeline-content">
            <div className="timeline-period" style={{ color: 'var(--accent)' }}>
              {exp.startDate} — {exp.isCurrent ? 'Present' : exp.endDate}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              <h3 className="timeline-title">{exp.title}</h3>
              {exp.isCurrent && (
                <span className="current-badge">
                  <span style={{ width: 6, height: 6, background: 'var(--success)', borderRadius: '50%', display: 'inline-block' }} />
                  Current
                </span>
              )}
            </div>
            <div className="timeline-org">{exp.organization}</div>
            {exp.location && (
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                <i className="fas fa-location-dot" style={{ marginRight: '0.3rem' }}></i>
                {exp.location}
              </div>
            )}
            <span style={{
              display: 'inline-block', padding: '0.15rem 0.6rem',
              background: 'rgba(6,182,212,0.1)', color: 'var(--accent-light)',
              borderRadius: '100px', fontSize: '0.74rem', fontWeight: 600, marginBottom: '0.75rem',
            }}>
              {exp.type}
            </span>
            {exp.description && (
              <p className="timeline-desc">{exp.description}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Timeline({ education, experience }) {
  const [tab, setTab] = useState('education');

  return (
    <section className="timeline-section" id="timeline">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">My Journey</span>
          <h2 className="section-title">Education &amp; Experience</h2>
          <p className="section-subtitle">
            Academic background and research experience that shaped my expertise
          </p>
        </div>

        <div className="timeline-tabs">
          <button className={`timeline-tab ${tab === 'education' ? 'active' : ''}`} onClick={() => setTab('education')}>
            <i className="fas fa-graduation-cap"></i>
            Education
          </button>
          <button className={`timeline-tab ${tab === 'experience' ? 'active' : ''}`} onClick={() => setTab('experience')}>
            <i className="fas fa-briefcase"></i>
            Experience
          </button>
        </div>

        {tab === 'education'
          ? <EducationTimeline items={education} />
          : <ExperienceTimeline items={experience} />
        }
      </div>
    </section>
  );
}
