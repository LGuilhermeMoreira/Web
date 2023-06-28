import logo from './logo.svg';
import './App.css';
import Questao01X from './components/Questao01/Questao01';
import Questao02 from './components/Questao02/Questao02';
import Questao03 from './components/Questao03/Questao03';

function App() {
  return (
    <div className="App">
      <Questao01X/>
      <tr/>
      <Questao02/>
      <tr/>
      <Questao03 />
      <tr/>
    </div>
  );
}

export default App;
