import { portfolioData } from './portfolio-data';

function DownloadCvLink({ className = '' }: { className?: string }) {
  return (
    <a className={className} href={portfolioData.cvPath} download>
      Download CV
      <span aria-hidden="true">↘</span>
    </a>
  );
}

export default function Home() {
  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: portfolioData.name,
    email: `mailto:${portfolioData.email}`,
    jobTitle: portfolioData.role,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Tangerang Regency',
      addressRegion: 'Banten',
      addressCountry: 'Indonesia',
    },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Universitas Gunadarma',
    },
    sameAs: [portfolioData.linkedin],
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
          <a className="wordmark" href="#top" aria-label="Fathan Imaad, home">
            <span>FI</span>
            <span className="wordmark-copy">
              Fathan Imaad
              <small>Community / PR</small>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {portfolioData.navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <DownloadCvLink className="nav-cv" />

          <details className="mobile-menu">
            <summary aria-label="Open navigation">Menu</summary>
            <nav aria-label="Mobile navigation">
              {portfolioData.navigation.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
              <DownloadCvLink />
            </nav>
          </details>
        </div>
      </header>

      <main id="main-content">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="hero-context" aria-label="Profile context">
                <span>Community &amp; Public Relations</span>
                <span>{portfolioData.location}</span>
              </div>

              <h1 id="hero-title">
                <span className="hero-name">{portfolioData.name}</span>
                <span>{portfolioData.role}</span>
              </h1>

              <p className="hero-summary">{portfolioData.hero.summary}</p>

              <div className="hero-actions" aria-label="Primary actions">
                <a className="button button-primary" href="#experience">
                  View Experience
                  <span aria-hidden="true">↓</span>
                </a>
                <DownloadCvLink className="button button-secondary" />
              </div>

              <p className="hero-direction">{portfolioData.hero.direction}</p>
            </div>

            <aside className="profile-proof" aria-label="Experience highlights">
              <div className="proof-heading">
                <span>Working profile</span>
                <span>2022—2024</span>
              </div>

              <div className="metric metric-primary">
                <span className="metric-value">100+</span>
                <div>
                  <strong>Collaborations handled</strong>
                  <p>
                    A conservative count across research, outreach, negotiation,
                    distribution, and partner communication.
                  </p>
                </div>
              </div>

              <div className="metric-row">
                <div className="metric">
                  <span className="metric-value metric-value-small">2022—2024</span>
                  <p>Web3 community experience</p>
                </div>
                <div className="metric">
                  <span className="metric-value metric-value-small">English</span>
                  <p>Primary written working language</p>
                </div>
              </div>

              <p className="role-note">
                Community-based and volunteer experience; no formal employment
                relationship is implied.
              </p>
            </aside>
          </div>

          <div className="capability-strip" aria-label="Core capabilities">
            <span>Community moderation</span>
            <span>Partnership outreach</span>
            <span>Project screening</span>
            <span>Written English communication</span>
          </div>
        </section>

        <section className="section section-light about-section" id="about">
          <div className="section-shell">
            <div className="section-title-row">
              <h2>About Me</h2>
              <p className="section-standfirst">
                Community work grounded in clear communication, sound judgment,
                and respect for people.
              </p>
            </div>

            <div className="about-grid">
              <p className="about-lead">
                I connect people, expectations, and project teams across
                fast-moving digital communities.
              </p>
              <div className="prose-column">
                <p>
                  I am a final-year Psychology student at Universitas Gunadarma
                  with practical experience in international Web3 community
                  management and partnership coordination. From moderating an
                  active Discord community to sourcing, negotiating, and managing
                  collaborations with external Web3 projects, I have supported both
                  community-facing and partnership-facing responsibilities.
                </p>
                <p>
                  This experience taught me to communicate clearly, manage
                  expectations, evaluate potential opportunities, handle community
                  concerns, and coordinate with project teams from different
                  countries. Most of my professional communication in Web3 was
                  conducted in written English.
                </p>
              </div>
            </div>

            <ul className="skill-list" aria-label="Core skills">
              {portfolioData.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section section-paper experience-section" id="experience">
          <div className="section-shell">
            <div className="section-title-row compact-title-row">
              <h2>Experience</h2>
              <p className="section-standfirst">
                A chronological view of community and volunteer roles. Titles
                describe the function performed, not formal employment.
              </p>
            </div>

            <ol className="timeline">
              {portfolioData.experience.map((item, index) => (
                <li key={`${item.organization}-${item.role}`}>
                  <span className="timeline-index" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <time>{item.period}</time>
                  <div className="timeline-role">
                    <span>{item.organization}</span>
                    <h3>{item.role}</h3>
                    <small>Volunteer / community role</small>
                  </div>
                  <p>{item.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section case-studies-section" id="case-studies">
          <div className="section-shell">
            <div className="case-studies-intro">
              <h2>Case Studies</h2>
              <p>
                Reconstructed from actual responsibilities, workflows, and
                decisions across community moderation and partnership coordination.
              </p>
            </div>

            <article className="case-study community-case" aria-labelledby="community-case-title">
              <header className="case-header">
                <div className="case-number" aria-hidden="true">01</div>
                <div>
                  <p className="case-domain">Community moderation / Chillchat</p>
                  <h3 id="community-case-title">Managing an International Web3 Community</h3>
                </div>
              </header>

              <div className="case-opening">
                <p className="case-context">
                  Chillchat operated an international Discord community where
                  members discussed the project, participated in community
                  activities, and communicated directly with moderators and the
                  core team.
                </p>
                <dl className="case-facts">
                  <div>
                    <dt>Role</dt>
                    <dd>One of approximately six moderators</dd>
                  </div>
                  <div>
                    <dt>Platform</dt>
                    <dd>Discord</dd>
                  </div>
                  <div>
                    <dt>Focus</dt>
                    <dd>Support, safety, events, escalation</dd>
                  </div>
                </dl>
              </div>

              <div className="responsibility-block">
                <h4>Responsibilities</h4>
                <p>
                  I responded to member questions, moderated discussions, handled
                  spam and disruptive behavior, supported community events, managed
                  support-related issues, and escalated project-specific questions
                  when they required information outside the moderators&apos;
                  authority. I also configured anti-spam and anti-raid Discord bots
                  to strengthen server security.
                </p>
              </div>

              <div className="judgment-grid">
                <div className="judgment-card">
                  <p className="case-domain">Judgment in practice</p>
                  <h4>Managing Community Frustration During Product Direction Changes</h4>
                  <div className="narrative-pair">
                    <div>
                      <h5>Situation</h5>
                      <p>
                        During changes in the project&apos;s product direction, some
                        members became increasingly frustrated and discussions
                        occasionally escalated into arguments.
                      </p>
                    </div>
                    <div>
                      <h5>Approach</h5>
                      <p>
                        I allowed objective criticism and differing opinions. When
                        discussions shifted toward personal attacks, temporary
                        timeouts were used. More complex concerns were escalated to
                        the core team.
                      </p>
                    </div>
                  </div>
                  <blockquote>
                    Criticism and disagreement were acceptable. Personal attacks
                    were not.
                  </blockquote>
                </div>

                <div className="event-card">
                  <span className="event-mark" aria-hidden="true">SE</span>
                  <h4>Supporting Community Events</h4>
                  <p>
                    During Sol Arena community events, I assisted members with
                    event questions and reward claims through Discord support
                    tickets. Reports of potential in-game cheating or bot usage
                    were documented and escalated because game-level enforcement
                    was outside the moderators&apos; authority.
                  </p>
                  <p className="takeaway">
                    The lesson: resolve what falls within your role, and route the
                    rest to the right decision-maker.
                  </p>
                </div>
              </div>
            </article>

            <article className="case-study partnerships-case" aria-labelledby="partnership-case-title">
              <header className="case-header">
                <div className="case-number" aria-hidden="true">02</div>
                <div>
                  <p className="case-domain">Partnership operations / Chillchat</p>
                  <h3 id="partnership-case-title">From Community Requests to Cross-Project Collaborations</h3>
                </div>
              </header>

              <div className="partnership-intro">
                <div>
                  <h4>Context</h4>
                  <p>
                    Chillchat members frequently sought early access to upcoming
                    Web3 and NFT projects. Opportunities also came through my own
                    project research and existing Web3 network.
                  </p>
                </div>
                <div>
                  <h4>My Role</h4>
                  <p>
                    I researched potential projects, contacted collaboration
                    managers or founders through Discord and X, introduced the
                    Chillchat community, and negotiated mutually beneficial
                    arrangements.
                  </p>
                </div>
              </div>

              <div className="operation-grid">
                <section>
                  <span>01</span>
                  <h4>Typical Collaboration</h4>
                  <p>
                    A partner project provided early-access or allowlist spots. In
                    return, participating members might engage with selected X
                    content through likes, reposts, replies, or a coordinated
                    community raid.
                  </p>
                </section>
                <section>
                  <span>02</span>
                  <h4>Distribution</h4>
                  <p>
                    I organized community raffles using Atlas, Alphabot, and
                    Subber. When deadlines were unusually close, I occasionally
                    used first-come, first-served distribution to submit allocations
                    on time.
                  </p>
                </section>
                <section>
                  <span>03</span>
                  <h4>Completion</h4>
                  <p>
                    I submitted winner information to the partner, verified that
                    members were added before the project launch when necessary,
                    and followed up when eligibility issues were reported.
                  </p>
                </section>
              </div>

              <aside className="web3-translation" aria-label="Web3 terminology explained">
                <strong>For non-Web3 readers</strong>
                <span><b>Allowlist</b> means an early-access eligibility list.</span>
                <span><b>Mint</b> refers to the project&apos;s digital-asset launch or claim event.</span>
                <span><b>Community raid</b> means coordinated engagement on selected social content.</span>
              </aside>
            </article>
          </div>
        </section>

        <section className="section process-section" id="process">
          <div className="section-shell process-shell">
            <div className="process-heading">
              <h2>Collaboration Process</h2>
              <p>
                A repeatable workflow from the first signal of an opportunity to
                final partner follow-up.
              </p>
            </div>

            <ol className="workflow">
              {portfolioData.collaborationSteps.map((step, index) => (
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

        <section className="section section-light screening-section">
          <div className="section-shell">
            <article aria-labelledby="screening-title">
              <header className="case-header screening-header">
                <div className="case-number" aria-hidden="true">03</div>
                <div>
                  <p className="case-domain">Selective partnerships / Stress Capital DAO</p>
                  <h2 id="screening-title">Selective Partnerships for a Gated Web3 Community</h2>
                </div>
              </header>

              <div className="screening-layout">
                <div className="screening-copy">
                  <div>
                    <h3>Context</h3>
                    <p>
                      Stress Capital DAO was a smaller, more selective private
                      Web3 community. Members could request access to particular
                      upcoming projects, while I also sourced opportunities
                      independently.
                    </p>
                  </div>
                  <div>
                    <h3>My Role</h3>
                    <p>
                      I independently evaluated potential projects before deciding
                      whether to pursue a collaboration, then handled outreach,
                      negotiation, allocation coordination, distribution, and
                      follow-up.
                    </p>
                  </div>
                </div>

                <div className="screening-panel">
                  <h3>Project Screening</h3>
                  <p>
                    I reviewed publicly available indicators and treated concerns
                    as signals for added caution, not as proof that a project was
                    safe or unsafe.
                  </p>
                  <ul>
                    <li>X account activity and significant username history</li>
                    <li>Founder or team track records</li>
                    <li>Artwork originality and engagement quality</li>
                    <li>Potential signs of artificially inflated activity</li>
                  </ul>
                  <p>
                    When concerns existed but community demand remained high, I
                    communicated those concerns before a collaboration proceeded.
                  </p>
                </div>
              </div>

              <div className="decision-rule">
                <span>Decision boundary</span>
                <p>
                  I independently decided whether most opportunities should
                  proceed. Requests involving official Stress Capital
                  communications, such as a dedicated post on the community&apos;s X
                  account, were escalated to the core team because they fell
                  outside my authority.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="scale-section" aria-labelledby="scale-title">
          <div className="section-shell scale-grid">
            <div className="scale-number" aria-hidden="true">100+</div>
            <div>
              <h2 id="scale-title">Web3 Collaborations</h2>
              <p>
                Across Chillchat and Stress Capital DAO, I handled more than 100
                collaboration opportunities involving project research, outreach,
                negotiation, allocation distribution, and partner communication.
              </p>
              <small>Conservative count; not an exact analytics metric.</small>
            </div>
          </div>
        </section>

        <section className="section section-paper tools-section" id="tools">
          <div className="section-shell">
            <div className="section-title-row compact-title-row">
              <h2>Tools</h2>
              <p className="section-standfirst">
                Platforms used to communicate, distribute access, document work,
                and keep communities safe.
              </p>
            </div>

            <div className="tool-grid">
              {portfolioData.tools.map((group, index) => (
                <section key={group.category}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <h3>{group.category}</h3>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </div>
        </section>

        <section className="section communication-section">
          <div className="section-shell communication-grid">
            <article>
              <span className="communication-mark" aria-hidden="true">EN</span>
              <h2>Working Across International Communities</h2>
              <p>
                English was the primary language I used for written communication
                with community members and Web3 project teams from different
                countries. My responsibilities regularly involved written
                outreach, partnership negotiation, clarification of collaboration
                requirements, issue resolution, and follow-up communication.
              </p>
              <p className="emphasis-line">
                My experience is strongest in written English communication,
                particularly in fast-moving online community environments.
              </p>
            </article>

            <article className="psychology-card">
              <span className="communication-mark" aria-hidden="true">Ψ</span>
              <h2>A Psychology Background</h2>
              <p>
                My academic background in Psychology complements my community
                experience through training in interviewing, behavioral
                observation, research, structured communication, and working with
                confidential information.
              </p>
              <p>
                I also regularly coordinated academic teams of approximately five
                to seven members in completing research-based projects and reports.
              </p>
            </article>
          </div>
        </section>

        <aside className="portfolio-note" aria-labelledby="portfolio-note-title">
          <div className="section-shell note-grid">
            <h2 id="portfolio-note-title">Portfolio Note</h2>
            <p>
              The experiences presented in this portfolio took place primarily
              through real-time community interactions and private partnership
              communications between 2022 and 2024. Due to the age and private
              nature of these activities, original conversation records and
              internal materials are not included. These case studies are
              reconstructed from my actual responsibilities, workflows, and
              experience.
            </p>
          </div>
        </aside>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="section-shell contact-grid">
            <div>
              <p className="contact-location">{portfolioData.location}</p>
              <h2 id="contact-title">Let&apos;s Connect</h2>
              <p>
                I am currently exploring opportunities where I can apply my
                experience in community management, communication, and partnerships
                while continuing to develop professionally in Community &amp;
                Public Relations.
              </p>
            </div>

            <div className="contact-actions">
              <a className="contact-link primary-contact" href={`mailto:${portfolioData.email}`}>
                <span>Email</span>
                <strong>{portfolioData.email}</strong>
                <span aria-hidden="true">↗</span>
              </a>
              <a
                className="contact-link"
                href={portfolioData.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <span>LinkedIn</span>
                <strong>linkedin.com/in/fathan-imaad</strong>
                <span aria-hidden="true">↗</span>
              </a>
              <DownloadCvLink className="contact-link" />
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <span>Fathan Imaad</span>
          <span>Community Management &amp; Partnerships</span>
        </div>
      </footer>
    </div>
  );
}
