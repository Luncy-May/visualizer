import React from 'react'
import ItemRow from './ItemRow'
import GenerateButton from './GenerateButton'
const ExpVisualization = ({prompt,theory, notation, pvalue,nvalue, expectedvalue, variance, ItemsTotal,onClick}) => {
  return (
    <div>
      <div>
      {ItemsTotal.map((ItemsRow) =>(
        <ItemRow ItemRow ={ItemsRow}/>
      ))}
      </div>
      <div style ={{float:'right'}}>
        <GenerateButton onClick={onClick}/>
      </div>
      <br></br>
    </div>
  )
}

export default ExpVisualization
