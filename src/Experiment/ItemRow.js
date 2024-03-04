import React from 'react'
import Item from '../components/Item'
const ItemRow = ({ItemRow}) => {
  return (
    <div className = "ItemRow">
      {ItemRow.map((Itemm)=> (
        <Item 
        id = {Itemm.id}
        color = {Itemm.color}
        colorPercent={0.5}
        shape = {Itemm.shape}
        success= {Itemm.success}
         />
        ))}
    </div>
  )
}

export default ItemRow
