import { Mountain, Waves, Landmark, Compass } from 'lucide-react'
import { destinations } from '../data/destinations'

const icons = [Mountain, Compass, Waves, Landmark]

export function Destinations() {
  return (
    <section className="section destinations-section" id="destinos" aria-labelledby="destinations-title">
      <div className="page-width">
        <div className="section-heading destination-heading">
          <div><div className="section-kicker">UN MUNDO POR DESCUBRIR</div><h2 id="destinations-title">Los caminos de Cusco<br /><span>te están esperando.</span></h2></div>
          <p>Desde antiguas ciudades incas hasta paisajes que parecen de otro mundo. Empieza por donde quieras.</p>
        </div>
        <div className="destination-grid">
          {destinations.map((destination, index) => {
            const Icon = icons[index]
            return (
              <article className="destination-card" key={destination.name}>
                <div className="destination-image image-fallback">
                  <img src={destination.image} alt={destination.imageAlt} loading="lazy" onError={(event) => event.currentTarget.style.display = 'none'} />
                  <span className="destination-index">0{index + 1}</span>
                  <span className="destination-icon"><Icon size={18} strokeWidth={1.7} /></span>
                </div>
                <div className="destination-content">
                  <div className="destination-category">{destination.category}</div>
                  <h3>{destination.name}</h3>
                  <p>{destination.description}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
