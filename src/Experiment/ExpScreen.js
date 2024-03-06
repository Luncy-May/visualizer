import React, {useState} from 'react'
import ExpBody from './ExpBody'
import ExpHeader from './ExpHeader'
import Result from '../Result/Result'
import RecordButton from './RecordButton'
const ExpScreen = ({prompt,theory, notation, pvalue,nvalue, expectedvalue, variance}) => {
  const [ItemsTotal, setItemsTotal] = useState(generateItemsTotal());
  const [experimentName, setExperimentName] = useState('no name entered')
  const [newName,setNewName] = useState('')
  const handleSubmit = (event) =>{
    event.preventDefault();
    setExperimentName(newName)
  }
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
    <div className='ExpScreen'>
      <div className='ExpContent'>
      <form onSubmit={handleSubmit} style ={{textAlign: 'center',margin: '10px'}}>
        <label style ={{fontWeight: 'bold', fontSize:'25px'}} htmlFor="newName">Customized Experiment Name:</label><br></br>
        <input 
          type="text" 
          id="newName" 
          placeholder="enter a name" 
          value={newName} 
          required
          onChange={(e) => setNewName(e.target.value)} 
          style = {{margin:'10px'}}
        />
        <RecordButton onClick={handleSubmit} experimentName = {experimentName}/>
      </form>
        <ExpHeader 
          prompt = {prompt}
          theory = {theory}
          notation = {notation}
          pvalue = {pvalue}
          nvalue = {nvalue}
          expectedvalue={expectedvalue}
          variance={variance}
        />
        <ExpBody 
          prompt = {prompt}
          theory = {theory}
          notation = {notation}
          pvalue = {pvalue}
          nvalue = {nvalue}
          expectedvalue={expectedvalue}
          variance={variance}
          ItemsTotal = {ItemsTotal}
          onClick = {handleRegenerate}
        />
      </div>
      <div className='ExpResult'>
        <Result
          prompt = {prompt}
          theory = {theory}
          notation = {notation}
          pvalue = {pvalue}
          nvalue = {nvalue}
          expectedvalue={expectedvalue}
          variance={variance}
          ItemsTotal = {ItemsTotal}
          experimentName = {experimentName}
        />
      </div>
    </div>
  )
}

export default ExpScreen
