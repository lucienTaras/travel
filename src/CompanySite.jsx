import React, { useEffect, useMemo, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Check, ChevronDown, Menu, X } from 'lucide-react'
import {
  caseStudies,
  industries,
  insights,
  mediaMentions,
  navigation,
  publications,
  services,
  speaking,
} from './site-content'
import './styles/site.css'

const SITE_URL = 'https://tarasai.com'
const BOOKING_URL = 'https://calendar.app.google/9Lg9BzZy97jv3poHA'

function PageMeta({ title, description, path, type = 'website' }) {
  useEffect(() => {
    document.title = title ? `${title} | Taras AI` : 'Taras AI | From AI Ambition to Operational Impact'
    const descriptionContent = description || 'Hands-on AI and business transformation leadership for complex organisations.'
    let descriptionTag = document.querySelector('meta[name="description"]')
    if (!descriptionTag) {
      descriptionTag = document.createElement('meta')
      descriptionTag.name = 'description'
      document.head.appendChild(descriptionTag)
    }
    descriptionTag.content = descriptionContent

    const canonicalUrl = `${SITE_URL}${path || '/'}`
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = canonicalUrl

    const metaValues = [
      ['property', 'og:title', title || 'Taras AI | From AI Ambition to Operational Impact'],
      ['property', 'og:description', descriptionContent],
      ['property', 'og:url', canonicalUrl],
      ['property', 'og:type', type],
      ['name', 'twitter:card', 'summary'],
    ]
    metaValues.forEach(([attribute, key, value]) => {
      let tag = document.querySelector(`meta[${attribute}="${key}"]`)
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute(attribute, key)
        document.head.appendChild(tag)
      }
      tag.content = value
    })
  }, [title, description, path, type])
  return null
}

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  useEffect(() => setMenuOpen(false), [location.pathname])

  return (
    <header className="site-header">
      <div className="site-container header-inner">
        <Link to="/" className="brand" aria-label="Taras AI home">
          <span className="brand-mark" aria-hidden="true"><img src="/logo.png" alt="" /></span>
          <span className="brand-name">Taras <span>AI</span></span>
        </Link>
        <button
          type="button"
          className="mobile-menu-toggle"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
        <nav id="primary-navigation" className={`primary-navigation${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
          <div className="nav-links">
            {navigation.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={location.pathname === item.href || location.pathname.startsWith(`${item.href}/`) ? 'nav-link is-active' : 'nav-link'}
                aria-current={location.pathname === item.href ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <Link className="button button-primary nav-cta" to="/contact">Discuss Your Challenge <ArrowRight aria-hidden="true" /></Link>
        </nav>
      </div>
    </header>
  )
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-container footer-main">
        <div className="footer-brand-block">
          <Link to="/" className="brand" aria-label="Taras AI home">
            <span className="brand-mark" aria-hidden="true"><img src="/logo.png" alt="" /></span>
            <span className="brand-name">Taras <span>AI</span></span>
          </Link>
          <p>From AI ambition to operational impact.</p>
          <p className="footer-location">Cape Town, South Africa · Working internationally</p>
        </div>
        <div className="footer-column">
          <h2>Explore</h2>
          <Link to="/services">Services</Link>
          <Link to="/industries">Industries</Link>
          <Link to="/approach">Our Approach</Link>
          <Link to="/case-studies">Case Studies</Link>
        </div>
        <div className="footer-column">
          <h2>Learn</h2>
          <Link to="/publications-and-speaking">Publications & Speaking</Link>
          <Link to="/about">About Lucien</Link>
          <Link to="/insights">Insights</Link>
          <Link to="/privacy">Privacy Policy</Link>
        </div>
        <div className="footer-column footer-contact">
          <h2>Start a Conversation</h2>
          <a href="mailto:lucien.devoux@gmail.com">lucien.devoux@gmail.com</a>
          <a href="tel:+27825016568">+27 82 501 6568</a>
          <a href="https://www.linkedin.com/in/ldevoux/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight aria-hidden="true" /></a>
          <Link to="/contact" className="footer-discuss">Discuss your challenge <ArrowRight aria-hidden="true" /></Link>
        </div>
      </div>
      <div className="site-container footer-bottom">
        <span>© {new Date().getFullYear()} Taras AI. All rights reserved.</span>
        <span>Founder-led transformation · Cape Town, South Africa</span>
      </div>
    </footer>
  )
}

function SiteShell({ children, meta }) {
  const location = useLocation()
  return (
    <div className="site-shell">
      <PageMeta {...meta} path={location.pathname} />
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <SiteHeader />
      <main id="main-content">{children}</main>
      <SiteFooter />
    </div>
  )
}

function Eyebrow({ children }) {
  return <p className="eyebrow"><span className="eyebrow-mark" aria-hidden="true" />{children}</p>
}

function PageHero({ eyebrow, title, description, primaryLabel = 'Discuss Your Challenge', primaryHref = '/contact', secondaryLabel, secondaryHref, compact = false }) {
  return (
    <section className={`page-hero${compact ? ' page-hero-compact' : ''}`}>
      <div className="site-container page-hero-grid">
        <div className="page-hero-copy">
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h1>{title}</h1>
          {description && <p className="hero-description">{description}</p>}
          <div className="hero-actions">
            <Link className="button button-primary" to={primaryHref}>{primaryLabel}<ArrowRight aria-hidden="true" /></Link>
            {secondaryLabel && <Link className="button button-secondary" to={secondaryHref}>{secondaryLabel}<ArrowRight aria-hidden="true" /></Link>}
          </div>
        </div>
        {!compact && <WorkflowVisual />}
      </div>
    </section>
  )
}

function WorkflowVisual() {
  const stages = [
    ['01', 'Understand', 'The work'],
    ['02', 'Connect', 'The right signals'],
    ['03', 'Enable', 'Better decisions'],
    ['04', 'Measure', 'What changes'],
  ]
  return (
    <div className="workflow-visual" role="img" aria-label="Transformation connects business problems, data, decisions and measurable outcomes">
      <div className="workflow-topline"><span>From fragmented work</span><span className="workflow-status"><i /> To connected outcomes</span></div>
      <div className="workflow-grid">
        {stages.map(([number, title, subtitle], index) => (
          <React.Fragment key={number}>
            <div className={`workflow-node${index === stages.length - 1 ? ' workflow-node-final' : ''}`}>
              <span className="workflow-number">{number}</span>
              <strong>{title}</strong>
              <span>{subtitle}</span>
            </div>
            {index < stages.length - 1 && <ArrowRight className="workflow-arrow" aria-hidden="true" />}
          </React.Fragment>
        ))}
      </div>
      <div className="workflow-footer"><span>Business context</span><span>Technology that fits</span><span>Operational adoption</span></div>
    </div>
  )
}

function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  return (
    <div className={`section-heading align-${align}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}

function ArrowLink({ to, children, className = '' }) {
  return <Link className={`text-link ${className}`} to={to}>{children}<ArrowRight aria-hidden="true" /></Link>
}

function CTASection({ title = 'What Is the Operational Problem You Need Solved?', description = 'Describe the challenge, and we can work out whether the experience and engagement model are a fit.', label = 'Discuss Your Challenge' }) {
  return (
    <section className="cta-section">
      <div className="site-container cta-panel">
        <div><Eyebrow>Start With the Real Business Problem</Eyebrow><h2>{title}</h2><p>{description}</p></div>
        <Link to="/contact" className="button button-light">{label}<ArrowRight aria-hidden="true" /></Link>
      </div>
    </section>
  )
}

function CardLink({ to, eyebrow, title, description, index }) {
  return (
    <Link to={to} className="content-card content-card-link">
      <div className="content-card-top"><span className="card-index">{index}</span>{eyebrow && <span className="card-eyebrow">{eyebrow}</span>}<ArrowUpRight className="card-arrow" aria-hidden="true" /></div>
      <h3>{title}</h3><p>{description}</p><span className="card-read">Explore <ArrowRight aria-hidden="true" /></span>
    </Link>
  )
}

function MetricCard({ metric, label, note, featured = false }) {
  return (
    <article className={`metric-card${featured ? ' metric-card-featured' : ''}`}>
      <div className="metric-value">{metric}</div>
      <h3>{label}</h3>
      <p>{note}</p>
    </article>
  )
}

function HomePage() {
  const trustItems = ['15+ years of business and technology leadership', 'Founder and CEO experience', 'Healthcare, research, financial services and risk', 'Experience across Africa and the United States']
  const problems = [
    ['Manual, inefficient operations', 'Important work depends on spreadsheets, email, fragmented systems and repetitive administration.'],
    ['Data without better decisions', 'Organisations have valuable information but struggle to turn it into actionable intelligence.'],
    ['AI pilots that never scale', 'Promising experiments fail to reach production or become part of everyday work.'],
    ['Transformation without ownership', 'Strategy, technology and operational teams work in silos without clear end-to-end accountability.'],
  ]
  const capabilities = ['Transformation strategy and prioritisation', 'End-to-end delivery ownership', 'AI and technology implementation', 'Operational change and adoption', 'Performance measurement and accountability']
  const approach = [
    ['Understand', 'Investigate the real business problem, current workflows and operating constraints.'],
    ['Prioritise', 'Evaluate business value, feasibility, cost and implementation risk.'],
    ['Redesign', 'Simplify processes and define better ways of working.'],
    ['Implement', 'Build, integrate and validate practical technology solutions.'],
    ['Embed', 'Support teams and make adoption part of daily operations.'],
    ['Measure', 'Track efficiency, quality, adoption and operational outcomes.'],
  ]
  return (
    <>
      <PageHero
        eyebrow="Founder-Led AI & Business Transformation"
        title={<>From AI Ambition to <em>Operational Impact.</em></>}
        description="Hands-on transformation leadership for complex organisations. I help healthcare providers, research institutions, financial services companies and risk-driven enterprises turn operational challenges into measurable improvements."
        primaryLabel="Discuss Your Transformation Challenge"
        secondaryLabel="Explore Proven Results"
        secondaryHref="/case-studies"
      />
      <div className="trust-strip"><div className="site-container trust-grid">{trustItems.map((item) => <p key={item}><Check aria-hidden="true" />{item}</p>)}</div></div>

      <section className="section-block section-problem">
        <div className="site-container">
          <SectionHeading eyebrow="The Challenge" title="You Don’t Need Another AI Strategy. You Need Someone Who Can Make It Work." description="Organisations rarely struggle because they lack technology. They struggle because processes are fragmented, data is underused and promising initiatives do not become part of daily operations." />
          <div className="card-grid card-grid-four">{problems.map(([title, description], index) => <article className="problem-card" key={title}><span className="problem-index">0{index + 1}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
          <p className="section-closing">Taras AI bridges the gap between technology potential and operational value.</p>
        </div>
      </section>

      <section className="section-block section-featured">
        <div className="site-container featured-grid">
          <div className="featured-copy"><Eyebrow>Flagship Service</Eyebrow><h2>Experienced Transformation Leadership. Without the Full-Time Appointment.</h2><p>Complex transformation needs a leader who can align business priorities, technology delivery, stakeholders and operational realities — and stay accountable through implementation.</p><ArrowLink to="/services/fractional-transformation-leadership">Explore Fractional Leadership</ArrowLink></div>
          <div className="capability-panel"><span className="panel-label">Fractional AI & Business Transformation Leadership</span><ol>{capabilities.map((capability, index) => <li key={capability}><span>0{index + 1}</span>{capability}</li>)}</ol><strong>One accountable leader. The expertise you need. A clear focus on results.</strong></div>
        </div>
      </section>

      <section className="section-block section-metrics">
        <div className="site-container">
          <SectionHeading eyebrow="Previous Leadership Experience" title="Built, Led and Delivered in the Real World." description="Selected outcomes from transformation, AI, product and operational initiatives led by Taras AI’s founder in previous professional roles — not represented as Taras AI client engagements." />
          <div className="metric-grid">
            <MetricCard metric="4×" label="Improvement in client disengagement outcomes" note="In a controlled rollout, case managers spent 76% more time on high-risk than low-risk worklists; this behaviour change contributed to the outcome compared with control." featured />
            <MetricCard metric="80+" label="Healthcare facilities reached" note="AI-driven decision-support products were operationalised across facilities in a previous role." />
            <MetricCard metric="53%" label="Year-on-year portfolio growth" note="Within a US$49 million Digital Economy portfolio led at LexisNexis Risk Solutions; not attributed exclusively to AI." />
            <MetricCard metric="~55%" label="Lower software staffing costs" note="Following a software delivery operating-model redesign in a previous role." />
          </div>
          <div className="section-end-link"><ArrowLink to="/case-studies">Explore the Case Studies</ArrowLink></div>
        </div>
      </section>

      <section className="section-block section-recognition">
        <div className="site-container recognition-grid">
          <div><SectionHeading eyebrow="Research & Recognition" title="Published Research. Recognised Expertise. Real-World Impact." description="Rigorous thinking, practical implementation experience and an understanding of the environments where solutions must work." /><ArrowLink to="/publications-and-speaking">Explore Publications & Speaking</ArrowLink></div>
          <div className="recognition-cards">
            <article><span>01 / Scientific Research</span><h3>Research That Meets the Real World</h3><p>Contributing to published research on predictive AI, risk modelling, treatment continuity and operational decision support.</p><div className="journal-list">Scientific Reports <i /> PLOS Global Public Health <i /> JAIDS</div></article>
            <article><span>02 / Industry Speaking</span><h3>Practical Lessons From Implementation</h3><p>Sharing experience across AI implementation, financial technology, risk analytics and business transformation.</p><div className="journal-list">Finovate <i /> LEND360 <i /> Healthcare Innovation Summit Africa</div></article>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="site-container">
          <SectionHeading eyebrow="Industry Expertise" title="Specialist Experience Where Complexity Matters." description="AI transformation looks different in a hospital, laboratory, bank or risk enterprise. Each has distinct technical, regulatory and human constraints." />
          <div className="card-grid card-grid-two">{industries.map((industry, index) => <CardLink key={industry.slug} to={`/industries/${industry.slug}`} index={`0${index + 1}`} eyebrow="Industry" title={industry.shortTitle} description={industry.description} />)}</div>
        </div>
      </section>

      <section className="section-block case-feature-section">
        <div className="site-container case-feature">
          <div className="case-feature-copy"><Eyebrow>Previous Leadership Experience · Palindrome Data</Eyebrow><h2>When AI Changes Behaviour, Outcomes Follow.</h2><p>In a controlled rollout across 49 Nigerian clinics, case managers spent 76% more time on high-risk worklists than low-risk worklists. That behavioural change contributed to a 4× improvement in client disengagement outcomes compared with control.</p><ArrowLink to="/case-studies/healthcare-ai-adoption">Explore the Healthcare Case Study</ArrowLink></div>
          <div className="outcome-flow" role="img" aria-label="Prediction leads through prioritisation, workflow redesign and adoption to behaviour change and improved outcomes">
            {['Prediction', 'Prioritisation', 'Workflow Redesign', 'Adoption', 'Behaviour Change', 'Improved Outcomes'].map((step, index) => <div key={step} className={index === 5 ? 'outcome-step outcome-step-final' : 'outcome-step'}><span>0{index + 1}</span>{step}</div>)}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="site-container">
          <SectionHeading eyebrow="Our Approach" title="Strategy Is the Starting Point. Operational Change Is the Goal." description="A practical six-stage method keeps business needs, implementation and adoption connected." />
          <div className="process-grid">{approach.map(([title, description], index) => <article className="process-step" key={title}><span className="process-number">0{index + 1}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
          <div className="section-end-link"><ArrowLink to="/approach">Explore Our Approach</ArrowLink></div>
        </div>
      </section>

      <section className="section-block founder-section">
        <div className="site-container founder-grid">
          <div className="portrait-placeholder" role="img" aria-label="Portrait of Lucien de Voux to be added after an authentic photograph is supplied"><div className="portrait-monogram">LdV</div><span>Authentic founder portrait to be added</span></div>
          <div className="founder-copy"><Eyebrow>Founder & Principal</Eyebrow><h2>Your Transformation Partner. Not Another Layer of Consultants.</h2><h3>Lucien de Voux</h3><p className="founder-title">Founder & Principal — Taras AI</p><p>Lucien is a technology founder and business leader with more than 15 years of experience building products, leading operations and turning complex data and technology into practical business value.</p><p>His experience spans healthcare AI, regulated data, financial services, scientific research, retail intelligence and software delivery transformation. Taras AI brings that combination of business leadership, technical depth and practical implementation to organisations that need meaningful change.</p><div className="credential-pills"><span>Georgia Tech MBA</span><span>UCT Computer Science Honours</span><span>Published Research</span></div><ArrowLink to="/about">Meet Lucien</ArrowLink></div>
        </div>
      </section>

      <section className="section-block engagement-section">
        <div className="site-container">
          <SectionHeading eyebrow="Engagement Models" title="Flexible Engagements. Clear Accountability." description="The work can be scoped to a focused question or structured as ongoing leadership. Fractional transformation leadership is the flagship offer." />
          <div className="card-grid card-grid-four engagement-grid">{[
            ['01', 'Fractional Transformation Leadership', 'Ongoing leadership for complex AI, digital and operational transformation.', '/services/fractional-transformation-leadership'],
            ['02', 'Opportunity Assessment', 'A focused review of business challenges, workflows and opportunities.', '/services/ai-transformation'],
            ['03', 'Focused Implementation Pilot', 'A bounded project designed to validate a solution and demonstrate value.', '/services/intelligent-automation'],
            ['04', 'End-to-End Technology Implementation', 'Ownership of a defined initiative from discovery through adoption and measurement.', '/services/end-to-end-technology-implementation']
          ].map(([number, title, description, href], index) => <CardLink key={number} to={href} index={number} eyebrow={index === 0 ? 'Flagship' : 'Flexible Scope'} title={title} description={description} />)}</div>
        </div>
      </section>
      <CTASection title="What’s the Operational Problem You Need Solved?" description="Whether you’re trying to reduce manual work, operationalise AI, improve risk decisions or lead a complex technology initiative, the starting point is understanding the real business challenge." label="Discuss Your Challenge With Lucien" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Organization', name: 'Taras AI', url: SITE_URL, description: 'Founder-led AI and business transformation leadership for complex organisations.', founder: { '@type': 'Person', name: 'Lucien de Voux', jobTitle: 'Founder & Principal' }, areaServed: ['South Africa', 'International'] }) }} />
    </>
  )
}

function CollectionPage({ title, eyebrow, description, items, basePath, cardEyebrow }) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} description={description} compact />
      <section className="section-block collection-section"><div className="site-container"><div className="card-grid card-grid-three">{items.map((item, index) => <CardLink key={item.slug || item.title} to={`${basePath}/${item.slug}`} index={String(index + 1).padStart(2, '0')} eyebrow={cardEyebrow} title={item.shortTitle || item.title} description={item.description || item.summary} />)}</div></div></section>
      <CTASection />
    </>
  )
}

function BulletList({ items, className = '' }) {
  return <ul className={`bullet-list ${className}`}>{items.map((item) => <li key={item}><Check aria-hidden="true" /><span>{item}</span></li>)}</ul>
}

function DetailSection({ eyebrow, title, children, tone = '' }) {
  return <section className={`section-block detail-section ${tone}`}><div className="site-container detail-section-inner">{eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}<h2>{title}</h2>{children}</div></section>
}

function ServiceDetailPage({ service }) {
  const route = `/services/${service.slug}`
  return (
    <>
      <PageHero eyebrow="Service · Taras AI" title={service.title} description={service.description} secondaryLabel="View All Services" secondaryHref="/services" />
      <DetailSection eyebrow="The Opportunity" title="Start With the Real Operational Need"><p className="detail-lead">{service.intro}</p><div className="detail-callout"><span>Who This Supports</span><p>{service.target}</p></div></DetailSection>
      <DetailSection eyebrow="Typical Challenges" title="Where Progress Gets Stuck" tone="tone-soft"><BulletList items={service.challenges} /></DetailSection>
      <DetailSection eyebrow="Scope of Work" title="From Priorities to Implementation"><BulletList items={service.scope} /><p className="detail-lead detail-lead-small">Engagement scope is agreed around the organisation’s needs, delivery context and governance requirements.</p></DetailSection>
      <DetailSection eyebrow="How We Work" title="Practical Work, Clear Outputs" tone="tone-navy"><div className="deliverable-grid">{service.deliverables.map((item, index) => <div key={item}><span>0{index + 1}</span><p>{item}</p></div>)}</div></DetailSection>
      <DetailSection eyebrow="Relevant Experience" title="Experience Grounded in Delivery"><p className="detail-lead">{service.experience}</p><div className="use-case-grid">{service.useCases.map((item) => <div key={item} className="use-case-item"><Check aria-hidden="true" />{item}</div>)}</div></DetailSection>
      <DetailSection eyebrow="Frequently Asked Questions" title="A Few Useful Questions" tone="tone-soft"><div className="faq-list">{service.faqs.map(([question, answer]) => <details key={question}><summary>{question}<ChevronDown aria-hidden="true" /></summary><p>{answer}</p></details>)}</div></DetailSection>
      <CTASection title={`Explore ${service.shortTitle} for Your Organisation`} description="A first conversation can clarify the challenge, the right level of support and a sensible next step." label="Discuss This Service" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Service', name: service.title, description: service.description, provider: { '@type': 'Organization', name: 'Taras AI', url: SITE_URL }, url: `${SITE_URL}${route}` }) }} />
    </>
  )
}

function IndustryDetailPage({ industry }) {
  return (
    <>
      <PageHero eyebrow="Industry Experience" title={industry.description} description={industry.intro} secondaryLabel="Explore All Industries" secondaryHref="/industries" />
      <DetailSection eyebrow="Where We Can Help" title="Operational Priorities"><BulletList items={industry.needs} /></DetailSection>
      <DetailSection eyebrow="Relevant Perspective" title="Experience With the Context" tone="tone-soft"><p className="detail-lead">{industry.perspective}</p></DetailSection>
      <section className="section-block related-section"><div className="site-container"><SectionHeading eyebrow="Related Work" title="Continue Exploring" /><div className="related-links"><Link to={industry.related} className="related-card"><span>Relevant Evidence</span><strong>{industry.related.includes('case-studies') ? 'View Related Case Study' : 'Explore Publications & Speaking'}</strong><ArrowRight aria-hidden="true" /></Link><Link to={industry.service} className="related-card"><span>Relevant Service</span><strong>{services.find((item) => `/services/${item.slug}` === industry.service)?.shortTitle}</strong><ArrowRight aria-hidden="true" /></Link></div></div></section>
      <CTASection title={`Discuss a ${industry.shortTitle} Challenge`} description="Share the operational problem you are trying to solve. We can explore the context and determine an appropriate next step." />
    </>
  )
}

function CaseStudyDetailPage({ study }) {
  return (
    <>
      <PageHero eyebrow={`Previous Leadership Experience · ${study.organisation}`} title={study.title} description={study.summary} secondaryLabel="All Case Studies" secondaryHref="/case-studies" />
      <div className="case-disclaimer"><div className="site-container"><strong>Context matters</strong><p>{study.responsibility}</p></div></div>
      <DetailSection eyebrow="01 / Challenge" title="The Problem to Solve"><p className="detail-lead">{study.challenge}</p></DetailSection>
      <DetailSection eyebrow="02 / Context" title="The Operating Environment" tone="tone-soft"><p className="detail-lead">{study.context}</p></DetailSection>
      <DetailSection eyebrow="03 / Approach & Implementation" title="Connecting Analysis to the Work"><BulletList items={study.approach} /></DetailSection>
      <DetailSection eyebrow="04 / Outcomes" title="What the Evidence Shows" tone="tone-navy"><BulletList items={study.outcomes} className="bullet-list-light" /></DetailSection>
      <DetailSection eyebrow="05 / Key Lesson" title={study.lesson}><div className="lesson-quote">“{study.lesson}”</div></DetailSection>
      <section className="section-block related-section"><div className="site-container related-links"><Link className="related-card" to={study.service}><span>Related Service</span><strong>{services.find((item) => `/services/${item.slug}` === study.service)?.shortTitle}</strong><ArrowRight aria-hidden="true" /></Link><Link className="related-card" to="/contact"><span>Next Step</span><strong>Discuss Your Transformation Challenge</strong><ArrowRight aria-hidden="true" /></Link></div></section>
    </>
  )
}

function ApproachPage() {
  const stages = [
    ['Understand', 'Investigate the real business problem, current workflows, data and operating constraints.'],
    ['Prioritise', 'Evaluate business value, feasibility, cost, risk and organisational capacity.'],
    ['Redesign', 'Simplify processes and define clearer ownership and better ways of working.'],
    ['Implement', 'Build, integrate and validate technology that fits the actual workflow.'],
    ['Embed', 'Support teams, decisions and habits so the change becomes part of daily operations.'],
    ['Measure', 'Track efficiency, quality, adoption and operational outcomes; learn and improve.'],
  ]
  const nudge = [
    ['Narrow', 'Identify the specific behaviour to change.'],
    ['Understand', 'Study users, operating conditions and existing workflows.'],
    ['Discover', 'Identify barriers, incentives and facilitators.'],
    ['Generate', 'Design interventions and better workflows.'],
    ['Evaluate', 'Measure changes in behaviour and outcomes.'],
  ]
  return (
    <>
      <PageHero eyebrow="Our Approach" title="Transformation Doesn’t End at Go-Live." description="Practical transformation connects a clear business need to implementation, adoption and measurable operational change." />
      <section className="section-block"><div className="site-container"><SectionHeading eyebrow="Six Stages" title="A Connected Path From Problem to Progress" description="The sequence is structured, but the work remains grounded in the organisation’s context and evidence." /><div className="approach-timeline">{stages.map(([title, description], index) => <article className="approach-stage" key={title}><span className="approach-stage-number">0{index + 1}</span><div><h3>{title}</h3><p>{description}</p></div></article>)}</div></div></section>
      <section className="section-block nudge-section"><div className="site-container nudge-grid"><div><Eyebrow>Human-Centred Implementation</Eyebrow><h2>The NUDGE Framework</h2><p>Behavioural design helps connect a technical recommendation to the choices people make during everyday work. This framework informed healthcare AI adoption work in Lucien’s previous professional role.</p></div><div className="nudge-list">{nudge.map(([title, description], index) => <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{description}</p></div></article>)}</div></div></section>
      <DetailSection eyebrow="Pragmatism Is Part of the Method" title="When AI Isn’t the Answer" tone="tone-soft"><p className="detail-lead">The right solution may be process simplification, conventional automation, better system integration or a clearer operating model. Taras AI will recommend the approach that best fits the problem rather than adding AI for its own sake.</p><Link className="button button-secondary" to="/services/business-process-improvement">Explore Process Improvement <ArrowRight aria-hidden="true" /></Link></DetailSection>
      <CTASection title="Make the Next Change Count" description="Start with the business problem, the people involved and the result that needs to change." />
    </>
  )
}

function AboutPage() {
  const chapters = [
    ['01', 'Business & Technology Foundations', 'Experience across banking software, debt origination, pricing systems, enterprise technology, retail software and commercial analytics.'],
    ['02', 'Financial Services & Regulated Data', 'Leadership at LexisNexis Risk Solutions across digital economy products, fintech, identity and fraud, credit and risk, regulated consumer data and enterprise requirements.'],
    ['03', 'Building & Operationalising AI', 'As co-founder and CEO of Palindrome Data, Lucien led strategy, product development, AI and machine learning, cloud infrastructure, governance, commercialisation, fundraising, implementation and change management. The company raised capital from a Kenyan impact investor.'],
    ['04', 'Why Taras AI', 'Taras AI brings business leadership, technical depth and practical implementation together in an independent practice focused on direct involvement, ownership and measurable operational change.'],
  ]
  return (
    <>
      <PageHero eyebrow="About Taras AI" title="Built in the Real World. Focused on What Works." description="A founder-led transformation practice for organisations that need experienced leadership close to the work — from the first business question through implementation and adoption." />
      <section className="section-block about-founder"><div className="site-container founder-grid"><div className="portrait-placeholder" role="img" aria-label="Portrait of Lucien de Voux to be added after an authentic photograph is supplied"><div className="portrait-monogram">LdV</div><span>Authentic founder portrait to be added</span></div><div className="founder-copy"><Eyebrow>Founder & Principal</Eyebrow><h2>Lucien de Voux</h2><p className="founder-title">Technology Founder · Business Leader · AI Transformation Practitioner</p><p>Lucien has more than 15 years of experience across financial services, healthcare, research, risk management, retail and enterprise technology. His work brings together executive leadership, technical understanding and the practical discipline of implementation.</p><p>He founded Taras AI to help organisations make transformation work: identify the real problem, redesign the process, implement the right technology, support adoption and measure results.</p><a className="text-link" href="https://www.linkedin.com/in/ldevoux/" target="_blank" rel="noreferrer">Connect on LinkedIn <ArrowUpRight aria-hidden="true" /></a></div></div></section>
      <section className="section-block tone-soft"><div className="site-container"><SectionHeading eyebrow="Career Chapters" title="Experience Across Business, Data and Delivery" /><div className="career-list">{chapters.map(([number, title, description]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{description}</p></div></article>)}</div></div></section>
      <section className="section-block"><div className="site-container credentials-grid"><div><SectionHeading eyebrow="Education" title="Technical Depth. Commercial Perspective." /><div className="credential-list"><article><span>Georgia Institute of Technology · Scheller College of Business</span><h3>MBA, Management of Technology</h3><p>2014 · Georgia Tech TI:GER programme in Technology Innovation: Generating Economic Results.</p></article><article><span>University of Cape Town</span><h3>BSc Mathematics & Computer Science; Honours in Computer Science, cum laude</h3></article></div></div><div><SectionHeading eyebrow="Professional Credential" title="Verified Qualifications" /><div className="credential-list"><article><span>Microsoft</span><h3>TS: .NET Framework — Application Development Foundation</h3><p>2009</p></article><article><span>Research & Speaking</span><h3>Published research and industry presentations</h3><p>Details and sources are available in the publications and speaking library.</p><Link to="/publications-and-speaking" className="text-link">View the library <ArrowRight aria-hidden="true" /></Link></article></div></div></div></section>
      <CTASection title="Work Directly With Experienced Leadership" description="Discuss the challenge, operating context and kind of support your organisation needs." label="Work With Lucien" />
    </>
  )
}

function PublicationsPage() {
  return (
    <>
      <PageHero eyebrow="Publications & Speaking" title="Research-Informed. Field-Tested. Operationally Proven." description="Scientific research, industry presentations and professional commentary exploring how AI and data can improve decisions, operations and real-world outcomes." compact />
      <section className="section-block"><div className="site-container"><SectionHeading eyebrow="Peer-Reviewed Research & Preprints" title="Research on Predictive AI and Continuity of Care" description="A selected catalogue of research titles from the public Aga AI publications page. Preprints are identified separately from peer-reviewed work." /><div className="publication-list">{publications.map((publication) => <article className="publication-item" key={publication.title}><div className="publication-meta"><span>{publication.year}</span><span>{publication.type}</span></div><div><h3>{publication.title}</h3><p>{publication.journal} · Research on applying predictive modelling to HIV treatment continuity and operational decision support.</p><a href="https://agabuildai.com/publications" target="_blank" rel="noreferrer" className="text-link">View publication catalogue <ArrowUpRight aria-hidden="true" /></a></div></article>)}</div><p className="review-note">Bibliographic titles, journal names and years are taken from the public catalogue. Confirm full author lists, publication dates, DOI details and publisher links against the original records before final publication.</p></div></section>
      <section className="section-block tone-soft"><div className="site-container"><SectionHeading eyebrow="Conference Speaking" title="Sharing Experience Across Industries" description="Appearances are listed without unverified dates or speaker-role claims. Source links are included where supplied." /><div className="card-grid card-grid-three">{speaking.map((event, index) => <article className="content-card" key={event.name}><div className="content-card-top"><span className="card-index">{String(index + 1).padStart(2, '0')}</span><span className="card-eyebrow">Speaking</span></div><h3>{event.name}</h3><p>{event.context}</p>{event.href && <a className="text-link" href={event.href} target="_blank" rel="noreferrer">View source <ArrowUpRight aria-hidden="true" /></a>}</article>)}</div></div></section>
      <section className="section-block"><div className="site-container"><SectionHeading eyebrow="Media & Commentary" title="Professional Perspectives" /><div className="publication-list">{mediaMentions.map((item) => <article className="publication-item media-item" key={item.title}><div className="publication-meta"><span>{item.publisher}</span></div><div><h3>{item.title}</h3><a href={item.href} className="text-link" target="_blank" rel="noreferrer">Read the original <ArrowUpRight aria-hidden="true" /></a></div></article>)}</div></div></section>
      <CTASection title="Explore the Thinking Behind the Work" description="For practical perspectives on implementation, adoption and operational change, visit the Taras AI insights library." label="Explore Insights" />
    </>
  )
}

function InsightsPage() {
  return (
    <>
      <PageHero eyebrow="Insights · Taras AI" title="Practical Thinking for Real-World Transformation." description="Original articles on AI implementation, operational improvement, adoption and accountable decision-making. These are new Taras AI website articles, distinct from historical research publications." compact />
      <section className="section-block"><div className="site-container"><div className="card-grid card-grid-three">{insights.map((article, index) => <CardLink key={article.slug} to={`/insights/${article.slug}`} index={String(index + 1).padStart(2, '0')} eyebrow={article.category} title={article.title} description={article.summary} />)}</div></div></section>
      <CTASection />
    </>
  )
}

function InsightArticlePage({ article }) {
  return (
    <>
      <PageHero eyebrow={`Taras AI Insight · ${article.category}`} title={article.title} description={article.lead} compact />
      <article className="article-body"><div className="article-note">Original editorial content for Taras AI. This article is not a historical academic publication.</div>{article.sections.map(([heading, body], index) => <section key={heading}><span className="article-section-number">0{index + 1}</span><h2>{heading}</h2><p>{body}</p></section>)}<aside className="article-related"><span>Related Service</span><Link to={article.service}>{services.find((item) => `/services/${item.slug}` === article.service)?.shortTitle}<ArrowRight aria-hidden="true" /></Link></aside><Link to="/insights" className="text-link">Back to all insights <ArrowRight aria-hidden="true" /></Link></article>
      <CTASection title="Put the Thinking Into Practice" description="Talk through an operational challenge and identify a sensible next step." />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: article.title, description: article.summary, author: { '@type': 'Organization', name: 'Taras AI' }, publisher: { '@type': 'Organization', name: 'Taras AI', url: SITE_URL }, mainEntityOfPage: `${SITE_URL}/insights/${article.slug}` }) }} />
    </>
  )
}

function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', company: '', role: '', industry: '', service: '', startDate: '', message: '', consent: false, website: '' })
  const [status, setStatus] = useState({ state: 'idle', message: '' })
  const [submitting, setSubmitting] = useState(false)
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target
    setForm((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }))
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    if (form.website) return
    setSubmitting(true)
    setStatus({ state: 'idle', message: '' })
    const message = [
      `Role: ${form.role || 'Not provided'}`,
      `Industry: ${form.industry || 'Not provided'}`,
      `Support sought: ${form.service || 'Not sure yet'}`,
      `Preferred start: ${form.startDate || 'Not specified'}`,
      '',
      'Challenge:',
      form.message.trim(),
    ].join('\n')
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: form.name.trim(), email: form.email.trim(), company: form.company.trim(), message, consent: form.consent, website: form.website }),
      })
      const result = await response.json().catch(() => null)
      if (!response.ok || result?.ok !== true) throw new Error(result?.error || 'The enquiry could not be sent. Please try again or email Lucien directly.')
      setForm({ name: '', email: '', company: '', role: '', industry: '', service: '', startDate: '', message: '', consent: false, website: '' })
      setStatus({ state: 'success', message: 'Thank you. Your enquiry has been sent, and Lucien will be in touch.' })
    } catch (error) {
      setStatus({ state: 'error', message: error.message || 'Something went wrong. Please email Lucien directly.' })
    } finally {
      setSubmitting(false)
    }
  }
  return (
    <>
      <PageHero eyebrow="Contact Taras AI" title="Tell Me What You’re Trying to Change." description="Describe your operational challenge, technology opportunity or transformation initiative. I’ll help determine whether my experience is a fit and what a sensible next step could look like." compact />
      <section className="section-block contact-section"><div className="site-container contact-grid">
        <div className="contact-aside"><Eyebrow>A Direct Conversation</Eyebrow><h2>Start With the Challenge.</h2><p>A first discussion is a chance to understand the context, clarify the desired outcome and consider whether a focused assessment or ongoing leadership makes sense.</p><div className="contact-details"><a href="mailto:lucien.devoux@gmail.com"><span>Email</span>lucien.devoux@gmail.com<ArrowUpRight aria-hidden="true" /></a><a href="tel:+27825016568"><span>Phone</span>+27 82 501 6568<ArrowUpRight aria-hidden="true" /></a><div><span>Based in</span>Cape Town, South Africa</div><a href="https://www.linkedin.com/in/ldevoux/" target="_blank" rel="noreferrer"><span>LinkedIn</span>Lucien de Voux<ArrowUpRight aria-hidden="true" /></a></div><a className="text-link booking-link" href={BOOKING_URL} target="_blank" rel="noreferrer">Book a discovery conversation <ArrowUpRight aria-hidden="true" /></a></div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-heading"><span>Enquiry Form</span><p>Fields marked with <b>*</b> are required.</p></div>
          <div className="form-grid">
            <label>Full Name *<input name="name" value={form.name} onChange={handleChange} required maxLength={120} autoComplete="name" /></label>
            <label>Work Email *<input type="email" name="email" value={form.email} onChange={handleChange} required maxLength={254} autoComplete="email" /></label>
            <label>Organisation<input name="company" value={form.company} onChange={handleChange} maxLength={160} autoComplete="organization" /></label>
            <label>Role<input name="role" value={form.role} onChange={handleChange} maxLength={120} autoComplete="organization-title" /></label>
            <label>Industry<select name="industry" value={form.industry} onChange={handleChange}><option value="">Select an industry</option><option>Healthcare</option><option>Research / Laboratory</option><option>Financial Services</option><option>Risk / Data-Intensive Enterprise</option><option>Retail / E-commerce</option><option>Other</option></select></label>
            <label>Type of Support<select name="service" value={form.service} onChange={handleChange}><option value="">Select a service</option><option>Fractional Transformation Leadership</option><option>AI Transformation</option><option>Business Process Improvement</option><option>Intelligent Automation</option><option>Data & Decision Intelligence</option><option>Technology Implementation</option><option>Not Sure Yet</option></select></label>
            <label className="form-full">Description of Challenge *<textarea name="message" value={form.message} onChange={handleChange} required minLength={10} maxLength={5000} rows={5} placeholder="What is happening today, and what would you like to change?" /></label>
            <label>Preferred Start Date <input type="date" name="startDate" value={form.startDate} onChange={handleChange} /></label>
            <label className="honeypot" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={handleChange} /></label>
            <label className="consent-label form-full"><input type="checkbox" name="consent" checked={form.consent} onChange={handleChange} required /><span>I agree that Taras AI may use the information I provide to respond to this enquiry. See the <Link to="/privacy">Privacy Policy</Link>.</span></label>
          </div>
          <button className="button button-primary" type="submit" disabled={submitting}>{submitting ? 'Sending…' : 'Send Enquiry'}<ArrowRight aria-hidden="true" /></button>
          <p className="form-status" aria-live="polite" data-state={status.state}>{status.message}</p>
          <p className="form-privacy-note">Please do not include sensitive personal, health or financial information in this form.</p>
        </form>
      </div></section>
    </>
  )
}

function PrivacyPage() {
  const policySections = [
    ['Information You Provide', 'If you send an enquiry, we receive the details you submit, such as your name, work email, organisation, role, selected service and message. Please do not send sensitive personal, health or financial information through the enquiry form.'],
    ['How Information Is Used', 'We use enquiry information to respond to your request, assess whether we may be able to help, maintain business communications and meet legal obligations. We do not use enquiry details for unrelated marketing without an appropriate basis.'],
    ['Service Providers', 'The website is hosted on Vercel. Enquiry email delivery is handled by Resend. These providers process information as needed to operate the website and deliver messages, subject to their own terms and privacy documentation.'],
    ['Cookies & Analytics', 'This website does not intentionally use advertising cookies. If optional analytics are added in future, this policy should be updated and any required consent controls should be provided before they are enabled.'],
    ['Retention & Security', 'Enquiry messages are retained only as needed for the business conversation, record-keeping and applicable legal requirements. Reasonable safeguards are used, but no internet transmission or storage system can be guaranteed completely secure.'],
    ['Your Rights', 'Depending on the applicable law, you may request access to or correction or deletion of personal information, or raise an objection to its processing. South African data subjects may contact the Information Regulator where appropriate.'],
    ['International Processing', 'Website hosting and email delivery may involve service providers or infrastructure in other countries. Appropriate safeguards should be considered where required by applicable data protection law.'],
    ['Contact', 'For privacy questions or data requests, contact Lucien de Voux at lucien.devoux@gmail.com. Taras AI is based in Cape Town, South Africa.'],
  ]
  return (
    <>
      <PageHero eyebrow="Privacy & Data Protection" title="Privacy Policy" description="How Taras AI handles information submitted through this website." compact />
      <section className="section-block privacy-section"><div className="site-container privacy-content"><p className="policy-updated">Last updated: 22 November 2026</p><p className="detail-lead">This policy applies to the Taras AI website and enquiry form. It describes the information collected through this site and how it is used. It is not a substitute for engagement-specific privacy terms where services involve additional data processing.</p>{policySections.map(([title, body], index) => <section key={title}><span>0{index + 1}</span><div><h2>{title}</h2><p>{body}</p></div></section>)}<p className="review-note">This website privacy notice should be reviewed against Taras AI’s final legal entity details, service-provider terms and data-handling practices before production publication.</p><Link className="text-link" to="/contact">Contact Taras AI <ArrowRight aria-hidden="true" /></Link></div></section>
    </>
  )
}

function NotFoundPage() {
  return <section className="section-block not-found"><div className="site-container"><Eyebrow>404 · Page Not Found</Eyebrow><h1>This Page Isn’t Here.</h1><p>The address may have changed or the page may have moved.</p><Link to="/" className="button button-primary">Return to Home <ArrowRight aria-hidden="true" /></Link></div></section>
}

function getPage(location) {
  const path = location.pathname.replace(/\/$/, '') || '/'
  if (path === '/') return { title: 'From AI Ambition to Operational Impact', description: 'Hands-on AI and business transformation leadership for complex organisations.', body: <HomePage /> }
  if (path === '/services') return { title: 'Services', description: 'Fractional transformation leadership, AI operationalisation, process improvement, workflow automation and decision intelligence.', body: <CollectionPage title="Leadership and Implementation That Connects to Outcomes." eyebrow="Services" description="Practical support for organisations that need to improve operations, make better use of data or deliver complex change." items={services} basePath="/services" cardEyebrow="Service" /> }
  if (path.startsWith('/services/')) {
    const service = services.find((item) => path === `/services/${item.slug}`)
    if (service) return { title: service.shortTitle, description: service.description, body: <ServiceDetailPage service={service} />, type: 'service' }
  }
  if (path === '/industries') return { title: 'Industries', description: 'Specialist transformation experience across healthcare, research, financial services and risk-intensive organisations.', body: <CollectionPage title="Specialist Experience Where Complexity Matters." eyebrow="Industries" description="Each sector has its own operational constraints, data context and human realities. Explore the environments where Taras AI’s experience is most relevant." items={industries} basePath="/industries" cardEyebrow="Industry" /> }
  if (path.startsWith('/industries/')) {
    const industry = industries.find((item) => path === `/industries/${item.slug}`)
    if (industry) return { title: industry.shortTitle, description: industry.description, body: <IndustryDetailPage industry={industry} /> }
  }
  if (path === '/approach') return { title: 'Our Approach', description: 'A six-stage approach to understand, prioritise, redesign, implement, embed and measure transformation.', body: <ApproachPage /> }
  if (path === '/case-studies') return { title: 'Case Studies', description: 'Selected outcomes from previous professional roles, with context and evidence clearly distinguished from Taras AI engagements.', body: <CollectionPage title="What Changes When Transformation Reaches the Work." eyebrow="Selected Experience" description="These case studies describe outcomes from Lucien’s previous professional roles. They are not presented as completed Taras AI client engagements." items={caseStudies} basePath="/case-studies" cardEyebrow="Previous Leadership Experience" /> }
  if (path.startsWith('/case-studies/')) {
    const study = caseStudies.find((item) => path === `/case-studies/${item.slug}`)
    if (study) return { title: study.title, description: study.summary, body: <CaseStudyDetailPage study={study} />, type: 'article' }
  }
  if (path === '/publications-and-speaking') return { title: 'Publications & Speaking', description: 'Research, presentations and professional commentary on applied AI, healthcare and transformation.', body: <PublicationsPage /> }
  if (path === '/about') return { title: 'About Lucien de Voux', description: 'Meet Lucien de Voux, founder and principal of Taras AI, with more than 15 years of business and technology leadership experience.', body: <AboutPage /> }
  if (path === '/insights') return { title: 'Insights', description: 'Original perspectives on AI implementation, operations, adoption and accountable transformation.', body: <InsightsPage /> }
  if (path.startsWith('/insights/')) {
    const article = insights.find((item) => path === `/insights/${item.slug}`)
    if (article) return { title: article.title, description: article.summary, body: <InsightArticlePage article={article} />, type: 'article' }
  }
  if (path === '/contact') return { title: 'Contact', description: 'Tell Taras AI about your operational challenge, technology opportunity or transformation initiative.', body: <ContactPage /> }
  if (path === '/privacy') return { title: 'Privacy Policy', description: 'How Taras AI handles information submitted through this website.', body: <PrivacyPage /> }
  return { title: 'Page Not Found', description: 'The requested page could not be found.', body: <NotFoundPage /> }
}

export default function CompanySite() {
  const location = useLocation()
  const page = useMemo(() => getPage(location), [location.pathname])
  return <SiteShell meta={{ title: page.title, description: page.description, type: page.type || 'website' }}>{page.body}</SiteShell>
}
