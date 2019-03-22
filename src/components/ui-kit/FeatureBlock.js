import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import css from '../../assets/styles/components/c-feature-block.module.scss';
import { Flex, Box } from 'reflexbox';

import iconArrow from '../../assets/img/ic-32-sec-arrow.svg';

const FeatureBlock = memo(function FeatureBlock(props) {

  const [isOpen, toogleOpen] = useState(false);

  const cx = {
    featureBlock: `${css.featureBlock} ${isOpen ? css.featureBlock_open : ''}`,
    featureBlockCollapsibleContent: `${css.featureBlockCollapsibleContent} ${isOpen ? css.featureBlockCollapsibleContent_animation : ''}`
  }

  return (
    <div className={cx.featureBlock}>
      <Flex style={{height: '100%', minHeight: 'inherit'}} wrap onClick={() => toogleOpen(!isOpen)}>
        {props.photoImg && props.photoImg.src ? 
        <Box w={['100%', '17rem']} className={css.featureBlockPhoto} style={{backgroundImage: `url(${props.photoImg.src})`}}></Box>
        : null}
        <Flex w={['100%', 'calc(100% - 17rem)']} column pt={2} pb={1} px={2}>
          <Box className={css.featureBlockTitle} mb={'4px'}> {props.title} </Box>
          <Box className={css.featureBlockBody}> {props.featureBody} </Box>
          <Box className={css.featureBlockCollapsibleLink} mt={'auto'} pt={1}> 
            {props.collapsibleHeaderTxT} <img className={css.featureBlockArrow} src={iconArrow} alt="collapsable" />
          </Box>
        </Flex>
      </Flex>
      {isOpen ? 
        <Box className={cx.featureBlockCollapsibleContent} pt={3} pb={2} px={2}>
          <Box mb={1} className={css.featureBlockCollapsibleTitle}>{props.collapsibleTitleTxT}</Box>
          <ul className={css.featureBlockCollapsibleList}>
            {props.featureItems.map(feature => 
              <li>
                <Box pr={2}>{feature}</Box>
              </li>
            )}
          </ul>
          <Box mt={2} className={css.featureBlockCollapsibleInfo}>{props.additionalInfo}</Box>
        </Box>
      : null}
    </div>
  )
})

FeatureBlock.defaultProps = {
  featureItems: []
}

FeatureBlock.propTypes = {
  title: PropTypes.string,
  photoImg: PropTypes.object,
  featureBody: PropTypes.string,
  featureItems: PropTypes.arrayOf(PropTypes.string),
  additionalInfo: PropTypes.string,
  collapsibleHeaderTxT: PropTypes.string,
  collapsibleTitleTxT: PropTypes.string,
}

export default FeatureBlock
