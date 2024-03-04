import React, {useState} from 'react'
import Distribution from '../components/Distribution'
import ExpScreen from './ExpScreen'
import ExpGenerator from './ExpGenerator'
const Experiment = () => {
  const [distributions, setDistributions] = useState([
    new Distribution({
      prompt: "Toss a fair coin once. Find the probability of getting a head",
      theory: "Bernoulli Distribution",
      notation: "Bern",
      pvalue: 0.5,
      nvalue: 1,
      expectedvalue: 0.5,
      variance: 0.25,
    }),
    new Distribution({
      prompt: "You have 0.15 chance of getting a head when you toss an unfair coin. Find the probability of first getting a head in 8 tries",
      theory: "Geometric Distribution",
      notation: "Geo",
      pvalue: 0.15,
      nvalue: 8,
      expectedvalue: (1/0.15).toFixed(2),
      variance: (0.85/(0.15*0.15)).toFixed(2),
    }),
    new Distribution({
      prompt: "Toss a fair coin 17 times.",
      theory: "Binominal Distribution",
      notation: "Bern",
      pvalue: 0.5,
      nvalue: 17,
      expectedvalue: 6,
      variance: 3.6,
    }),
    new Distribution({
      prompt: "Toss an unfair coin 100 times.",
      theory: "Binominal Distribution",
      notation: "Bern",
      pvalue: 0.67,
      nvalue: 100,
      expectedvalue: 67,
      variance: ((67)*(1-0.67)).toFixed(2),
    }),
  ])
  const addDistribution = (newDistribution) => {
    setDistributions([...distributions, newDistribution]);
  };
  // const deleteDistribution = (theory) => {
  //   setDistributions(distributions.filter((distribution) => distribution.theory !== 
  //   theory))
  // }
  return (
    <div className='ExperimentContainer'>
    <ExpGenerator addDistribution={addDistribution}/>
      {distributions.map(
        (distribution) => (
          <ExpScreen
            prompt = {distribution.prompt}
            theory = {distribution.theory}
            notation = {distribution.notation}
            pvalue = {distribution.pvalue}
            nvalue = {distribution.nvalue}
            expectedvalue = {distribution.expectedvalue}
            variance = {distribution.variance}
          />
        )
      )}
    </div>
  )
}

export default Experiment
