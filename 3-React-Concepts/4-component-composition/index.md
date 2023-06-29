```jsx

import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Counter>
      <button onClick={() => setCount(count + 1)}>+</button>
      <ComponentB>
        <ComponentC count={count} />
      </ComponentB>
    </Counter>
  );
}

function Counter({ children }) {
  return <div>{children}</div>;
}

function ComponentB({ children }) {
  return <div>Layout{children}</div>;
}

function ComponentC({ count }) {
  return <div>{count}</div>;
}

export default App;
```
