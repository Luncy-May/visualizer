import React from 'react'
import ItemRow from './ItemRow'
const ExpExpectedValue = ({prompt,theory, notation, pvalue,nvalue, expectedvalue, variance}) => {
    const ItemsTotal = []
    for (let random = 0; random < expectedvalue / 5; random++){
        let ItemsRow = []
        for (let day = 0; day < 5; day++){
            const num = random * 5 + day 
            if (num > expectedvalue-1){break}
            let individualItem = {
            id: num,
            color: "rgb(37, 172, 123)",
            shape: "square",
            }
            ItemsRow.push(individualItem)
        }
        ItemsTotal.push(ItemsRow)
      }
      return (
        <div  className='ExpExpectedValue'>
          <h2>E(X) = {expectedvalue}</h2>
          {ItemsTotal.map((ItemsRow) =>(
            <ItemRow ItemRow ={ItemsRow}/>
          ))}
        </div>
      )
}

export default ExpExpectedValue
