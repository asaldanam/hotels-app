import React, { memo } from 'react'
import PropTypes from 'prop-types'
import css from '../../assets/styles/components/c-button.module.scss';

const Button = memo(function Button(props) {

  const cx = {
    button: `${css.button} ${props.active ? css.button_active : ''}`
  }

  return (
    <button className={cx.button} type="button">
      {props.buttonTxt}
    </button>
  )
})

Button.propTypes = {
  buttonTxt: PropTypes.string,
  active: PropTypes.bool
}

export default Button
