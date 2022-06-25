import React, { useState } from "react";

function App() {
  // React Hooks - useState
  const [red, green, blue] = useState(123, 34, 56);
  console.log(green);

  function increase() {}
  return (
    <div className="container">
      <h1>{state}</h1>
      <button onClick={increase}>+</button>
    </div>
  );
}
export default App;
