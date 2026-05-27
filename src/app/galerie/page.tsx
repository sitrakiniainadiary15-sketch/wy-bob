'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import '../page.css'
import './galerie.css'

const pages = [
  {
    rangee1: ['/images/galerie1.png', '/images/galerie2.png', '/images/galerie3.png'],
    rangee2: ['/images/galerie4.png', '/images/galerie5.png', '/images/galerie6.png'],
  },
  {
    rangee1: ['/images/galerie7.png', '/images/galerie8.png', '/images/galerie9.png'],
    rangee2: ['/images/galerie10.png', '/images/galerie11.png', '/images/galerie12.png'],
  },
  {
    rangee1: ['/images/galerie13.png', '/images/galerie14.png', '/images/galerie15.png'],
    rangee2: ['/images/galerie16.png', '/images/galerie17.png', '/images/galerie18.png'],
  },
]

export default function Galerie() {
  const [currentPage, setCurrentPage] = useState(0)

  const goNext = () => setCurrentPage((p) => (p + 1) % pages.length)
  const goPrev = () => setCurrentPage((p) => (p - 1 + pages.length) % pages.length)

  const page = pages[currentPage]

  return (
    <div className="container">
      <Navbar />

      <div className="galerieZone">

        {/* Rangée 1 */}
        <div className="galerieRangee rangee1">
          <div className="galeriePhoto photo1">
            <img src={page.rangee1[0]} alt="Galerie" />
          </div>
          <div className="galeriePhoto photo2">
            <img src={page.rangee1[1]} alt="Galerie" />
          </div>
          <div className="galeriePhoto photo3 desktop-only">
            <img src={page.rangee1[2]} alt="Galerie" />
          </div>
        </div>

        {/* Rangée 2 */}
        <div className="galerieRangee rangee2">
          <div className="galeriePhoto photo3-bis tablet-only">
            <img src={page.rangee1[2]} alt="Galerie" />
          </div>
          <div className="galeriePhoto photo4">
            <img src={page.rangee2[0]} alt="Galerie" />
          </div>
          <div className="galeriePhoto photo5 desktop-only">
            <img src={page.rangee2[1]} alt="Galerie" />
          </div>
          <div className="galeriePhoto photo6 desktop-only">
            <img src={page.rangee2[2]} alt="Galerie" />
          </div>
        </div>

        {/* Pagination */}
        <div className="galeriePagination">
          <div className="galerieDots">
            {pages.map((_, i) => (
              <div
                key={i}
                className={`galerieDot ${currentPage === i ? 'active' : ''}`}
                onClick={() => setCurrentPage(i)}
                style={{ cursor: 'pointer' }}
              />
            ))}
          </div>
          <div className="galerieNav">
            <button className="galerieNavBtn" onClick={goPrev}>
              <img src="/images/chevron left.png" alt="gauche" width={24} height={24} />
            </button>
            <button className="galerieNavBtn" onClick={goNext}>
              <img src="/images/chevron right.png" alt="droite" width={24} height={24} />
            </button>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  )
}