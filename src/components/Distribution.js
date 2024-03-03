// import Theory from './Theory'
// import Notation from './Notation'
// import P from './P'
// import N from './N'
import PropTypes from 'prop-types'
class Distribution {
  constructor(props) {
    this.theory = props.theory;
    this.notation = props.notation;
    this.pvalue = props.pvalue;
    this.nvalue = props.nvalue;
  }
}
Distribution.propTypes = {
  theory: PropTypes.string,
  notation: PropTypes.string,
  pvalue: PropTypes.number,
  nvalue: PropTypes.number,
}
export default Distribution
