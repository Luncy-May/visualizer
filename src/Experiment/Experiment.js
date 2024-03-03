import React, {useState} from 'react'
import Distribution from '../components/Distribution'
import ExpScreen from './ExpScreen'
import ExpGenerator from './ExpGenerator'
const Experiment = () => {
  const [distributions, setDistributions] = useState([
    new Distribution({
      theory: "Bernoulli Distribution",
      notation: "Bern",
      pvalue: 0.5,
      nvalue: 25
    }),
    new Distribution({
      theory: "Geometric Distribution",
      notation: "Geo",
      pvalue: 0.15,
      nvalue: 10
    }),
    new Distribution({
      theory: "Negative Binomial Distribution",
      notation: "Neg",
      pvalue: 0.3,
      nvalue: 20
    })
  ])
  const addDistribution = (newDistribution) => {
    setDistributions([...distributions, newDistribution]);
  };
  return (
    <div>
    <ExpGenerator addDistribution={addDistribution}/>
      {distributions.map(
        (distribution) => (
          <ExpScreen
            theory = {distribution.theory}
            notation = {distribution.notation}
            pvalue = {distribution.pvalue}
            nvalue = {distribution.nvalue}
          />
        )
      )}
    </div>
  )
}

export default Experiment
