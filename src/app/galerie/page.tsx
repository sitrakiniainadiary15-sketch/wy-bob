import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import '../page.css'
import './galerie.css'

const photos = [
  { id: 1, src: '/images/galerie1.png', alt: 'Galerie 1' },
  { id: 2, src: '/images/galerie2.png', alt: 'Galerie 2' },
  { id: 3, src: '/images/galerie3.png', alt: 'Galerie 3' },
  { id: 4, src: '/images/galerie4.png', alt: 'Galerie 4' },
  { id: 5, src: '/images/galerie5.png', alt: 'Galerie 5' },
  { id: 6, src: '/images/galerie6.png', alt: 'Galerie 6' },
]

export default function Galerie() {
  return (
    <div className="container">

      <Navbar />

      <div className="galerieZone">

        {/* Rangée haut */}
        <div className="galerieRangee">
          {photos.slice(0, 3).map((photo) => (
            <div key={photo.id} className="galeriePhoto">
             <Image
  src={photo.src}
  alt={photo.alt}
  width={390}
  height={203}
  unoptimized
  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
/>
            </div>
          ))}
        </div>

        {/* Rangée bas */}
        <div className="galerieRangee">
          {photos.slice(3, 6).map((photo) => (
            <div key={photo.id} className="galeriePhoto">
              <Image
                src={photo.src}
                alt={photo.alt}
                width={390}
                height={203}
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="galeriePagination">
          <div className="galerieDots">
            <div className="galerieDot active"/>
            <div className="galerieDot"/>
            <div className="galerieDot"/>
          </div>
          <div className="galerieNav">
            <button className="galerieNavBtn">‹</button>
            <button className="galerieNavBtn">›</button>
          </div>
        </div>

      </div>

      <Footer />

    </div>
  )
}