import { portfolioData as data } from './portfolio-data';
import { Navigation } from './components/navigation';

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d={diagonal ? 'M5 19 19 5M8 5h11v11' : 'M4 12h15m-6-6 6 6-6 6'} /></svg>;
}

function SectionIntro({ id, kicker, title, note }: { id: string; kicker: string; title: string; note?: string }) {
  return <header className="section-intro"><p className="kicker">{kicker}</p><div className="section-intro-line"><h2 id={id}>{title}</h2>{note && <p>{note}</p>}</div></header>;
}

function Tags({ items }: { items: readonly string[] }) {
  return <ul className="tags">{items.map(item => <li key={item}>{item}</li>)}</ul>;
}

function ResumeLink({ className = '' }: { className?: string }) {
  return <a className={className} href={data.profile.resumePath} download="Fathan-Imaad-Resume.pdf">Resume <Arrow diagonal /></a>;
}

export default function Home() {
  const { profile } = data;
  const personJsonLd = {
    '@context': 'https://schema.org', '@type': 'Person', name: profile.name,
    email: `mailto:${profile.email}`,
    affiliation: { '@type': 'CollegeOrUniversity', name: data.education.institution },
    sameAs: [profile.linkedin],
  };

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, '\\u003c') }} />
    <a className="skip-link" href="#main-content">Skip to content</a>
    <header className="mobile-header"><a className="mobile-brand" href="#overview" aria-label="Fathan Imaad — top of page">Fathan Imaad</a><Navigation mobile /></header>
    <div className="site-frame">
      <aside className="identity-pane" aria-label="Profile and navigation">
        <div className="identity-top">
          <a className="identity-brand" href="#overview" aria-label="Fathan Imaad — top of page">PERSONAL PORTFOLIO / HR &amp; PEOPLE OPERATIONS</a>
          <div className="identity-headline"><p className="rail-label">Professional profile</p><p>Fathan Imaad</p><span>Psychology graduate with experience in volunteer community operations, collaboration management, and academic research.</span></div>
          <Navigation />
        </div>
        <div className="identity-bottom"><p>Seeking early-career roles across Learning & Development, People Operations, and HR administration.</p><a href={`mailto:${profile.email}`}>Let&apos;s connect <Arrow diagonal /></a><span>Tangerang Regency, Banten, Indonesia</span></div>
      </aside>

      <main id="main-content" className="content-pane">
        <section className="overview" id="overview" aria-labelledby="hero-title">
          <div className="topline"><span>FATHAN IMAAD / PROFESSIONAL PORTFOLIO</span><span>2026</span></div>
          <div className="hero-grid">
            <div className="hero-content"><p className="kicker"><span className="kicker-dash" /> Psychology · People · Operations</p><h1 id="hero-title">The people<br />behind <em>the work.</em></h1><p className="hero-lead">I&apos;m Fathan, a Psychology graduate interested in the systems and conversations that help people work together.</p><p className="hero-support">My experience spans volunteer community operations, external collaboration, academic research, and coordinating small teams. I&apos;m now looking to bring that foundation into Learning & Development, People Operations, and HR.</p><div className="hero-actions"><a className="button button-primary" href="#experience">Explore experience <Arrow /></a><ResumeLink className="button button-outline" /></div></div>
            <aside className="hero-side" aria-label="Current profile"><div className="hero-side-top"><span>AT A GLANCE</span><svg className="side-spark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M12 1v22M1 12h22M4.2 4.2l15.6 15.6M19.8 4.2 4.2 19.8" /></svg></div><div className="hero-side-center"><p>Psychology informs<br /><em>how I listen.</em><br />Structure shapes<br /><em>how I work.</em></p></div><div className="hero-side-bottom"><span>Currently</span><strong>Available for full-time roles</strong><small>Bachelor of Psychology · Universitas Gunadarma</small></div></aside>
          </div>
          <div className="metrics" aria-label="Experience highlights">{data.hero.highlights.map(item => <div className="metric" key={item.value}><strong>{item.value}</strong><p>{item.label}<br />{item.note}</p></div>)}</div>
          <p className="metric-note">The 100+ figure covers collaboration opportunities across both Chillchat Holdings Pte. Ltd. and Stress Capital; it does not represent completed partnerships.</p>
        </section>

        <section className="portfolio-section experience-section" id="experience" aria-labelledby="experience-title"><SectionIntro id="experience-title" kicker="THE WORK / VOLUNTEER" title="Experience, in practice." note="Communication, coordination, and sound judgment in international online communities." /><div className="experience-list">
          {data.volunteerExperience.map((job, index) => <article className="experience-entry" key={`${job.organization}-${job.role}`}><div className="experience-date"><span>{String(index + 1).padStart(2, '0')}</span><span>{job.period}</span></div><div className="experience-content"><div className="experience-title"><div><p>{job.organization} <span>/ {job.type}</span></p><h3>{job.role}</h3></div></div><p className="entry-highlight">{index === 0 ? 'Researching partners, weighing public risk signals, and coordinating external opportunities.' : index === 1 ? 'Connecting outside projects with the community, from first outreach through participant follow-up.' : 'Helping an international community communicate clearly, resolve issues, and stay constructive.'}</p><ul className="entry-points">{job.bullets.slice(0, 3).map(bullet => <li key={bullet}>{bullet}</li>)}</ul><details className="entry-more"><summary>Full role details <span aria-hidden="true">+</span></summary><ul>{job.bullets.slice(3).map(bullet => <li key={bullet}>{bullet}</li>)}</ul></details></div></article>)}
        </div><div className="case-notes"><div className="case-heading"><p className="kicker">SITUATIONS &amp; JUDGMENT</p><h3>How I approached<br /><em>the difficult parts.</em></h3><span>Selected examples from volunteer work, described without private records.</span></div><article className="case-note"><span>Community concerns</span><h4>Making space for criticism without letting conflict escalate.</h4><p>During periods of member frustration, I allowed constructive disagreement while setting boundaries around personal conflict. Questions outside my authority were escalated to the appropriate team.</p></article><article className="case-note"><span>Partner screening</span><h4>Checking public signals before moving an opportunity forward.</h4><p>I reviewed publicly available activity, team background, and engagement quality for credibility concerns, then shared relevant findings before a decision was made. This was practical screening, not formal due diligence.</p></article></div>
        </section>

        <section className="portfolio-section academic-section" id="academic" aria-labelledby="academic-title"><SectionIntro id="academic-title" kicker="THE FOUNDATION / ACADEMIC" title="Research & coursework." note="One applied job-analysis project and two separate research courses, not professional HR employment." /><div className="academic-grid">{data.academicProjects.map((project, index) => <article key={project.title} className={`academic-item academic-item-${index}`}><span className="academic-index">{project.kind.toUpperCase()} / {project.index}</span><h3>{project.title}</h3><p>{project.summary}</p><div className="academic-bottom"><Tags items={project.areas.slice(0, 3)} />{project.bullets.length > 0 && <details><summary>Read {project.kind === 'Academic project' ? 'project' : 'course'} scope <span aria-hidden="true">+</span></summary><ul>{project.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul></details>}</div></article>)}</div><div className="research-strip"><div className="research-count"><strong>5–7 </strong><span>students</span></div><div className="research-copy"><p className="kicker">TEAM COORDINATION</p><h3>Keeping academic projects organized</h3><p>Across several Psychology and research courses, I regularly coordinated student teams: organizing responsibilities, tracking progress, consolidating contributions, and reviewing reports before deadlines.</p></div></div></section>

        <section className="portfolio-section skills-section" id="skills" aria-labelledby="skills-title"><SectionIntro id="skills-title" kicker="WHAT I BRING / CAPABILITIES" title="Skills & tools." note="Foundations from academic courses, HR training, and volunteer work—not a claim of formal HR employment." /><div className="skill-board">{data.skillCategories.map((group, index) => <div className="skill-row" key={group.category}><div className="skill-row-label"><span>{String(index + 1).padStart(2, '0')}</span><h3>{group.category}</h3></div><Tags items={group.items} /></div>)}</div><div className="skills-foot"><div><p className="kicker">TOOL SPOTLIGHT</p><h3>Microsoft Excel</h3><p>Used to organize and process research data in academic work.</p><Tags items={data.excelSkills} /></div><div><p className="kicker">LANGUAGES</p>{data.languages.map(language => <div className="language-item" key={language.language}><h3>{language.language}</h3><span>{language.level}</span><p>{language.context}</p></div>)}</div></div></section>

        <section className="portfolio-section background-section" id="background" aria-labelledby="background-title"><SectionIntro id="background-title" kicker="EDUCATION / NEXT STEPS" title="Where I'm headed." note="An academic background in Psychology and an interest in people-focused, process-oriented work." /><div className="background-main"><div className="degree-card"><span className="degree-kicker">UNIVERSITAS GUNADARMA</span><h3>Bachelor of<br /><em>Psychology.</em></h3><p>Completed Bachelor of Psychology curriculum with a focus on people, research, and organizational processes.</p><dl><div><dt>Period</dt><dd>{data.education.period}</dd></div><div><dt>Expected graduation</dt><dd>{data.education.expectedGraduation}</dd></div><div><dt>GPA</dt><dd>{data.education.gpa}</dd></div></dl></div><div className="direction-card"><p className="kicker">PROFESSIONAL INTERESTS</p><p className="direction-lead">A place where <em>people, research,</em> and careful coordination meet.</p><p>I&apos;m seeking entry-level opportunities across Learning & Development, HR, people operations, and research. These are directions I want to develop, not areas in which I claim established expertise.</p><Tags items={data.areasOfInterest.slice(0, 6)} /></div></div><div className="training-block"><h3>Relevant training <span>Universitas Gunadarma</span></h3><ol>{data.training.map(item => <li key={item.title}><span>{item.year}</span><span>{item.title}</span></li>)}</ol></div><p className="evidence-note">Volunteer roles were conducted primarily through online communities and private communications; original conversations and internal material are not published. Academic projects are presented as coursework, not employment.</p></section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title"><div className="contact-top"><p className="kicker">START A CONVERSATION</p><span>FATHAN IMAAD / 2026</span></div><h2 id="contact-title">Let&apos;s make<br /><em>good work happen.</em></h2><p>I&apos;m interested in opportunities across Learning & Development, People Operations, and Human Resources, as well as roles where research, coordination, and clear communication make a difference.</p><div className="contact-links"><a href={`mailto:${profile.email}`}>Email me <Arrow diagonal /></a><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <Arrow diagonal /></a><ResumeLink /></div><div className="contact-bottom"><span>{profile.email}</span><a href="#overview">Back to top <Arrow /></a></div></section>
        <footer className="site-footer"><span>© 2026 Fathan Imaad</span><span>Built around real experience.</span></footer>
      </main>
    </div>
  </>;
}
