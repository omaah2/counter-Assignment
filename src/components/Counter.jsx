import React, { useState, useEffect } from 'react';
import {
    ChevronUp,
    ChevronsUp,
    RotateCcw,
    Hash,
    ChevronDown,
    ChevronsDown,
} from 'react-feather';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrementOne = () => {
    setCount(count + 1);
  };

  const handleIncrementTen = () => {
    setCount(count + 10);
  };

  const handleReset = () => {
    setCount(0);
  };

  const handleRandomize = () => {
    const randomValue = Math.floor(Math.random() * 100) + 1;
    setCount(randomValue);
  };

  const handleDecrementTen = () => {
    setCount(count - 10);
  };

  const handleDecrementOne = () => {
    setCount(count - 1);
  };

  // Update the document title with the latest count
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);
    const mainStyle = {
        backgroundColor: '#BAA8C5',
        display: 'flex',
        justifyContent: 'center',
        minHeight: '100vh',
    }
  
    const counterStyle = {
        display: 'flex',
        backgroundColor: '#FFFFFF',
        borderRadius: '5px',
        boxShadow: '0px 0px 0px rgba(0, 0, 0, 0.5)',
        padding: '8px',
        margin: '120px',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '50vh',
        width: '80%',
        maxWidth: '400px',
    }
     const countStyle = {
    fontSize: '50px',   
    marginTop: '30px',
    display: 'flex',
    paddingBottom: '10px',
    justifyContent: 'center',
    fontWeight: 'bold',    
    color: 'blue',         
  };

    const buttonStyle = {
    borderRadius: '5px',
    backgroundColor: '##808080',
    color: '#000',
    padding: '8px 15px',
    margin: '3px',
    cursor: 'pointer',
  };

  return (
    <main style={mainStyle}>
      <div style={counterStyle}>
      <div>
        <h1>Current Value:</h1>
      <span style={countStyle}>{count}</span>
      </div>
     <div>
      <button onClick={handleIncrementOne} style={buttonStyle}>
        <ChevronUp />
      </button>
      <button onClick={handleIncrementTen} style={buttonStyle}>
        <ChevronsUp />
      </button>
      <button onClick={handleReset} style={buttonStyle}>
        <RotateCcw />
      </button>
      <button onClick={handleRandomize} style={buttonStyle}>
        <Hash />
      </button>
      <button onClick={handleDecrementTen} style={buttonStyle}>
        <ChevronsDown />
      </button>
      <button onClick={handleDecrementOne} style={buttonStyle}>
        <ChevronDown/>
      </button>
    </div>
  </div>
</main>
  );
};

export default Counter;
