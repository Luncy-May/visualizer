import React from 'react'
import ItemRow from './ItemRow'
const ExpExpectedValue = ({prompt,theory, notation, pvalue,nvalue, expectedvalue, variance}) => {
    // const ItemsTotal = []
    // for (let random = 0; random < expectedvalue / 5; random++){
    //     let ItemsRow = []
    //     for (let day = 0; day < 5; day++){
    //         const num = random * 5 + day 
    //         let individualItem = {
    //         id: num,
    //         color: "red",
    //         shape: "square",
    //         }
    //         ItemsRow.push(individualItem)
    //     }
    //     ItemsTotal.push(ItemsRow)
    //   }
      return (
        <div>
        {/* <div className='ExpExpectedValue'>
            <h2>E(X) = {expectedvalue}</h2>
        </div> */}
          {/* {ItemsTotal.map((ItemsRow) =>(
            <ItemRow ItemRow ={ItemsRow}/>
          ))} */}
        </div>
      )
}

export default ExpExpectedValue
