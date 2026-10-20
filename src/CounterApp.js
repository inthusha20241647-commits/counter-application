import { useState } from "react";

const CounterApp = () => {
  const [count, setCount] = useState(0);
  const [randomNumber, setRandomNumber] = useState(null);

  const handleInc = () => {
    setCount(count + 1);
  };
  const handleDec = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const handleReset = () => {
    setCount(0);
  };
  const handleGenerate = () => {
    setRandomNumber(Math.floor(Math.random() * 100) + 1);
  };

  return (
    <main className="container">
      <h1 className="title">React Utility Dashboard</h1>
      <div className="sections">
        <section className="utility-card" aria-labelledby="counter-title">
          <h2 id="counter-title" className="section-title">
            Counter
          </h2>
          <p className="count" aria-live="polite">
            {count}
          </p>
          {count === 0 && (
            <p className="limit-message" role="status">
              Minimum limit reached
            </p>
          )}
          <div className="btns">
            <button onClick={handleInc} className="btn1">
              Increment
            </button>
            <button onClick={handleDec} className="btn2">
              Decrement
            </button>
          </div>
          <button onClick={handleReset} className="btn3">
            Reset
          </button>
        </section>

        <section className="utility-card" aria-labelledby="random-title">
          <h2 id="random-title" className="section-title">
            Random Number Generator
          </h2>
          <p className="random-number" aria-live="polite">
            {randomNumber === null ? "No number generated yet" : randomNumber}
          </p>
          <button onClick={handleGenerate} className="generate-button">
            Generate Random Number
          </button>
        </section>
      </div>
    </main>
  );
};
export default CounterApp;
