import './App.css';
import { Localtime, News, Weather, Transit } from './components/index';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Header-logo" alt="logo" />
        <h1 className="Header-title"> ITHS Dashboard </h1>
        <Localtime className="Header-time" />
      </header>
      <main>
        <div className="App-main">
          <News className="News"/>
          <Weather className="Weather"/>
          <Transit className="Transit"/>
        </div>
      </main>
    </div>
  );
}

export default App;
