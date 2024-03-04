import React from 'react'
import Item from '../components/Item'
const ItemRow = ({ItemRow}) => {
  return (
    <div className = "ItemRow">
      {ItemRow.map((Itemm)=> (
        <Item 
        id = {Itemm.id}
        color = {Itemm.color}
        shape = {Itemm.shape}
         />
        ))}
    </div>
  )
}

export default ItemRow
