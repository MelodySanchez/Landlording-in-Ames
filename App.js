import cowlogo from './cowlogo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={cowlogo} className="App-logo" alt="cow logo"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Farm Management
        </a>
        <p>
          Melody's Website
        </p>
      </header>
   
    </div>
  );
}

export default App;
