import React from 'react'

const ExpHeader = ({prompt,theory, notation, pvalue,nvalue,expectedvalue, variance}) => {
  return (
    <div className='ExpHeader'>
      <h2>Prompt: {prompt}</h2>
      <h2>Theory: {theory}  ({notation})</h2>
       <h2>p value: {pvalue} , n value: {nvalue}</h2>
      <h3>Expected Value: {expectedvalue} , Variance: {variance}</h3>
      <p>For the experiment Visualization below, green means success while red means the versus</p>
      <p>Click the "Generate" button to get new result. Have Fun!</p> 
    </div>
  )
}

export default ExpHeader
