import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { Flex, Box } from 'reflexbox';
import css from '../../assets/styles/components/c-collapsible-element.module.scss';

import iconArrow from '../../assets/img/ic-32-sec-arrow.svg';

const CollapsibleElement = memo(function CollapsibleElement(props) {

  const [isOpen, toogleOpen] = useState(false);

  const cx = {
    collapsibleElement: `${css.collapsibleElement} ${isOpen ? css.collapsibleElement_open : ''}`,
    collapsibleElementContent: `${css.collapsibleElementContent} ${isOpen ? css.collapsibleElementContent_animation : ''}`
  }

  return (
    <div className={cx.collapsibleElement}>
      <header className={css.collapsibleElementHeader} onClick={() => toogleOpen(!isOpen)}>
        <Flex align={'flex-end'} pt={[3, 2]} pb={2} px={2}> 
          <Box mr={['2px', '4px']} style={{alignSelf: 'flex-start'}}>
            <img className={css.collapsibleElementArrow} src={iconArrow} alt="collapsable" />
          </Box>
          <Box mr={[1, 2]} className={css.collapsibleElementTitle}>
            {props.title}
          </Box>
          <Box mt={[1]} className={css.collapsibleElementSubtitle}>
            {props.subtitle}
          </Box>
        </Flex>
        <div className={css.collapsibleElementAltInfo}>
          {props.altInfo.toUpperCase()}
        </div>
      </header>
      {isOpen ? 
        <Box className={cx.collapsibleElementContent} py={2} px={2}>
          {props.children}
        </Box>
      : null}
    </div>
  )
})

CollapsibleElement.defaultProps = {
  altInfo: ''
}

CollapsibleElement.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  altInfo: PropTypes.string
}

export default CollapsibleElement
