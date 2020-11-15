import './App.scss';
import Header from './components/Header';
import Post from './components/Post';

function App() {
  return (
    <div className="App">
      <header>
        <h1>MovieGram</h1>
        <Header />
      </header>
      <main>
        <Post />
        <Post />

      </main>
    </div>
  );
}

export default App;
