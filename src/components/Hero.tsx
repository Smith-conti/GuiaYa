import { ArrowDown, Compass, Map } from 'lucide-react'

export function Hero() {
  return (
    <section className="hero page-width" id="inicio" aria-labelledby="hero-title">
      <div className="hero-copy">
        <div className="eyebrow"><span className="eyebrow-dot" /> UNA GUÍA PARA DESCUBRIR CUSCO</div>
        <h1 id="hero-title">Machu Picchu y Cusco, <span>más cerca</span> de lo que imaginas.</h1>
        <p className="hero-description">Explora lugares emblemáticos, paisajes andinos y la riqueza cultural de una región que convierte cada recorrido en una historia.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#destinos">Explorar destinos <ArrowDown size={16} /></a>
          <a className="button button-quiet" href="#sobre-cusco">Conocer Cusco <Compass size={16} /></a>
        </div>
        <div className="hero-note"><span className="hero-symbol"><Map size={15} /></span><span>Información para inspirar tu próximo recorrido</span></div>
      </div>
      <div className="hero-visual">
        <div className="hero-photo image-fallback">
          <img src="https://images.unsplash.com/photo-1532996152552-eaffc4edfc1a?auto=format&fit=crop&w=1800&q=90" alt="Vista panorámica de las terrazas de Machu Picchu en los Andes" fetchPriority="high" onError={(event) => event.currentTarget.style.display = 'none'} />
          <div className="photo-caption"><span className="caption-marker" /><span>Machu Picchu <small>13°09′ S · 72°32′ O</small></span></div>
        </div>
        <div className="hero-stamp" aria-hidden="true"><span>DESCUBRE</span><Compass size={21} /><span>CUSCO · PERÚ</span></div>
        <div className="hero-image-index" aria-hidden="true">01 <span /> 04</div>
      </div>
      <div className="hero-bottom"><span>GUIAYA · GUÍA DE VIAJE</span><span>13°31′ S&nbsp;&nbsp; 71°58′ O</span></div>
    </section>
  )
}
