import { useState } from 'react';

const TYPE_FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'journal', label: 'Journal Articles' },
  { key: 'conference', label: 'Conference Papers' },
  { key: 'preprint', label: 'Preprints' },
];

const TYPE_CLASS = {
  journal: 'pub-type-journal',
  conference: 'pub-type-conference',
  preprint: 'pub-type-preprint',
  book_chapter: 'pub-type-book_chapter',
  thesis: 'pub-type-thesis',
};

export default function Publications({ publications }) {
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all'
    ? publications
    : publications.filter(p => p.type === filter);

  return (
    <section className="publications-section" id="publications">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Research Output</span>
          <h2 className="section-title">Publications</h2>
          <p className="section-subtitle">
            Peer-reviewed journal articles, conference papers, and research contributions
          </p>
        </div>

        {/* Filter Bar */}
        <div className="publications-filter">
          {TYPE_FILTERS.map(({ key, label }) => (
            <button
              key={key}
              className={`filter-btn ${filter === key ? 'active' : ''}`}
              onClick={() => setFilter(key)}
            >
              {label}
              {key !== 'all' && (
                <span style={{
                  marginLeft: '0.35rem', background: 'rgba(99,102,241,0.15)',
                  borderRadius: '100px', padding: '0 0.4rem', fontSize: '0.72rem',
                }}>
                  {publications.filter(p => p.type === key).length}
                </span>
              )}
            </button>
          ))}
        </div>

        {filtered.map((pub, idx) => (
          <div key={pub.id} className="publication-card" style={{ animationDelay: `${idx * 0.05}s` }}>
            <div className="pub-header">
              <span className={`pub-type-badge ${TYPE_CLASS[pub.type] || 'pub-type-journal'}`}>
                {pub.typeLabel}
              </span>
              {pub.featured && (
                <i className="fas fa-star" style={{ color: 'var(--warning)', marginLeft: '0.4rem' }}></i>
              )}
              <h3 className="pub-title">{pub.title}</h3>
            </div>

            <div className="pub-authors">
              <i className="fas fa-users" style={{ marginRight: '0.35rem', fontSize: '0.8rem' }}></i>
              {pub.authors}
            </div>

            <div className="pub-meta">
              {pub.venue && (
                <span className="pub-meta-item">
                  <i className="fas fa-book-open" style={{ fontSize: '0.8rem' }}></i>
                  {pub.venue}
                </span>
              )}
              <span className="pub-meta-item">
                <i className="fas fa-calendar" style={{ fontSize: '0.8rem' }}></i>
                {pub.year}
              </span>
              {pub.doi && (
                <span className="pub-meta-item">
                  <i className="fas fa-hashtag" style={{ fontSize: '0.8rem' }}></i>
                  DOI: {pub.doi}
                </span>
              )}
            </div>

            {pub.abstract && (
              <p className="pub-abstract">{pub.abstract}</p>
            )}

            <div className="pub-actions">
              {pub.link && (
                <a href={pub.link} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline">
                  <i className="fas fa-arrow-up-right-from-square" style={{ fontSize: '0.8rem' }}></i>
                  View Paper
                </a>
              )}
              {pub.pdfLink && (
                <a href={pub.pdfLink} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">
                  <i className="fas fa-file-pdf" style={{ fontSize: '0.8rem' }}></i>
                  PDF
                </a>
              )}
              {pub.citations > 0 && (
                <span className="pub-citation">
                  <i className="fas fa-quote-right" style={{ fontSize: '0.75rem' }}></i>
                  {pub.citations} citations
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
