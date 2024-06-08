import logo from './logo.svg';
import './App.css';
import Counter from './counter';

function App() {
  return (
    <div>
       <Counter initialCount={0}></Counter>
       <Counter initialCount={5}></Counter>
      <Counter initialCount={11}></Counter>
    </div>
  );
}

export default App;
