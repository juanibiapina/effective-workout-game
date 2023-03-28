import React from "react";
import useStore from "./app/store";

const App = () => {
  const count = useStore(state => state.count);
  const increment = useStore(state => state.increment);
  const decrement = useStore(state => state.decrement);

  return (
    <div className="App">
      <h1>Counter: {count}</h1>
      <button onClick={() => increment(1)}>Increment</button>
      <button onClick={() => decrement(1)}>Decrement</button>
    </div>
  );
}

export default App;
