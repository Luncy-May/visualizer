import React from 'react'
import ExpVisualization from './ExpVisualization'
import ExpVariance from './ExpVariance'
import ExpExpectedValue from './ExpExpectedValue'
const ExpBody = ({prompt,theory, notation, pvalue,nvalue, expectedvalue, variance}) => {
  return (
    <div>
    <ExpVisualization
        prompt = {prompt}
        theory = {theory}
        notation = {notation}
        pvalue = {pvalue}
        nvalue = {nvalue}
        expectedvalue={expectedvalue}
        variance={variance}
     />
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
  )
}

export default ExpBody
