import { useState } from 'react';

// Contact form posts to Django backend.
// If you don't want a backend at all, replace the fetch() call
// with a Formspree URL: https://formspree.io (free, no backend needed)
const CONTACT_API = import.meta.env.VITE_API_URL
  ? `${import.meta.env.VITE_API_URL}/contact/`
  : 'http://127.0.0.1:8000/api/contact/';

const getLinks = (profile) => [
  { icon: 'fa-envelope', fab: false, label: 'Email', value: profile.email, href: `mailto:${profile.email}`, color: 'rgba(99,102,241,0.15)', iconColor: 'var(--primary-light)' },
  { icon: 'fa-phone', fab: false, label: 'Phone', value: profile.phone, href: `tel:${profile.phone}`, color: 'rgba(6,182,212,0.15)', iconColor: 'var(--accent)' },
  { icon: 'fa-location-dot', fab: false, label: 'Location', value: profile.location, href: null, color: 'rgba(16,185,129,0.15)', iconColor: 'var(--success)' },
  { icon: 'fa-linkedin', fab: true, label: 'LinkedIn', value: profile.linkedin ? 'View Profile' : null, href: profile.linkedin, color: 'rgba(10,102,194,0.15)', iconColor: '#0a66c2' },
  { icon: 'fa-graduation-cap', fab: false, label: 'Google Scholar', value: profile.googleScholar ? 'View Publications' : null, href: profile.googleScholar, color: 'rgba(66,133,244,0.15)', iconColor: '#4285f4' },
  { icon: 'fa-researchgate', fab: true, label: 'ResearchGate', value: profile.researchgate ? 'View Profile' : null, href: profile.researchgate, color: 'rgba(0,204,189,0.15)', iconColor: '#00ccbd' },
  { icon: 'fa-github', fab: true, label: 'GitHub', value: profile.github ? 'View Code' : null, href: profile.github, color: 'rgba(255,255,255,0.08)', iconColor: 'var(--text-secondary)' },
].filter(l => l.value);

export default function Contact({ profile }) {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // null | 'sending' | 'success' | 'error'

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Invalid email';
    if (!form.subject.trim()) errs.subject = 'Subject is required';
    if (!form.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setStatus('sending');
    try {
      const res = await fetch(CONTACT_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors(er => ({ ...er, [e.target.name]: '' }));
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">Contact Me</h2>
          <p className="section-subtitle">
            Interested in collaboration, research discussions, or just want to say hello?
          </p>
        </div>

        <div className="contact-grid">
          {/* ── Left: Links ── */}
          <div className="contact-info-card">
            <h3 className="contact-info-title">Let's Connect</h3>
            <p className="contact-info-subtitle">
              I'm always open to new research collaborations and scientific discussions.
            </p>
            {getLinks(profile).map(({ icon, fab, label, value, href, color, iconColor }) =>
              href ? (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="contact-link">
                  <div className="contact-link-icon" style={{ background: color, color: iconColor }}>
                    <i className={`${fab ? 'fab' : 'fas'} ${icon}`}></i>
                  </div>
                  <div className="contact-link-text"><small>{label}</small><span>{value}</span></div>
                </a>
              ) : (
                <div key={label} className="contact-link" style={{ cursor: 'default' }}>
                  <div className="contact-link-icon" style={{ background: color, color: iconColor }}>
                    <i className={`${fab ? 'fab' : 'fas'} ${icon}`}></i>
                  </div>
                  <div className="contact-link-text"><small>{label}</small><span>{value}</span></div>
                </div>
              )
            )}
          </div>

          {/* ── Right: Form ── */}
          <div className="contact-form">
            <h3 className="form-title">Send a Message</h3>
            <p className="form-subtitle">Fill out the form and I'll get back to you shortly.</p>

            {status === 'success' && (
              <div className="form-success">
                <i className="fas fa-circle-check"></i>
                Message sent! I'll respond soon.
              </div>
            )}
            {status === 'error' && (
              <div className="form-success" style={{ background: 'rgba(239,68,68,0.1)', borderColor: 'rgba(239,68,68,0.3)', color: 'var(--danger)' }}>
                <i className="fas fa-circle-exclamation"></i>
                Could not send. Please email me directly at <strong>{profile.email}</strong>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-name">Your Name</label>
                  <input id="contact-name" name="name" type="text" className="form-control"
                    placeholder="Dr. John Smith" value={form.name} onChange={handleChange} />
                  {errors.name && <div className="form-error">{errors.name}</div>}
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-email">Email</label>
                  <input id="contact-email" name="email" type="email" className="form-control"
                    placeholder="you@university.edu" value={form.email} onChange={handleChange} />
                  {errors.email && <div className="form-error">{errors.email}</div>}
                </div>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-subject">Subject</label>
                <input id="contact-subject" name="subject" type="text" className="form-control"
                  placeholder="Research Collaboration" value={form.subject} onChange={handleChange} />
                {errors.subject && <div className="form-error">{errors.subject}</div>}
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-message">Message</label>
                <textarea id="contact-message" name="message" className="form-control"
                  placeholder="I would like to discuss..." value={form.message} onChange={handleChange} />
                {errors.message && <div className="form-error">{errors.message}</div>}
              </div>
              <button type="submit" id="contact-submit" className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center' }} disabled={status === 'sending'}>
                {status === 'sending' ? (
                  <><span className="spinner" style={{ width: 16, height: 16, borderWidth: 2 }} /> Sending…</>
                ) : (
                  <><i className="fas fa-paper-plane"></i> Send Message</>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
