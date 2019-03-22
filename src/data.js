import img1 from './assets/img/img1.png';
import img2 from './assets/img/img2.png';

const data = {
  images: {
    feature1: { src: img1, alt: 'mujer meditando' },
    feature2: { src: img2, alt: 'spa' }
  },
  literals: {
    hotelTxt: 'Hotel',
    buttonTxt: 'Elegir régimen',
    optionalFeatureATxT: 'Mejora tu estancia',
    optionalFeatureBTxT: 'Servicios de habitación',
    optionalLabelTxT: 'Opcional',
    altInfoFeatureTxT: 'Exclusivo hoteles.com',
    collapsibleHeaderTxT: 'Más información y condiciones',
    collapsibleTitleTxT: 'Incluye'
  },
  hotelName: 'Mieres del Camín Apartamentos',
  cards: [
    {
      id: 'Solo Alojamiento',
      features: ['Sin régimen', 'Botella de agua de bienvenida'],
      selected: false
    },
    {
      id: 'Alojamiento y Desayuno',
      features: ['Desayuno buffet completo'],
      selected: true
    },
    {
      id: 'Media Pensión',
      features: ['Desayuno buffet completo', 'Cena buffet', 'No incluye'],
      selected: false
    },
    {
      id: 'Todo incluido',
      features: ['Dispondrás de comida y bebida todo el día y durante toda tu estancia.', 'Restaurante buffet', 'Snack Bar', 'Servicio de bares (marcas nacionales)'],
      selected: false
    },
    {
      id: 'Unlimited Services',
      features: ['Dispondrás de comida y bebida todo el día y durante toda tu estancia.', 'Restaurante buffet', 'Snack Bar', 'Servicio de bares (marcas nacionales)', 'Restaurante buffet con bebidas Premium', 'Restaurante a la carta (una cena por estancia)', 'Snack Bar con bebidas Premium'],
      selected: false
    },
  ],
  featuresA: [
    {
      id: 'feature1',
      title: 'Olvídese de la rutina',
      body: 'Cras vehicula vestibulum dapibus. Pellentesque auctor dolor et purus facilisis maximus. Mauris eget urna luctus, imperdiet neque nec, aliquet lorem. ',
      altInfo: 'Valores no acumulables a otras promociones similares',
      featureItems: ['Baño javanés Mandi Susu tradicional: evocación de los baños que tomaban las princesas de las cortes y palacios de Java Central, en Indonesia, con antiguas recetas en las que se mezclaba la leche y las especias.', 'Baño floral balinés: con aceite de almendra dulce y aromas de jazmín.', 'Baño oceánico: con sal marina y gajos de mandarina o lima.', 'Baño de pies floral: baño aromático de pies, con pétalos y aromas.', 'Baño de vapor herbal: baño de vapor con hierbas del sudeste asiático.', 'Rain shower.'],       
    },
    {
      id: 'feature2',
      title: 'Experiencias y programas SPA con agua',
      body: 'Cras vehicula vestibulum dapibus. Pellentesque auctor dolor et purus facilisis maximus. Mauris eget urna luctus, imperdiet neque nec, aliquet lorem. Cras vehicula vestibulum dapibus. Pellentesque auctor dolor et purus facilisis maximus. Mauris eget urna luctus, imperdiet neque nec, aliquet lorem. Cras vehicula vestibulum dapibus. Pellentesque auctor dolor et purus facilisis maximus. Mauris eget urna luctus, imperdiet neque nec, aliquet lorem. Cras vehicula vestibulum dapibus. Pellentesque auctor dolor et purus facilisis maximus. Mauris eget urna luctus, imperdiet neque nec, aliquet lorem. Cras vehicula vestibulum dapibus. Pellentesque auctor dolor et purus facilisis maximus. Mauris eget urna luctus, imperdiet neque nec, aliquet lorem.',
      altInfo: 'Valores no acumulables a otras promociones similares',
      featureItems: ['Baño javanés Mandi Susu tradicional: evocación de los baños que tomaban las princesas de las cortes y palacios de Java Central, en Indonesia, con antiguas recetas en las que se mezclaba la leche y las especias.', 'Baño floral balinés: con aceite de almendra dulce y aromas de jazmín.', 'Baño oceánico: con sal marina y gajos de mandarina o lima.', 'Baño de pies floral: baño aromático de pies, con pétalos y aromas.', 'Baño de vapor herbal: baño de vapor con hierbas del sudeste asiático.', 'Rain shower.'],        
    }
  ]
}

export default data;