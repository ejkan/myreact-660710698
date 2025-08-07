import logo from './Vue_logo.svg';
import './App.css';
import Hellu from "./Hellu"
import Badbye from "./Badbye"
import JSXExamples from './components/JSXExamples';

function App() {
  return (
    <div className="App">
      <Hellu/>
      <JSXExamples/>
      <Badbye/>
    </div>
  );
}

export default App;
