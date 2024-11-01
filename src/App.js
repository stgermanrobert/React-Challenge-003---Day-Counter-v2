import { useState } from "react";
import "./styles.css";

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

  function handleCountMinus() {
    setCount((c) => c - step);
  }

  function handleCountPlus() {
    setCount((c) => c + step);
  }

  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  return (
    <div>
      <div>
        <input
          type="range"
          min="1"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        ></input>
        <span>{step}</span>
      </div>
      <div>
        <button onClick={handleCountMinus}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        ></input>
        <button onClick={handleCountPlus}>+</button>
      </div>
      <div>
        <p>
          {count === 0 && `Today is `}
          {count > 0 &&
            `${count} ${count === 1 ? "day" : "days"} from today will be `}
          {count < 0 && `${-count} ${count === -1 ? "day" : "days"} ago was `}
          {date.toDateString()}
        </p>
      </div>

      {(count !== 0 || step !== 1) && (
        <div>
          <button onClick={handleReset}>RESET</button>
        </div>
      )}
    </div>
  );
}
