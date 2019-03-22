import React, { memo } from 'react'
import PropTypes from 'prop-types'
import css from '../../assets/styles/components/c-service-card.module.scss';
import { Box, Flex } from 'reflexbox';
import Button from './Button';

const ServiceCard = memo(function ServiceCard(props) {

  const cx = {
    serviceCard: `${css.serviceCard} ${props.selected ? css.serviceCard_selected : ''}`
  }

  return (
    <Flex className={cx.serviceCard} pt={3} pb={[3, 2]} px={[3, 2, 2]} column>
      <Box className={css.serviceCardTitle} mb={2}>
        {props.title}
      </Box>
      <Box mb={2}>
        <hr className={css.serviceCardHr}/>
      </Box>
      <Box>
        <ul className={css.serviceCardList}>
          {props.features.map(feature =>
            <li key={feature}>{feature}</li>    
          )}
        </ul>
      </Box>
      <Box mt={'auto'} pt={3}>
        <Button buttonTxt={props.buttonTxt} active={props.selected}/>
      </Box>
    </Flex>
  )
})

ServiceCard.defaultProps = {
  features: []
};

ServiceCard.propTypes = {
  title: PropTypes.string,
  features: PropTypes.arrayOf(PropTypes.string),
  buttonTxt: PropTypes.string,
  selected: PropTypes.bool
}

export default ServiceCard
