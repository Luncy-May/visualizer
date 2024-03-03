import React from 'react'
import ExpBody from './ExpBody'
import ExpHeader from './ExpHeader'
const ExpScreen = ({theory, notation, pvalue,nvalue}) => {
  return (
    <div>
      <ExpBody 
        theory = {theory}
        notation = {notation}
        pvalue = {pvalue}
        nvalue = {nvalue}
      />
      <ExpHeader 
        theory = {theory}
        notation = {notation}
        pvalue = {pvalue}
        nvalue = {nvalue}
      />
    </div>
  )
}

export default ExpScreen
