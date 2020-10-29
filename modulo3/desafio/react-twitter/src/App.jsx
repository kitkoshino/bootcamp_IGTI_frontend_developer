import './App.scss';
import Home from './views/Home';

function App() {
  return (
    <div className="App">
      <aside className="sidebar">
        <h1>left</h1>
      </aside>
      <main>
        <Home />
      </main>
      <aside className="right-bar">
      <h1>right</h1>
      </aside>
    </div>
  );
}

export default App;
