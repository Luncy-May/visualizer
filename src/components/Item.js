import React from 'react'
import PropTypes from 'prop-types'
const Item = ({id, color, shape}) => {
  return (
    <div className='Item'>
      ?
    </div>
  )
}

Item.propTypes = {
  color: PropTypes.string,
  shape: PropTypes.string,
}
export default Item
