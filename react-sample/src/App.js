import logo from './logo.svg';
import './App.css';
import { Header } from './Header'
import Article from './Article';

// import test from 'Test.js'

function App() {
  return (
    <>
      <div className="App">
        <Header logo={logo}/>
      </div>
      <Article />
    </>
  );
}

export default App;
