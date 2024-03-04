import React from 'react'

const GenerateButton = ({onClick}) => {
  return (
    <div>
      <button className='GenerateButton' onClick={onClick}>Generate</button>
    </div>
  )
}

export default GenerateButton
