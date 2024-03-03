import PropTypes from 'prop-types'
class Item {
  constructor([props]){
    this.color = props.color;
    this.shape = props.shape;
  }
}
Item.propTypes = {
  color: PropTypes.string,
  shape: PropTypes.string,
}
export default Item
