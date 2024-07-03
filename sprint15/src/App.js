import logo from './logo.svg';
import './App.css';
import Test1 from './Test1.js';
import Test2 from './Test2.jsx';
import Test3 from './Test3.jsx';
import MyForm from './MyForm.jsx';
import MyForm2 from './MyForm2.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Test1></Test1>
        <Test2></Test2>
        <Test3></Test3>
        <Test3></Test3>
        <Test3></Test3>
        <MyForm></MyForm>
        <MyForm name="SkillBrain"></MyForm>
        <MyForm2 name="Ford"></MyForm2>
        <MyForm2></MyForm2>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
