const STATUS_CLASS = {
  ongoing: 'status-ongoing',
  completed: 'status-completed',
  upcoming: 'status-upcoming',
};

export default function Projects({ projects }) {
  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">My Work</span>
          <h2 className="section-title">Research Projects</h2>
          <p className="section-subtitle">
            Ongoing and completed research initiatives in ML, AI, and bioinformatics
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div key={project.id} className="card project-card" style={{ animationDelay: `${idx * 0.08}s` }}>
              <div className="project-header">
                <div className="project-icon">
                  <i className="fas fa-microchip"></i>
                </div>
                <span className={`project-status ${STATUS_CLASS[project.status] || 'status-ongoing'}`}>
                  {project.statusLabel}
                </span>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.shortDescription || project.description}</p>

              {project.technologies?.length > 0 && (
                <div className="project-tech">
                  {project.technologies.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              )}

              <div className="project-footer">
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline">
                    <i className="fas fa-arrow-up-right-from-square" style={{ fontSize: '0.8rem' }}></i>
                    View
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline">
                    <i className="fab fa-github" style={{ fontSize: '0.8rem' }}></i>
                    Code
                  </a>
                )}
                {project.funding && (
                  <span className="project-funding">
                    <i className="fas fa-building-columns" style={{ fontSize: '0.75rem' }}></i>
                    {project.funding}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
