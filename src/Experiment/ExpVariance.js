import React from 'react'
import ItemRow from './ItemRow'
const ExpVariance = ({prompt,theory, notation, pvalue,nvalue, expectedvalue, variance}) => {
    const ItemsTotal = []
    for (let random = 0; random < variance / 5; random++){
        let ItemsRow = []
        for (let day = 0; day < 5; day++){
            const num = random * 5 + day 
            if (num > variance - 1){break}
            let individualItem = {
            id: num,
            color: "rgb(103, 103, 223)",
            shape: "square",
            }
            ItemsRow.push(individualItem)
        }
        ItemsTotal.push(ItemsRow)
      }
  return (
    <div className='ExpVariance'>
        <h2>Var(X) = {variance}</h2>
        {ItemsTotal.map((ItemsRow) =>(
            <ItemRow ItemRow ={ItemsRow}/>
          ))}
    </div>
  )
}

export default ExpVariance
