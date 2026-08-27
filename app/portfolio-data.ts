// Replace cvPath with the final public CV file when it is available.
export const portfolioData = {
  name: 'Fathan Imaad',
  role: 'Community Management & Partnerships',
  location: 'Tangerang Regency, Banten, Indonesia',
  email: 'fathanimaad@gmail.com',
  linkedin: 'https://www.linkedin.com/in/fathan-imaad/',
  cvPath: '/fathan-imaad-cv.pdf',
  navigation: [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Process', href: '#process' },
    { label: 'Tools', href: '#tools' },
    { label: 'Contact', href: '#contact' },
  ],
  hero: {
    summary:
      'Final-year Psychology student with hands-on experience in international Web3 communities, community moderation, partnership outreach, negotiation, and collaboration coordination.',
    direction:
      'Applying my experience in digital communities and cross-project collaboration to Community & Public Relations.',
  },
  skills: [
    'Community Management',
    'Partnership Outreach',
    'Negotiation',
    'Community Moderation',
    'Project Screening',
    'Written English Communication',
  ],
  experience: [
    {
      organization: 'Stress Capital DAO',
      role: 'Collaboration Manager',
      period: '2024',
      description:
        'Managed collaborations for a smaller, gated Web3 community with greater emphasis on project screening, risk awareness, and selective partnership decisions.',
    },
    {
      organization: 'Chillchat',
      role: 'Collaboration Manager',
      period: '2023–2024',
      description:
        'Managed Web3 collaboration opportunities from project discovery and outreach through negotiation, community distribution, and post-distribution verification.',
    },
    {
      organization: 'Chillchat',
      role: 'Community Moderator',
      period: '2022–2024',
      description:
        'Supported an international Discord community by responding to member inquiries, moderating discussions, handling community-related issues, supporting events, and maintaining server safety.',
    },
  ],
  collaborationSteps: [
    {
      title: 'Discover',
      description: 'Community requests, network referrals, or independent research.',
    },
    {
      title: 'Research',
      description: 'Review project activity and basic credibility signals.',
    },
    {
      title: 'Outreach',
      description: 'Contact project representatives, managers, or founders.',
    },
    {
      title: 'Negotiate',
      description: 'Discuss allocations, requirements, and mutual value.',
    },
    {
      title: 'Confirm',
      description: 'Finalize allocation, method, requirements, and deadlines.',
    },
    {
      title: 'Distribute',
      description: 'Run raffles or another agreed distribution method.',
    },
    {
      title: 'Verify',
      description: 'Submit and confirm winner information with the partner.',
    },
    {
      title: 'Resolve',
      description: 'Follow up on eligibility or allocation issues.',
    },
  ],
  tools: [
    {
      category: 'Community & Communication',
      items: ['Discord', 'X / Twitter'],
    },
    {
      category: 'Collaboration & Distribution',
      items: ['Atlas', 'Alphabot', 'Subber'],
    },
    {
      category: 'Documentation',
      items: ['Google Sheets', 'Google Docs', 'Microsoft Excel'],
    },
    {
      category: 'Moderation',
      items: ['Discord Moderation Tools', 'Discord Security Bots'],
    },
  ],
} as const;
