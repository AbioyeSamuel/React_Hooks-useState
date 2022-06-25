import React, { useState } from "react";

function App() {
  // React Hooks - useState
  const state = useState(123);
  console.log(state);

  function increase() {}
  return (
    <div className="container">
      <h1>{state}</h1>
      <button onClick={increase}>+</button>
    </div>
  );
}
export default App;
