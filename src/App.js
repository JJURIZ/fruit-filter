
import './App.css';

import FruitContainer from './components/FruitContainer';

function App() {
  const fruits = ['banana', 'watermellon', 'apple', 'orange', 'crab apple', 'honeydew mellon', 'grapes', 'grapefruit', 'kiwi', 'mango', 'mangosteen']
  return (
    <div className="App">
    <FruitContainer fruits={fruits}/>
    </div>
  );
}

export default App;
