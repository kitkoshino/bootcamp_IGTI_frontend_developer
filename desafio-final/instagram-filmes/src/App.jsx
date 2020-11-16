import { useEffect, useState } from 'react';
import './App.scss';
import Header from './components/Header';
import Post from './components/Post';
import { listPosts } from './services/services';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    listPosts().then((res) => setPosts(res));
   
  }, []);

  return (
    <div className="App">
      <header>
        <h1>MovieGram</h1>
        <Header />
      </header>
      <main>
        {posts.map((post) => (
          
         <Post key={post.id} picture={post.picture} description={post.title} owner={post.user} id={post.id}/>
        ))}
      </main>
    </div>
  );
}

export default App;
