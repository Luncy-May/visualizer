import React from 'react'
import ItemRow from './ItemRow'
const ExpVisualization = ({prompt,theory, notation, pvalue,nvalue, expectedvalue, variance}) => {
  let ItemsTotal = []
  for (let random = 0; random < nvalue / 5; random++){
    let ItemsRow = []
    for (let day = 0; day < 5; day++){
        const num = random * 5 + day 
        let individualItem = {
        id: num,
        color: "red",
        shape: "square",
        }
        ItemsRow.push(individualItem)
    }
    ItemsTotal.push(ItemsRow)
  }
  return (
    <div>
      {ItemsTotal.map((ItemsRow) =>(
        <ItemRow ItemRow ={ItemsRow}/>
      ))}
    </div>
  )
}

export default ExpVisualization
