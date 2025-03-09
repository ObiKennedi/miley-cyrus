'use client';

import React, { useState } from 'react';
import './globals.scss';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [menu, setMenu] = useState(false);
  const toggle = () => {
    setMenu(!menu);
  };

  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/music', label: 'Music' },
    { href: '/support', label: 'Support' },
    { href: '/foundation', label: 'Foundation' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header>
      <Link href={'/'}>
        <Image src={'/icons/logo.png'} width={70} height={70} alt="logo" />
      </Link>
      <nav>
        <ul>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={pathname === link.href ? 'active' : ''}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button onClick={toggle}>
        <Image src={'/icons/menu.png'} width={40} height={40} alt="menu" />
      </button>
      {menu && (
        <nav className="mobile-nav">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={pathname === link.href ? 'active' : ''}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;