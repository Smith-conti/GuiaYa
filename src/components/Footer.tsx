import { ArrowUpRight, Compass } from 'lucide-react'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-width footer-main">
        <div className="footer-brand-block">
          <a className="brand footer-brand" href="#inicio"><span className="brand-mark"><Compass size={20} /></span><span className="brand-name">Guia<span>Ya</span></span></a>
          <p>Descubre Cusco a tu manera.</p>
        </div>
        <div className="footer-nav"><a href="#inicio">Volver al inicio <ArrowUpRight size={14} /></a><a href="#destinos">Explorar destinos <ArrowUpRight size={14} /></a></div>
      </div>
      <div className="page-width footer-bottom">
        <span>© {new Date().getFullYear()} GuiaYa</span>
        <div className="footer-notices">
          <p>El asistente virtual utiliza inteligencia artificial; verifica la información importante antes de viajar.</p>
          <p>Esta página tiene únicamente fines educativos e informativos.</p>
        </div>
        <span>CON CURIOSIDAD, DESDE CUSCO</span>
      </div>
    </footer>
  )
}
