import Link from 'next/link';
import QuoteForm from './QuoteForm';
import { siteConfig } from '../lib/data';
import { locationPages, servicePages } from '../lib/helpers';

function CardSection({ title, items, bullets = false, limit }) {
  const displayItems = typeof limit === 'number' ? items.slice(0, limit) : items;
  const isServiceAreasGrid = title === 'Areas We Serve';

  return (
    <section className="card card-pad">
      <h3>{title}</h3>
      {bullets ? (
        <ul className="bullet-list">
          {displayItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : (
        <div className={`check-list ${isServiceAreasGrid ? 'check-list-grid-3' : ''}`}>
          {displayItems.map((item) => (
            <div className="check-item" key={item}>
              <div className="check-dot">✓</div>
              <span>{item}</span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

function TextSection({ title, text }) {
  return (
    <section className="card card-pad">
      <h3>{title}</h3>
      <p>{text}</p>
    </section>
  );
}

export function HomePage({ page }) {
  return (
    <>
      <section className="hero">
        <div className="hero-card">
          <div className="hero-grid">
            <div>
              <span className="eyebrow">Fast local junk removal</span>
              <h1>{page.title}</h1>
              <p className="lead">{page.heroIntro}</p>

              <div className="hero-actions">
                <a className="btn btn-secondary" href={siteConfig.phoneHref}>{page.ctaSecondary}</a>
                <Link href="/pricing/" className="btn btn-primary">See How Pricing Works</Link>
              </div>

              <div className="hero-stats">
                <div className="stat"><strong>Fast scheduling</strong><span>Same-day and next-day availability when open.</span></div>
                <div className="stat"><strong>Full-service hauling</strong><span>We do the lifting, loading, and haul-away.</span></div>
                <div className="stat"><strong>Clear quotes</strong><span>Send details once and get a straightforward response.</span></div>
              </div>
            </div>

            <div className="card card-pad quote-panel hero-quote-panel">
              <div className="section-heading">
                <small>Get a quote</small>
                <h2>Request junk removal now</h2>
                <p>Fill this out first and we can price the job faster.</p>
              </div>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="grid grid-2">
          <CardSection title="What We Remove" items={page.whatWeRemove} bullets limit={3} />
          <CardSection title="Why Choose Us" items={page.whyChooseUs} bullets limit={3} />
        </div>
      </section>

      <section className="section split">
        <div className="card card-pad">
          <div className="section-heading">
            <small>How it works</small>
            <h2>Simple from first contact to haul-away</h2>
          </div>
          <div className="steps">
            {page.howItWorks.map((step, index) => (
              <div className="step" key={step}>
                <div className="step-num">{index + 1}</div>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="cta-banner">
          <span className="badge">Business inquiries</span>
          <h3>Need a lead generation partner?</h3>
          <p>
            If you run a junk removal company or related service business and want to discuss leads,
            partnerships, or buying opportunities, use the business contact page.
          </p>
          <div className="hero-actions">
            <Link href="/business-contact/" className="btn btn-accent">Business Contact</Link>
            <Link href="/service-areas/" className="btn btn-secondary">Service Areas</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <small>Services</small>
          <h2>Junk removal services</h2>
        </div>
        <div className="grid grid-4">
          {servicePages().map((item) => (
            <Link href={item.slug} key={item.slug} className="card card-pad service-card">
              <div className="card-title-row">
                <div className="card-icon">↗</div>
                <h3>{item.title}</h3>
              </div>
              <p>{item.metaDescription}</p>
              <span className="card-link">View service page →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <small>Service Areas</small>
          <h2>Areas we serve</h2>
        </div>
        <div className="grid grid-3">
          {locationPages().map((item) => (
            <Link href={item.slug} key={item.slug} className="card card-pad location-card">
              <div className="card-title-row">
                <div className="card-icon">📍</div>
                <h3>{item.title}</h3>
              </div>
              <p>{item.metaDescription}</p>
              <span className="card-link">View location page →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="card card-pad">
          <div className="section-heading">
            <small>FAQ</small>
            <h2>Common questions</h2>
          </div>
          <div className="faq-list">
            {page.faq.map((item) => (
              <div key={item.q} className="faq-item">
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function StandardPage({ page }) {
  const faqs = page.faq || [];
  const listSections = (page.sections || []).filter((s) => s.items);
  const textSections = (page.sections || []).filter((s) => s.text);
  const isBusinessPage = page.type === 'business';
  const isServiceAreasPage = page.type === 'service-areas';

  return (
    <>
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="page-hero-top">
            <span className="badge">{page.category || page.type}</span>
            <a className="btn btn-secondary" href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a>
          </div>
          <h1>{page.title}</h1>
          {page.body?.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}

          <div className="hero-actions">
            <Link href="/contact/" className="btn btn-primary">Get a Fast Quote</Link>
            <a className="btn btn-secondary" href={siteConfig.phoneHref}>Call Now</a>
          </div>
        </div>
      </section>

      {listSections.length > 0 && (
        <section className="section">
          <div className={`grid ${isServiceAreasPage ? 'grid-1 service-areas-layout' : 'grid-2'}`}>
            {listSections.map((section) => (
              <CardSection key={section.heading} title={section.heading} items={section.items} />
            ))}
          </div>
        </section>
      )}

      {textSections.length > 0 && (
        <section className="section">
          <div className="grid">
            {textSections.map((section) => (
              <TextSection key={section.heading} title={section.heading} text={section.text} />
            ))}
          </div>
        </section>
      )}

      {faqs.length > 0 && (
        <section className="section">
          <div className="card card-pad">
            <div className="section-heading">
              <small>FAQ</small>
              <h2>Common questions</h2>
            </div>
            <div className="faq-list">
              {faqs.map((item) => (
                <div key={item.q} className="faq-item">
                  <h3>{item.q}</h3>
                  <p>{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section split">
        <div className="cta-banner">
          <span className="badge">{isBusinessPage ? 'Business contact' : 'Ready to book'}</span>
          <h3>{page.ctaText || 'Get a fast quote today.'}</h3>
          <p>
            {isBusinessPage
              ? 'Use this page for lead generation, partnership, and business relationship discussions.'
              : 'Call now or send the job details and we can follow up with pricing and scheduling.'}
          </p>
          <div className="hero-actions">
            <Link href={isBusinessPage ? '/business-contact/' : '/contact/'} className="btn btn-accent">
              {isBusinessPage ? 'Business Contact' : 'Request Quote'}
            </Link>
            <a className="btn btn-secondary" href={siteConfig.phoneHref}>Call Now</a>
          </div>
        </div>

        <div className="card card-pad quote-panel">
          <div className="section-heading">
            <small>{isBusinessPage ? 'Business form' : 'Quote form'}</small>
            <h2>{isBusinessPage ? 'Tell us about the opportunity' : 'Tell us about the job'}</h2>
            <p>{isBusinessPage ? 'Built for business inquiries and partnership discussions.' : 'Designed for local service conversions on desktop and mobile.'}</p>
          </div>
          <QuoteForm mode={isBusinessPage ? 'business' : 'quote'} />
        </div>
      </section>
    </>
  );
}
