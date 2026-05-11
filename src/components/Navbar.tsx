'use client'

import Link from 'next/link'
import Image from 'next/image'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">

      {/* Logo */}
      <Link href="/">
        <Image
          src="/images/logo.png"
          alt="WYBOB Logo"
          width={80}
          height={80}
          style={{ objectFit: 'contain' }}
        />
      </Link>

      {/* Liens */}
      <div className="links">
        {[
          { label: 'Home', href: '/' },
          { label: 'Notre Histoire', href: '/histoire' },
          { label: 'Le concept', href: '/concept' },
          { label: 'Gallerie', href: '/galerie' },
          { label: 'Contacts', href: '/contact' },
        ].map((link) => (
          <Link key={link.href} href={link.href} className="link">
            {link.label}
          </Link>
        ))}
      </div>

      {/* Icônes */}
      <div className="icons">
        <button className="iconBtn">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: '#1B1843' }}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        </button>
        <button className="iconBtn">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: '#1B1843' }}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </button>
      </div>

    </nav>
  )
}