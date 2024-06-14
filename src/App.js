import { useState } from "react";
import "./index.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  function addCount() {
    setCount(count + step);
  }

  function subCount() {
    setCount(count - step);
  }

  function handleReset() {
    setStep(1);
    setCount(0);
  }

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div>
      <input
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
        type="range"
        min={0}
        max={10}
      />
      {step}
      <br></br>
      <button onClick={subCount}>-</button>
      <input
        value={count}
        onChange={(e) => setCount(Number(e.target.value))}
        type="text"
      />
      <button onClick={addCount}>+</button>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      {(step !== 1 || count !== 0) && (
        <button onClick={handleReset} type="reset">
          reset
        </button>
      )}
    </div>
  );
}
