import React from 'react'

const ExpHeader = ({prompt,theory, notation, pvalue,nvalue,expectedvalue, variance}) => {
  return (
    <div className='ExpHeader'>
      <h2>Prompt: {prompt}</h2>
      <h2>Theory: {theory}  ({notation})</h2>
       <h2>p value: {pvalue} n value: {nvalue}</h2>
      <h3>Expected Value: {expectedvalue} , Variance: {variance}</h3>
    </div>
  )
}

export default ExpHeader
