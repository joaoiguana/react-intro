// import logo from './logo.svg';
import './App.css';

import Hello from "./components/Hello";

const App = () => {
  return (
    <div className="App">
      <Hello name="João" age={29} />
      <Hello name="Carolina" age={25} />
      <Hello name="Manuel" age={67} />
    </div>
  );
}

export default App;
