import React, {useState} from 'react'
import Distribution from '../components/Distribution'
import ExpScreen from './ExpScreen'
import ExpGenerator from './ExpGenerator'
const Experiment = () => {
  const [distributions, setDistributions] = useState([
    new Distribution({
      prompt: "noasdft",
      theory: "Bernoulli Distribution",
      notation: "Bern",
      pvalue: 0.5,
      nvalue: 1,
      expectedvalue: 0.5,
      variance: 0.25,
    }),
    new Distribution({
      prompt: "nooo",
      theory: "Geometric Distribution",
      notation: "Geo",
      pvalue: 0.15,
      nvalue: 10,
      expectedvalue: (1/0.15).toFixed(2),
      variance: (0.85/(0.15*0.15)).toFixed(2),
    }),
    new Distribution({
      prompt: "nSDFDSFSF",
      theory: "Binominal Distribution",
      notation: "Bern",
      pvalue: 0.4,
      nvalue: 15,
      expectedvalue: 6,
      variance: 3.6,
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
    <div>
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
