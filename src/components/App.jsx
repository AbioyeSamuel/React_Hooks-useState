import React, { useState } from "react";

function App() {
  // React Hooks - useState
  const [count, setCount] = useState(123);

  console.log(count);

  function increase() {
    setCount(34);
  }
  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
    </div>
  );
}
export default App;
