import React, { PureComponent } from 'react'
import { Tabs } from 'antd';
import CardHolder from '../ui-kit/CardHolder';
import ServiceCard from '../ui-kit/ServiceCard';
import { Flex, Box } from 'reflexbox';
import CollapsibleElement from '../ui-kit/CollapsibleElement';
import FeatureBlock from '../ui-kit/FeatureBlock';
import data from '../../data.js';

export default class MHotelCard extends PureComponent {

  constructor(props) {
    super(props);
    this.state = data
  }

  componentDidMount() {
    
  }

  selectCard(card) {
    const updatedCards = card.selected
      ? this.state.cards.map(currentCard => ({...currentCard, selected: false}))
      : this.state.cards.map(currentCard => ({...currentCard, selected: currentCard.id === card.id}))
    this.setState(() => ({ cards: updatedCards }))
  }

  getImage(imgKey) {
    return this.state.images && this.state.images[imgKey]
      ? this.state.images[imgKey]
      : null
  }

  render() {
    return (
      <section className="g-mainwrapper">
        <Tabs defaultActiveKey="1">
          {/* MHotelPlanSelector */}
          <Tabs.TabPane tab="Tab 1" key="1">
            <CardHolder
              hotelTxt={this.state.literals.hotelTxt}
              hotelName={this.state.hotelName}
              stars={4}
            >
              <Flex align={'stretch'} wrap>
                {this.state.cards.map(card => 
                  <Box key={card.id} w={['100%', '50%', '20%']} px={'4px'} mb={[2, 1, 0]} onClick={() => this.selectCard(card)}>
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
          {/* MHotelFeatures */}
          <Tabs.TabPane tab="Tab 2" key="2">
            <Box pt={3} px={[2, 2, 0]}>
              <CollapsibleElement 
                title={this.state.literals.optionalFeatureATxT}
                subtitle={this.state.literals.optionalLabelTxT}
                altInfo={this.state.literals.altInfoFeatureTxT}
              >
                {this.state.featuresA.map(feature => 
                  <Box mb={2}>
                    <FeatureBlock
                      title={feature.title}
                      photoImg={this.getImage(feature.id)}
                      featureBody={feature.body}
                      featureItems={feature.featureItems}
                      additionalInfo={feature.altInfo}
                      collapsibleHeaderTxT={this.state.literals.collapsibleHeaderTxT}
                      collapsibleTitleTxT={this.state.literals.collapsibleTitleTxT}
                    />
                  </Box>
                )}
              </CollapsibleElement>
            </Box>
            <Box pt={3} px={[2, 2, 0]}>
              <CollapsibleElement 
                title={this.state.literals.optionalFeatureBTxT}
                subtitle={this.state.literals.optionalLabelTxT}
                altInfo={this.state.literals.altInfoFeatureTxT}
              >
                {this.state.featuresA.map(feature => 
                  <Box mb={2}>
                    <FeatureBlock
                      title={feature.title}
                      photoImg={this.getImage(feature.id)}
                      featureBody={feature.body}
                      featureItems={feature.featureItems}
                      additionalInfo={feature.altInfo}
                      collapsibleHeaderTxT={this.state.literals.collapsibleHeaderTxT}
                      collapsibleTitleTxT={this.state.literals.collapsibleTitleTxT}
                    />
                  </Box>
                )}
              </CollapsibleElement>
            </Box>
          </Tabs.TabPane>
        </Tabs>
      </section>
    )
  }
}
