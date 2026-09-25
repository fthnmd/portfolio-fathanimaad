'use client';

import { useEffect, useState } from 'react';
import { portfolioData } from '../portfolio-data';

type NavigationProps = { mobile?: boolean };

export function Navigation({ mobile = false }: NavigationProps) {
  const [active, setActive] = useState('overview');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = portfolioData.navigation
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((element): element is HTMLElement => !!element);
    const update = () => {
      let current = sections[0]?.id || 'overview';
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= window.innerHeight * 0.37) current = section.id;
      }
      setActive(current);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  const links = portfolioData.navigation.map((item) => (
    <a
      key={item.href}
      className={active === item.href.slice(1) ? 'is-current' : ''}
      aria-current={active === item.href.slice(1) ? 'location' : undefined}
      href={item.href}
      onClick={() => setOpen(false)}
    >
      <span>{item.label}</span><span className="nav-line" aria-hidden="true" />
    </a>
  ));

  if (mobile) return (
    <div className="mobile-nav">
      <button type="button" aria-controls="mobile-nav-links" aria-expanded={open} onClick={() => setOpen(!open)}>
        {open ? 'Close' : 'Menu'} <span aria-hidden="true" className="menu-mark">{open ? '×' : '+'}</span>
      </button>
      {open && <nav id="mobile-nav-links" aria-label="Mobile sections" onKeyDown={(event) => { if (event.key === 'Escape') setOpen(false); }}>{links}</nav>}
    </div>
  );

  return <nav className="side-nav" aria-label="Page sections">{links}</nav>;
}
