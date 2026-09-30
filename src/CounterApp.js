import { useState } from "react";

const CounterApp = () => {
  const [count, setCount] = useState(0);

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

  return (
    <>
      <div className="container">
        <h1 className="title">Counter App</h1>
        <h1 className="count">{count}</h1>
        <div className="btns">
          <button onClick={handleInc} className="btn1">
            +
          </button>
          <button onClick={handleDec} className="btn2">
            -
          </button>
          <br />
        </div>

        <button onClick={handleReset} className="btn3">
          Reset
        </button>
      </div>
    </>
  );
};
export default CounterApp;
