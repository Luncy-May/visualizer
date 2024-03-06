// import Theory from './Theory'
// import Notation from './Notation'
// import P from './P'
// import N from './N'
import PropTypes from 'prop-types'
class Distribution {
  constructor(props) {
    this.prompt = props.prompt;
    this.theory = props.theory;
    this.notation = props.notation;
    this.pvalue = props.pvalue;
    this.nvalue = props.nvalue;
    this.rvalue = 10000000; 
    this.expectedvalue = this.setExpectedValue();
    this.variance = this.setVariance();
  }
  setExpectedValue = () => {
    switch (this.theory) {
      case "Bernoulli Distribution":
        return this.pvalue.toFixed(2);
      case "Binomial Distribution":
        return (this.nvalue * this.pvalue).toFixed(2);
      case "Geometric Distribution":
        return (1 / this.pvalue).toFixed(2);
      case "Negative Binomial Distribution":
        return (this.rvalue * this.pvalue).toFixed(2);
      default:
        return 0;
    }
  }
  setVariance = () => {
    switch (this.theory) {
      case "Bernoulli Distribution":
        return (this.pvalue * (1 - this.pvalue)).toFixed(2);
      case "Binomial Distribution":
        return (this.nvalue * this.pvalue * (1 - this.pvalue)).toFixed(2);
      case "Geometric Distribution":
        return ((1 - this.pvalue) / (this.pvalue * this.pvalue)).toFixed(2);
      case "Negative Binomial Distribution":
        return ((this.rvalue * (1 - this.pvalue)) / (this.pvalue * this.pvalue)).toFixed(2);
      default:
        return 0;
    }
  }
}

Distribution.propTypes = {
  prompt: PropTypes.string,
  theory: PropTypes.string,
  notation: PropTypes.string,
  pvalue: PropTypes.number,
  nvalue: PropTypes.number,
}
export default Distribution
