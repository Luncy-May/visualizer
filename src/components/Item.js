import React from 'react'
import PropTypes from 'prop-types'
const Item = ({id, color, colorPercent, shape, success}) => {
  if (success === 1){color = "green"}
  return (
    <div className='Item' style={{backgroundColor: color}}>
    </div>
  )
}

Item.propTypes = {
  color: PropTypes.string,
  shape: PropTypes.string,
}
export default Item
