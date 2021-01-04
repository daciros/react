import logo from './assets/img/logo.svg';
import './assets/css/App.css';

//importar componentes
import Login from './components/login/Login.js';

function App() {
  return (
    
    <div className="App">
      <header className="App-header">
      
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Para los mejores results
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className="components">
      <Login/>
    </div>
      </header>
    </div>
  );
}

export default App;
