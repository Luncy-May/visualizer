import React from 'react'
import ExpBody from './ExpBody'
import ExpHeader from './ExpHeader'
const ExpScreen = ({prompt,theory, notation, pvalue,nvalue, expectedvalue, variance}) => {
  return (
    <div className='ExpScreen'>
      <ExpHeader 
        prompt = {prompt}
        theory = {theory}
        notation = {notation}
        pvalue = {pvalue}
        nvalue = {nvalue}
        expectedvalue={expectedvalue}
        variance={variance}
      />
      <ExpBody 
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

export default ExpScreen
