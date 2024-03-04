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
    this.expectedvalue = props.expectedvalue;
    this.variance = props.variance;
  }
  setExpectedValue = () => {
    if (this.theory === "Bernoulli Distribution"){
      this.expectedvalue = this.pvalue.toFixed(2);
    }else if(this.theory === "Binomial Distribution"){
      this.expectedvalue = (this.nvalue * this.pvalue).toFixed(2);
    }else if(this.theory === "Geometric Distribution"){
      this.expectedvalue = (1/this.pvalue).toFixed(2);
    }else if(this.theory === "Negative Binomial Distribution"){
      this.expectedvalue = (this.rvalue * this.pvalue).toFixed(2);
    }
  }
  setVariance = () => {
    if (this.theory === "Bernoulli Distribution"){
      this.variance = (this.pvalue * (1-this.pvalue)).toFixed(2);
    }else if(this.theory === "Binomial Distribution"){
      this.varianec = (this.nvalue * this.pvalue * (1-this.pvalue)).toFixed(2);
    }else if(this.theory === "Geometric Distribution"){
      this.variance = ((1-this.pvalue)/(this.pvalue*this.pvalue)).toFixed(2);
    }else if(this.theory === "Negative Binomial Distribution"){
      this.variance = ((this.rvalue * (1-this.pvalue)) /(this.pvalue*this.pvalue)).toFixed(2);
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
