import MyProps from './components/02MyProps';
import './App.css';

function App() {
  return (
    <div className="App">
      <MyProps nome="Guilherme Leite" idade={18} curso="CC" />
    </div>
  );
}
/*
function App() {
  return (
    <div className="App">
      <HelloWorld />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Calculadora />
    </div>
  );
}
*/
export default App;
