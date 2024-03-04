import React, {useState} from 'react'
import ItemRow from './ItemRow'
import GenerateButton from './GenerateButton'
const ExpVisualization = ({prompt,theory, notation, pvalue,nvalue, expectedvalue, variance}) => {
  const [ItemsTotal, setItemsTotal] = useState(generateItemsTotal());

  // Function to generate initial ItemsTotal
  function generateItemsTotal() {
    const newItemsTotal = [];
    for (let random = 0; random < nvalue / 5; random++) {
      let ItemsRow = [];
      for (let day = 0; day < 5; day++) {
        const num = random * 5 + day;
        if (num >= nvalue) break;
        const success = Math.random() <= pvalue ? 1 : 0;
        let individualItem = {
          id: num,
          color: "red",
          shape: "square",
          success: success,
        };
        ItemsRow.push(individualItem);
      }
      newItemsTotal.push(ItemsRow);
    }
    return newItemsTotal;
  }

  // Function to regenerate random success values
  const handleRegenerate = () => {
    const regeneratedItemsTotal = ItemsTotal.map((ItemsRow) =>
      ItemsRow.map((individualItem) => ({
        ...individualItem,
        success: Math.random() <= pvalue ? 1 : 0,
      }))
    );
    setItemsTotal(regeneratedItemsTotal);
  };
  return (
    <div>
      <div>
      {ItemsTotal.map((ItemsRow) =>(
        <ItemRow ItemRow ={ItemsRow}/>
      ))}
      </div>
      <div style ={{marginLeft:"80%"}}>
        <GenerateButton onClick={handleRegenerate}/>
      </div>
    </div>
  )
}

export default ExpVisualization
