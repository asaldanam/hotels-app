import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Flex, Box } from 'reflexbox';
import css from '../../assets/styles/components/c-card-holder.module.scss';
import starIcon from '../../assets/img/ic-24-accent3-start.svg';

const CardHolder = memo(function CardHolder(props) {
  return (
    <article className={css.cardHolderContainer}>
      <Box p={[3, 3, 3]}>
        <Flex wrap justify={'center'} align={'center'}>
          <Box w={[1, 'auto']} mb={[2, 0]} mr={[0, 3]}>
            <div className={css.cardHolderTitle}>
              {props.hotelTxt} <span className="u-bold">{props.hotelName}</span>
            </div>
          </Box>
          <Box className={css.cardHolderStarContainer} w={[1, 'auto']} alignSelf={'center'}>
            {Array(props.stars).fill(null).map((star, index) => 
              <img key={index} className={css.cardHolderStar} src={starIcon} alt="star" />
            )}
          </Box>
        </Flex>
      </Box>
      <Box p={[2, 2, 3]}>
        {props.children}
      </Box>
    </article>
  )
})

CardHolder.propTypes = {
  hotelTxt: PropTypes.string,
  hotelName: PropTypes.string,
  stars: PropTypes.number
}

export default CardHolder
