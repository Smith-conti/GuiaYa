import { Compass, Landmark, Mountain } from 'lucide-react'

const highlights = [
  { icon: Landmark, number: '01', title: 'Historia viva', text: 'Arquitectura, memoria y cultura se encuentran en cada recorrido.' },
  { icon: Compass, number: '02', title: 'Caminos por explorar', text: 'Valles, pueblos y paisajes andinos invitan a descubrir sin prisa.' },
  { icon: Mountain, number: '03', title: 'Naturaleza imponente', text: 'Montañas y lagunas forman parte del paisaje que rodea la región.' },
]

export function AboutCusco() {
  return (
    <section className="section region-section" id="sobre-cusco" aria-labelledby="region-title">
      <div className="page-width region-layout">
        <div className="region-intro">
          <div className="section-kicker region-kicker">CUSCO · PERÚ</div>
          <h2 id="region-title">Una región.<br /><span>Incontables formas</span><br />de descubrirla.</h2>
          <p>Conoce sus lugares, su paisaje y la historia que acompaña cada camino. Cusco siempre tiene algo nuevo que mostrar.</p>
          <a className="button button-primary" href="#destinos">Explorar destinos <span aria-hidden="true">↗</span></a>
        </div>
        <div className="region-highlights">
          {highlights.map(({ icon: Icon, number, title, text }) => (
            <article className="region-highlight" key={title}>
              <span className="region-number">{number}</span>
              <span className="region-icon"><Icon size={19} strokeWidth={1.7} /></span>
              <div><h3>{title}</h3><p>{text}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
