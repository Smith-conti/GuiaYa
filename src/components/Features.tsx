import { Compass, Landmark, Mountain } from 'lucide-react'

const features = [
  { icon: Landmark, number: '01', title: 'Historia y patrimonio', text: 'Descubre la huella de distintas épocas en los paisajes y ciudades de la región.' },
  { icon: Mountain, number: '02', title: 'Paisajes andinos', text: 'Conoce montañas, valles y lagunas que dan forma al entorno de Cusco.' },
  { icon: Compass, number: '03', title: 'Lugares por conocer', text: 'Encuentra inspiración para seguir explorando más allá de los caminos conocidos.' },
]

export function Features() {
  return (
    <section className="section features-section" aria-labelledby="features-title">
      <div className="page-width">
        <div className="section-heading features-heading">
          <div><div className="section-kicker">LUGARES · PAISAJES · CULTURA</div><h2 id="features-title">Mucho por ver.<br /><span>Mucho por conocer.</span></h2></div>
          <p>Una mirada a algunos de los elementos que hacen de Cusco un destino tan especial.</p>
        </div>
        <div className="features-grid">
          {features.map(({ icon: Icon, number, title, text }) => <article className="feature-card" key={title}>
            <div className="feature-top"><span className="feature-icon"><Icon size={20} strokeWidth={1.7} /></span><span>{number}</span></div>
            <h3>{title}</h3><p>{text}</p>
          </article>)}
        </div>
      </div>
    </section>
  )
}
