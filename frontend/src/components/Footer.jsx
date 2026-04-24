export default function Footer({ profile }) {
  const year = new Date().getFullYear();
  const name = profile?.name || 'Lekhraj Saini';

  const socials = [
    { icon: 'fa-github', fab: true, href: profile?.github, label: 'GitHub' },
    { icon: 'fa-linkedin', fab: true, href: profile?.linkedin, label: 'LinkedIn' },
    { icon: 'fa-graduation-cap', fab: false, href: profile?.google_scholar, label: 'Scholar' },
    { icon: 'fa-researchgate', fab: true, href: profile?.researchgate, label: 'ResearchGate' },
  ].filter(s => s.href);

  return (
    <footer className="footer">
      <div className="container">
        <span className="footer-logo">{name}</span>
        <p className="footer-quote">
          "Science is not only a disciple of reason but also one of romance and passion." — Stephen Hawking
        </p>

        {socials.length > 0 && (
          <div className="footer-social">
            {socials.map(({ icon, fab, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                title={label}
              >
                <i className={`${fab ? 'fab' : 'fas'} ${icon}`}></i>
              </a>
            ))}
          </div>
        )}

        <p className="footer-copy">
          © {year} {name}. Built with{' '}
          <i className="fas fa-heart" style={{ color: 'var(--danger)', fontSize: '0.8rem' }}></i>
          {' '}using React &amp; Django.
        </p>
      </div>
    </footer>
  );
}
