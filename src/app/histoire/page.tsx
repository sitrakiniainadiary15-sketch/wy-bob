import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import '../page.css'
import './histoire.css'

export default function Histoire() {
  return (
    <div className="container">

      <Navbar />

      <div className="histoireZone">

        {/* GAUCHE — Bloc texte */}
        <div className="histoireBloc">
          <h1 className="histoireTitre">Notre histoire</h1>
          <div className="histoireTexte">
            <p>WYBOB est née d'une envie simple : créer des pièces intemporelles porteuses de sens, de soleil et d'âme. Fondée autour de l'amour de l'été, du voyage et de l'élégance naturelle, WYBOB est bien plus qu'une marque de chapeaux. C'est un lien entre le style et l'artisanat, entre un mode de vie moderne et des racines authentiques.</p>
            <p>Chaque pièce est fabriquée à la main à Madagascar, une île riche de culture, de créativité et d'un savoir-faire exceptionnel. À travers WYBOB, nous souhaitons mettre en lumière ces talents et valoriser les mains derrière chaque création. Nous croyons que le luxe n'est pas l'excès. Le luxe, c'est le temps, le soin, la qualité et l'histoire.</p>
            <p>Nos chapeaux sont pensés pour vous accompagner au soleil — des rues de la ville aux escapades en bord de mer, des matins calmes aux étés inoubliables. WYBOB célèbre la liberté, la chaleur et l'identité. Merci de faire partie de cette aventure et de soutenir une manière plus consciente de créer. Créé avec âme. Porté avec lumière.</p>
          </div>
        </div>

        {/* DROITE — Image */}
        <div className="histoireImage">
          <Image
            src="/images/histoire.png"
            alt="Notre histoire"
            width={451}
            height={457}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          />
        </div>

      </div>
<Footer />
    </div>
  )
}