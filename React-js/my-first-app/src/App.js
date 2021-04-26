import React from 'react';
import './App.css';

function App() {

  const [counter,setCounter] = React.useState(0);

  return (
    <div class="container">
      <div>
        <h1 id="disp">{ counter }</h1>
      </div>
      <div>
        <button id="btn" onClick ={ () => setCounter(counter + 1)}>Increment</button>
      </div>
    </div>

  );
}

export default App;
