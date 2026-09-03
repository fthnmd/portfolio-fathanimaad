import { portfolioData } from './portfolio-data';

function ResumeLink({ className = '' }: { className?: string }) {
  return (
    <a className={className} href={portfolioData.profile.resumePath} target="_blank" rel="noreferrer">
      View Resume
      <span aria-hidden="true">↗</span>
    </a>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <header className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <div className="section-heading-row">
        <h2>{title}</h2>
        {description ? <p>{description}</p> : null}
      </div>
    </header>
  );
}

function TagList({ items }: { items: readonly string[] }) {
  return (
    <ul className="tag-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function Home() {
  const { profile } = portfolioData;
  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    email: `mailto:${profile.email}`,
    jobTitle: 'Final-year Psychology student',
    affiliation: {
      '@type': 'CollegeOrUniversity',
      name: portfolioData.education.institution,
    },
    sameAs: [profile.linkedin],
  };

  return (
    <div className="site-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <div className="nav-shell">
          <a className="wordmark" href="#top" aria-label={`${profile.name}, home`}>
            <span className="wordmark-copy">
              {profile.name}
              <small>Professional profile</small>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {portfolioData.navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <ResumeLink className="nav-cv" />

          <details className="mobile-menu">
            <summary aria-label="Open navigation">Menu</summary>
            <nav aria-label="Mobile navigation">
              {portfolioData.navigation.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
              <ResumeLink />
            </nav>
          </details>
        </div>
      </header>

      <main id="main-content">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-shell">
            <div className="hero-copy">
              <p className="eyebrow hero-eyebrow">{profile.eyebrow}</p>
              <h1 id="hero-title">{profile.name}</h1>
              <p className="hero-identity">
                Research <span aria-hidden="true">·</span> Coordination{' '}
                <span aria-hidden="true">·</span> Communication{' '}
                <span aria-hidden="true">·</span> Data
              </p>
              <p className="hero-summary">{portfolioData.hero.summary}</p>
              <p className="hero-direction">{portfolioData.hero.direction}</p>

              <div className="hero-actions" aria-label="Primary actions">
                <a className="button button-primary" href="#experience">
                  Explore My Experience
                  <span aria-hidden="true">↓</span>
                </a>
                <ResumeLink className="button button-secondary" />
                <a className="button button-tertiary" href={`mailto:${profile.email}`}>
                  Contact Me
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>

            <aside className="candidate-card" aria-label="Professional overview">
              <div className="candidate-card-header">
                <span>Professional overview</span>
                <span>2026</span>
              </div>
              <p className="candidate-card-kicker">Current profile</p>
              <h2>People, research, data, and structured execution.</h2>
              <dl>
                <div>
                  <dt>Education</dt>
                  <dd>Bachelor of Psychology</dd>
                </div>
                <div>
                  <dt>Experience</dt>
                  <dd>Academic projects & volunteer roles</dd>
                </div>
                <div>
                  <dt>Current status</dt>
                  <dd>Undergraduate thesis stage</dd>
                </div>
              </dl>
              <p className="candidate-availability">
                Completed all regular coursework and currently focusing on the
                undergraduate thesis. Expected graduation: 2026.
              </p>
            </aside>
          </div>

          <ul className="highlight-grid" aria-label="Profile highlights">
            {portfolioData.hero.highlights.map((highlight) => (
              <li key={highlight.value}>
                <span className="highlight-value">{highlight.value}</span>
                <strong>{highlight.label}</strong>
                <small>{highlight.note}</small>
              </li>
            ))}
          </ul>
        </section>

        <section className="section about-section" id="about">
          <div className="section-shell">
            <SectionHeading
              eyebrow="Profile"
              title="About Me"
              description="A broad professional profile built through academic work and real volunteer responsibilities."
            />

            <div className="about-grid">
              <p className="about-lead">
                Psychology gives me a foundation for understanding people. My experience
                taught me how to organize the work around them.
              </p>
              <div className="prose-column">
                <p>
                  I am a final-year Psychology student at Universitas Gunadarma with
                  experience across academic research, community operations,
                  collaboration management, data organization, and structured
                  documentation.
                </p>
                <p>
                  My academic background has exposed me to interviewing, quantitative and
                  qualitative research, job analysis, psychological measurement, data
                  processing, and confidential information handling. Across several
                  projects, I regularly coordinated groups of approximately five to seven
                  students by organizing responsibilities, monitoring progress,
                  consolidating contributions, and reviewing reports before deadlines.
                </p>
                <p>
                  Outside academics, I gained volunteer experience working with
                  international communities and external project representatives. These
                  responsibilities involved professional written communication in English,
                  outreach, negotiation, coordination, follow-up, issue handling, and
                  managing multiple ongoing activities.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section experience-section" id="experience">
          <div className="section-shell">
            <SectionHeading
              eyebrow="Real responsibilities"
              title="Volunteer Experience"
              description="Unpaid community-based roles presented in general professional language, without treating them as employment in another field."
            />

            <div className="experience-list">
              {portfolioData.volunteerExperience.map((experience, index) => (
                <article className="experience-card" key={`${experience.organization}-${experience.role}`}>
                  <div className="experience-meta">
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <time>{experience.period}</time>
                  </div>
                  <header>
                    <p>{experience.organization}</p>
                    <h3>{experience.role}</h3>
                    <small>{experience.type}</small>
                  </header>
                  <ul className="bullet-list">
                    {experience.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <aside className="collaboration-callout">
              <div className="callout-number">100+</div>
              <div>
                <p className="eyebrow eyebrow-on-dark">Scale of coordination</p>
                <h3>Collaboration Opportunities Coordinated</h3>
                <p>
                  Across two volunteer communities, I handled more than 100 collaboration
                  opportunities involving research, outreach, negotiation, coordination,
                  participant information, deadlines, follow-up, and external
                  communication.
                </p>
                <small>
                  A conservative opportunity count—not 100 successful partnerships. The
                  exact total was not formally recorded.
                </small>
              </div>
            </aside>

            <div className="case-grid" aria-label="Selected experience case studies">
              <article className="case-card">
                <p className="eyebrow">Community operations case</p>
                <h3>Managing Community Concerns During Organizational Change</h3>
                <p>
                  During periods of member frustration, I allowed constructive criticism
                  and differing opinions while maintaining professional boundaries. When
                  discussions shifted toward personal conflict, I helped de-escalate the
                  situation and escalated concerns that required information or authority
                  beyond my role.
                </p>
                <ul>
                  <li>Allowed constructive criticism and respectful disagreement.</li>
                  <li>Maintained clear boundaries around personal conflict.</li>
                  <li>Recognized when an issue required escalation.</li>
                  <li>Communicated responsibly during periods of uncertainty.</li>
                </ul>
              </article>

              <article className="case-card case-card-dark">
                <p className="eyebrow eyebrow-on-dark">Research & judgment case</p>
                <h3>Project Screening & Risk Awareness</h3>
                <p>
                  Before selected opportunities proceeded, I reviewed publicly available
                  information such as account activity, team background, engagement
                  quality, public history, and other potential credibility or risk
                  indicators. Relevant concerns were communicated before a decision was
                  made.
                </p>
                <small>
                  This was a practical screening process based on public information—not
                  formal due diligence or an accusation against any specific project.
                </small>
              </article>
            </div>
          </div>
        </section>

        <section className="workflow-section" aria-labelledby="workflow-title">
          <div className="section-shell">
            <div className="workflow-heading">
              <div>
                <p className="eyebrow eyebrow-on-dark">Repeatable process</p>
                <h2 id="workflow-title">Collaboration Workflow</h2>
              </div>
              <p>
                A generalized view of how I moved an opportunity from discovery to final
                follow-up.
              </p>
            </div>

            <ol className="workflow">
              {portfolioData.workflow.map((step, index) => (
                <li key={step.title}>
                  <span className="workflow-node" aria-hidden="true" />
                  <span className="workflow-index">{String(index + 1).padStart(2, '0')}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section academic-section" id="academic">
          <div className="section-shell">
            <SectionHeading
              eyebrow="Academic experience"
              title="Selected Academic Projects"
              description="University work presented clearly as academic experience—not formal professional employment."
            />

            <div className="project-grid">
              {portfolioData.academicProjects.map((project) => (
                <article className="project-card" key={project.title}>
                  <header>
                    <span>{project.index}</span>
                    <h3>{project.title}</h3>
                  </header>
                  <p className="project-summary">{project.summary}</p>
                  {project.bullets.length > 0 ? (
                    <ul className="bullet-list">
                      {project.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  ) : null}
                  <div className="project-areas">
                    <span>Relevant skills</span>
                    <TagList items={project.areas} />
                  </div>
                </article>
              ))}
            </div>

            <div className="evidence-grid">
              <article className="coordination-card">
                <p className="eyebrow">Team coordination</p>
                <div className="evidence-number">5–7</div>
                <h3>Academic Team Members Typically Coordinated</h3>
                <p>
                  Across several Psychology and research courses, I regularly coordinated
                  groups of approximately five to seven students. Responsibilities
                  included organizing work, monitoring progress, consolidating
                  contributions, reviewing report accuracy, checking consistency and
                  formatting, and helping ensure deadlines were met.
                </p>
                <small>
                  Group reports frequently received positive feedback regarding their
                  organization and presentation. No grade, award, or ranking is implied.
                </small>
              </article>

              <article className="confidentiality-card">
                <span className="confidentiality-mark" aria-hidden="true">01</span>
                <p className="eyebrow">Responsible data handling</p>
                <h3>Handling Confidential Information</h3>
                <p>
                  Academic research and interviewing required respondent information to
                  be handled confidentially. This developed my awareness of responsible
                  data handling, privacy, discretion, and the importance of maintaining
                  accurate and controlled documentation.
                </p>
                <p className="confidentiality-note">
                  This refers to academic respondent information and does not imply prior
                  experience handling employee records or formal organizational databases.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="section-shell">
            <SectionHeading
              eyebrow="Capabilities & tools"
              title="Skills"
              description="Broadly relevant skills and tools, described without proficiency percentages or inflated claims."
            />

            <div className="skill-category-grid">
              {portfolioData.skillCategories.map((group, index) => (
                <article className={group.secondary ? 'skill-category secondary-skill' : 'skill-category'} key={group.category}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <h3>{group.category}</h3>
                  <TagList items={group.items} />
                  {group.secondary ? <small>Secondary tools used for online communication.</small> : null}
                </article>
              ))}
            </div>

            <aside className="excel-panel">
              <div>
                <p className="eyebrow">Microsoft Excel</p>
                <h3>Basic to Intermediate</h3>
                <p>No advanced proficiency claim is implied.</p>
              </div>
              <TagList items={portfolioData.excelSkills} />
            </aside>

            <div className="language-grid">
              {portfolioData.languages.map((language) => (
                <article key={language.language}>
                  <p className="eyebrow">Language</p>
                  <h3>{language.language}</h3>
                  <strong>{language.level}</strong>
                  <p>{language.context}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section training-section" id="training">
          <div className="section-shell">
            <SectionHeading
              eyebrow="Continued learning"
              title="Training & Development"
              description="University training programs included as learning experience, not professional employment or independent certifications."
            />

            <ol className="training-list">
              {portfolioData.training.map((training, index) => (
                <li key={training.title}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <h3>{training.title}</h3>
                    <p>{training.institution} · University training program</p>
                  </div>
                  <time>{training.year}</time>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="interest-section" id="interests" aria-labelledby="interest-title">
          <div className="section-shell interest-grid">
            <div>
              <p className="eyebrow eyebrow-on-dark">Professional direction</p>
              <h2 id="interest-title">Areas of Interest</h2>
              <p className="interest-lead">
                I am exploring entry-level opportunities where people, communication,
                coordination, research, operations, and organized processes intersect.
              </p>
              <p>
                These are fields I am interested in developing professionally—not areas in
                which I claim established expertise.
              </p>
            </div>

            <aside className="interest-card">
              <span>Professional areas I am interested in exploring</span>
              <TagList items={portfolioData.areasOfInterest} />
            </aside>
          </div>
        </section>

        <section className="education-section" id="education" aria-labelledby="education-title">
          <div className="section-shell education-grid">
            <div>
              <p className="eyebrow eyebrow-on-dark">Education</p>
              <h2 id="education-title">{portfolioData.education.institution}</h2>
              <p className="education-degree">{portfolioData.education.degree}</p>
              <p className="education-status">{portfolioData.education.status}</p>
            </div>

            <dl className="education-facts">
              <div>
                <dt>Period</dt>
                <dd>{portfolioData.education.period}</dd>
              </div>
              <div>
                <dt>Expected graduation</dt>
                <dd>{portfolioData.education.expectedGraduation}</dd>
              </div>
              <div>
                <dt>GPA</dt>
                <dd>{portfolioData.education.gpa}</dd>
              </div>
            </dl>

            <div className="education-exposure">
              <span>Relevant academic exposure</span>
              <TagList items={portfolioData.education.exposure} />
            </div>
          </div>
        </section>

        <aside className="portfolio-note" aria-labelledby="portfolio-note-title">
          <div className="section-shell note-grid">
            <h2 id="portfolio-note-title">Portfolio Note</h2>
            <div>
              <p>
                The volunteer experiences presented in this portfolio were primarily
                conducted through online community interactions and private collaboration
                communications between 2022 and 2024. Due to the age and private nature of
                these activities, original conversation records and internal materials are
                not included. The case studies reflect my actual responsibilities,
                workflows, and experience.
              </p>
              <p>
                Academic projects are clearly identified as academic experience and are
                not presented as formal professional employment.
              </p>
            </div>
          </div>
        </aside>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="section-shell contact-grid">
            <div>
              <p className="eyebrow">Contact</p>
              <h2 id="contact-title">Let&apos;s Connect</h2>
              <p>
                I am currently exploring opportunities where I can apply and further
                develop my experience in communication, coordination, research, data
                organization, and people-related work.
              </p>
            </div>

            <div className="contact-actions">
              <a className="email-primary" href={`mailto:${profile.email}`}>
                <span>Email</span>
                <strong>{profile.email}</strong>
                <span aria-hidden="true">↗</span>
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <span>LinkedIn</span>
                <strong>View profile</strong>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <span>{profile.name}</span>
          <span>Professional Portfolio</span>
          <span>Final-year Psychology student</span>
        </div>
      </footer>
    </div>
  );
}
