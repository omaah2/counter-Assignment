import React, { useState, useEffect } from 'react';
import {
  ChevronUp,
  ChevronsUp,
  RotateCcw,
  Hash,
  ChevronDown,
  ChevronsDown,
} from 'react-feather';
import './Counter.css';

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

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <main className="main-container">
      <div className="counter-container">
        <div>
          <h1>Current Value:</h1>
          <span className="count-value">{count}</span>
        </div>
        <div>
          <button onClick={handleIncrementOne} className="button-style">
            <ChevronUp />
          </button>
          <button onClick={handleIncrementTen} className="button-style">
            <ChevronsUp />
          </button>
          <button onClick={handleReset} className="button-style">
            <RotateCcw />
          </button>
          <button onClick={handleRandomize} className="button-style">
            <Hash />
          </button>
          <button onClick={handleDecrementTen} className="button-style">
            <ChevronsDown />
          </button>
          <button onClick={handleDecrementOne} className="button-style">
            <ChevronDown />
          </button>
        </div>
      </div>
    </main>
  );
};

export default Counter;
