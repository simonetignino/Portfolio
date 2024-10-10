import SimpleCard from "./Cards/SimpleCard";
import HeroSection from "./HeroSection";
import { motion } from "framer-motion";

export default function MainSection() {
    return (
      <div className="main flex flex-col w-full px-4 sm:px-6 lg:px-8">
        <div className="hero-section">
            <HeroSection/>
        </div>
        <div className="cover-info grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
          <div className="info">
            <span></span>
            <span></span>
          </div>
          <div className="info">
            <span></span>
            <span></span>
          </div>
          <div className="info">
            <span></span>
            <span></span>
          </div>
          <div className="info">
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="my-section w-full mt-5">
        <motion.h2 
          className="text-xl sm:text-2xl md:text-[24px] text-white"
          initial="hidden"
          animate="visible"
        >
          Servizi
        </motion.h2>
          <div className="cards-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              <SimpleCard title={"Landing Page"} desc={"Pagina web progettata per guidare i visitatori verso una specifica azione, come un acquisto o una registrazione."} />
              <SimpleCard title={"Blog"} desc={"Sito web o sezione di un sito dove vengono pubblicati articoli o post su argomenti specifici in modo regolare."} />
              <SimpleCard title={"E-commerce"} desc={"Piattaforma online che consente la vendita di prodotti o servizi, con funzioni come carrello e pagamento."} />
              <SimpleCard title={"Gestionali"} desc={"Software che automatizza e supporta le attività di gestione aziendale, come contabilità, inventario o risorse umane."} />
              <SimpleCard title={"Web App"} desc={"Applicazione accessibile tramite browser che funziona su più dispositivi senza necessità di installazione."} />
              <SimpleCard title={"Menù Digitale"} desc={"Menù online interattivo per ristoranti, visualizzabile su dispositivi mobili, che consente ordini e consultazione rapida."} />
          </div>
        </div>
      </div>
    )
  }
  
  