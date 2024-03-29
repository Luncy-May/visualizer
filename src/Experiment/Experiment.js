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
      
    }),
    new Distribution({
      prompt: "You have 0.15 chance of getting a head when you toss an unfair coin. Find the probability of first getting a head in 8 tries",
      theory: "Geometric Distribution",
      notation: "Geo",
      pvalue: 0.15,
      nvalue: 8,
    }),
    new Distribution({
      prompt: "Toss a fair coin 17 times.",
      theory: "Binomial Distribution",
      notation: "Bern",
      pvalue: 0.5,
      nvalue: 17,
    }),
    new Distribution({
      prompt: "Toss an unfair coin 100 times.",
      theory: "Binomial Distribution",
      notation: "Bern",
      pvalue: 0.67,
      nvalue: 100,
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
