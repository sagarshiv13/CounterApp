import { useState, useEffect } from "react";
import "./Counter.css";
export const Counter = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    if (count1 > 10) {
      setCount2(0);
    } else {
      setCount2(count1 * 2);
    }
  }, [count1]);

  return (
    <div>
      <h1 className="h1">Counter App</h1>
      <h1 className="h2">C1 = {count1}</h1>
      <h1>C2 = {count2}</h1>
      <button
        className="btn"
        onClick={() => {
          setCount1(count1 + 1);
        }}
      >
        Add
      </button>
    </div>
  );
};
