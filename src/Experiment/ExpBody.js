import React from 'react'
import ExpVisualization from './ExpVisualization'
import ExpVariance from './ExpVariance'
import ExpExpectedValue from './ExpExpectedValue'
const ExpBody = ({prompt,theory, notation, pvalue,nvalue, expectedvalue, variance, ItemsTotal, onClick}) => {
  return (
    <div className='ExpBody'>
      <div className='ExpMainBody'>
      <h2 style ={{color: 'black', fontWeight: 'bold', textAlign:'center', marginLeft:'95px', display:'inline-block'}}>Experiment Visualization</h2>
      <div className='ExpVisualization'>
      <ExpVisualization
          prompt = {prompt}
          theory = {theory}
          notation = {notation}
          pvalue = {pvalue}
          nvalue = {nvalue}
          expectedvalue={expectedvalue}
          variance={variance}
          ItemsTotal = {ItemsTotal}
          onClick = {onClick}
      />
      </div>
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
