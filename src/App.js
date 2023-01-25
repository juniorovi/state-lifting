import './App.css';
import Child from './Components/State-Lifting/Child';

function App() {
  const data = "xyz";
  return (
    <div className="App">
      <h1>I am from Parent Component</h1>

      <Child info ={data}></Child>
    </div>
  );
}

export default App;
