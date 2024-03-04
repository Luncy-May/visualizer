import React, { useState } from 'react';
import Distribution from '../components/Distribution';
const ExpGenerator = ({ addDistribution }) => {
  const [prompt, setPrompt] = useState('');
  const [theory, setTheory] = useState('');
  const [notation, setNotation] = useState('');
  const [pvalue, setPvalue] = useState('');
  const [nvalue, setNvalue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a new Distribution class instance with input values
    const newDistribution = new Distribution({
      prompt: prompt,
      theory: theory,
      notation: notation,
      pvalue: parseFloat(pvalue),
      nvalue: parseInt(nvalue)
    });
    newDistribution.setExpectedValue()
    newDistribution.setVariance()
    // Add the new distribution to the list of generated distributions
    addDistribution(newDistribution);

    // Clear the form fields after submission
    setTheory('');
    setNotation('');
    setPvalue('');
    setNvalue('');
    setPrompt('');
  };
  const handleTheoryChange = (event) => {
    setTheory(event.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className='ExperimentGenerator'>
        <label htmlFor="prompt">Prompt:</label>
        <textarea 
          type="text" 
          rows="5"
          cols="20"
          id="prompt" 
          placeholder="Enter prompt/question" 
          value={prompt} 
          onChange={(e) => setPrompt(e.target.value)} 
        />
        <br></br>
        <label htmlFor="theory">Theory:</label>
        <select id="theory" value={theory} onChange={handleTheoryChange}>
          <option value="">Select Theory</option>
          <option value="Bernoulli Distribution">Bernoulli Distribution</option>
          <option value="Geometric Distribution">Geometric Distribution</option>
          <option value="Negative Binomial Distribution">Negative Binomial Distribution</option>
        </select>
        <br></br>
        <label htmlFor="notation">Notation:</label>
        <input 
          type="text" 
          id="notation" 
          placeholder="Enter notation" 
          value={notation} 
          onChange={(e) => setNotation(e.target.value)} 
        />
        <br></br>
        <label htmlFor="pvalue">Value of p:</label>
        <input 
          type="number" 
          id="pvalue" 
          placeholder="Enter value of p" 
          value={pvalue} 
          onChange={(e) => setPvalue(e.target.value)} 
        />
        <br></br>
        <label htmlFor="nvalue">Value of n:</label>
        <input 
          type="number" 
          id="nvalue" 
          placeholder="Enter value of n" 
          value={nvalue} 
          onChange={(e) => setNvalue(e.target.value)} 
        />
        <br></br>
        <button type="submit">Create Distribution</button>
      </form>
    </div>
  );
};

export default ExpGenerator;
