import React from 'react'

const ExpHeader = ({theory, notation, pvalue,nvalue}) => {
  return (
    <div className='ExpHeader'>
      <h1>Alright this is a theory </h1>
      <h2>Theory: {theory}</h2>
      <h2>Notation: {notation}</h2>
      <h2>pvalue: {pvalue}</h2>
      <h2>nvalue: {nvalue}</h2>
    </div>
  )
}

export default ExpHeader
