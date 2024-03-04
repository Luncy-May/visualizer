import React from 'react'
import ExpVisualization from './ExpVisualization'
import ExpVariance from './ExpVariance'
import ExpExpectedValue from './ExpExpectedValue'
const ExpBody = ({prompt,theory, notation, pvalue,nvalue, expectedvalue, variance}) => {
  return (
    <div className='ExpBody'>
      <div className='ExpMainBody'>
      <h2 style ={{color: 'black', fontWeight: 'bold', marginLeft:'60px', display:'inline-block'}}>Experiment Visualization</h2>
      <ExpVisualization
          prompt = {prompt}
          theory = {theory}
          notation = {notation}
          pvalue = {pvalue}
          nvalue = {nvalue}
          expectedvalue={expectedvalue}
          variance={variance}
      />
      </div>
     <div className='ExpSideBody'>
     <ExpExpectedValue
        prompt = {prompt}
        theory = {theory}
        notation = {notation}
        pvalue = {pvalue}
        nvalue = {nvalue}
        expectedvalue={expectedvalue}
        variance={variance}
     />
     <ExpVariance
        prompt = {prompt}
        theory = {theory}
        notation = {notation}
        pvalue = {pvalue}
        nvalue = {nvalue}
        expectedvalue={expectedvalue}
        variance={variance}
     />
     </div>
     
    </div>
  )
}

export default ExpBody
