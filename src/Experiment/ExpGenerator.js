import React, { useState } from 'react';
import Distribution from '../components/Distribution';
const ExpGenerator = ({ addDistribution }) => {
  const [theory, setTheory] = useState('');
  const [notation, setNotation] = useState('');
  const [pvalue, setPvalue] = useState('');
  const [nvalue, setNvalue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a new Distribution class instance with input values
    const newDistribution = new Distribution({
      theory: theory,
      notation: notation,
      pvalue: parseFloat(pvalue),
      nvalue: parseInt(nvalue)
    });

    // Add the new distribution to the list of generated distributions
    addDistribution(newDistribution);

    // Clear the form fields after submission
    setTheory('');
    setNotation('');
    setPvalue('');
    setNvalue('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="theory">Theory:</label>
        <input 
          type="text" 
          id="theory" 
          placeholder="Enter theory" 
          value={theory} 
          onChange={(e) => setTheory(e.target.value)} 
        />

        <label htmlFor="notation">Notation:</label>
        <input 
          type="text" 
          id="notation" 
          placeholder="Enter notation" 
          value={notation} 
          onChange={(e) => setNotation(e.target.value)} 
        />

        <label htmlFor="pvalue">Value of p:</label>
        <input 
          type="number" 
          id="pvalue" 
          placeholder="Enter value of p" 
          value={pvalue} 
          onChange={(e) => setPvalue(e.target.value)} 
        />

        <label htmlFor="nvalue">Value of n:</label>
        <input 
          type="number" 
          id="nvalue" 
          placeholder="Enter value of n" 
          value={nvalue} 
          onChange={(e) => setNvalue(e.target.value)} 
        />

        <button type="submit">Create Distribution</button>
      </form>
    </div>
  );
};

export default ExpGenerator;
