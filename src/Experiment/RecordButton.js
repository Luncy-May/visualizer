import React from 'react'

const RecordButton = ({onClick, experimentName}) => {
  console.log({experimentName})
  return (
    <div>
      <button className='GenerateButton' type = "submit" onClick={onClick}><p>Record</p></button>
    </div>
  )
}

export default RecordButton
