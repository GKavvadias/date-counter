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

  function addStep() {
    setStep(step + 1);
  }

  function subStep() {
    if (step > 1) setStep(step - 1);
  }

  function addCount() {
    setCount(count + step);
  }

  function subCount() {
    setCount(count - step);
  }

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div>
      <button onClick={subStep}>-</button>STEP:{step}
      <button onClick={addStep}>+</button>
      <br></br>
      <button onClick={subCount}>-</button>COUNT:{count}
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
    </div>
  );
}
