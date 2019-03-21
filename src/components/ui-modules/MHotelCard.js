import React, { PureComponent } from 'react'
import { Tabs } from 'antd';
import CardHolder from '../ui-kit/CardHolder';
import ServiceCard from '../ui-kit/ServiceCard';
import { Flex, Box } from 'reflexbox';

export default class MHotelCard extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      literals: {
        hotelTxt: 'Hotel',
        buttonTxt: 'Elegir régimen'
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
      ]
    }
  }

  componentDidMount() {
    
  }

  selectCard(card) {
    const updatedCards = card.selected
      ? this.state.cards.map(currentCard => ({...currentCard, selected: false}))
      : this.state.cards.map(currentCard => ({...currentCard, selected: currentCard.id === card.id}))
    this.setState(() => ({ cards: updatedCards }))
  }

  render() {
    return (
      <section className="g-mainwrapper">
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab="Tab 1" key="1">
            <CardHolder
              hotelTxt={this.state.literals.hotelTxt}
              hotelName={this.state.hotelName}
              stars={4}
            >
              <Flex align={'stretch'} wrap>
                {this.state.cards.map(card => 
                  <Box key={card.id} w={['100%', '50%', '20%']} px={'4px'} mb={[2, 2, 0]} onClick={() => this.selectCard(card)}>
                    <ServiceCard 
                      title={card.id} 
                      features={card.features} 
                      selected={card.selected}
                      buttonTxt={this.state.literals.buttonTxt} 
                    />  
                  </Box>
                )}
              </Flex>
            </CardHolder>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Tab 2" key="2">Content of Tab Pane 2</Tabs.TabPane>
        </Tabs>
      </section>
    )
  }
}
