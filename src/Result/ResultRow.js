import React from 'react'

const ResultRow = ({experimentName, numberSuccess}) => {
  let name;
  // Use conditional operator to assign the value of experimentName to name
  name = experimentName === '' ? "no name entered" : experimentName;
  return (
    <div className='ResultRow'>
      <div className='ResultRowContent'>
      <div><h2 style={{fontWeight:'bold'}}>{name}</h2></div>
      </div>
      <div className='ResultRowContent'>
      <div><h2 style={{fontWeight:'bold'}}>{numberSuccess}</h2></div>
      </div>
    </div>
  );
}

export default ResultRow
