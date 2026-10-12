export type Destination = {
  name: string
  description: string
  image: string
  imageAlt: string
  category: string
}

// URLs de fotografías seleccionadas para representar cada destino.
export const destinations: Destination[] = [
  {
    name: 'Machu Picchu',
    description: 'Explora una de las maravillas arqueológicas más impresionantes del mundo.',
    image: 'https://images.unsplash.com/photo-1532996152552-eaffc4edfc1a?auto=format&fit=crop&w=1000&q=85',
    imageAlt: 'Terrazas de piedra de Machu Picchu entre las montañas andinas',
    category: 'Historia · Patrimonio',
  },
  {
    name: 'Montaña de 7 Colores',
    description: 'Descubre los increíbles colores naturales de los Andes peruanos.',
    image: 'https://denomades.imgix.net/destinos/cusco/2063/montana-arcoris.jpg?auto=format%2Ccompress&fit=crop&fm=webp&h=700&q=85&w=1000',
    imageAlt: 'Laderas de colores de la montaña Vinicunca en los Andes',
    category: 'Naturaleza · Aventura',
  },
  {
    name: 'Laguna Humantay',
    description: 'Contempla sus aguas turquesas rodeadas de imponentes montañas.',
    image: 'https://images.unsplash.com/photo-1526926076776-50d6dd9e39e6?auto=format&fit=crop&w=1000&q=85',
    imageAlt: 'Laguna turquesa rodeada por montañas de los Andes',
    category: 'Naturaleza · Paisajes',
  },
  {
    name: 'Ciudad del Cusco',
    description: 'Recorre calles históricas, arquitectura inca y tradiciones andinas.',
    image: 'https://images.unsplash.com/photo-1665819647674-51c3dae315c6?auto=format&fit=crop&w=1000&q=85',
    imageAlt: 'Vista de Cusco y sus construcciones entre las montañas',
    category: 'Cultura · Ciudad',
  },
]

