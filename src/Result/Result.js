import React, {useEffect, useState} from 'react'
import ResultHeader from './ResultHeader'
import ResultContent from './ResultContent'
const Result = ({prompt,theory, notation, pvalue,nvalue, expectedvalue, variance, ItemsTotal, experimentName}) => {
  const [numberSuccess, setNumberSuccess] = useState(0)
  useEffect(() => {
    // Update numberSuccess when ItemsTotal changes
    let successCount = 0;
    ItemsTotal.forEach((ItemsRow) => {
      ItemsRow.forEach((Item) => {
        if (Item.success === 1) {
          successCount++;
        }
      });
    });
    setNumberSuccess(successCount);
  }, [ItemsTotal]);
  
  return (
    <div className='Result'>
     <ResultHeader/>
    <ResultContent  numberSuccess = {numberSuccess} experimentName = {experimentName}/>
    </div>
  )
}

export default Result
