import React from 'react'
import ResultRow from './ResultRow'
const ResultContent = ({numberSuccess,experimentName}) => {
  return (
    <div className = "ResultContentHeader">
    <div className='ResultRow'>
    <div  className='ResultRowContent'><h2 style={{fontWeight:'bold'}}>Experiment</h2></div> 
    <div  className='ResultRowContent'><h2 style={{fontWeight:'bold'}}>Success</h2></div>
    </div>
      <ResultRow experimentName={experimentName} numberSuccess={numberSuccess}/>
    </div>
  )
}

export default ResultContent
