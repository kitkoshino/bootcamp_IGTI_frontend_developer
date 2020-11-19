import { useEffect, useState } from 'react';
import './App.scss';
import Header from './components/Header';
import Post from './components/Post';
import { listPosts } from './services/services';
import Skeleton from 'react-loading-skeleton';


function App() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    setIsLoading(true);
    listPosts().then((res) => setPosts(res)).then(() => setIsLoading(false));
 
  }, []);

  return (
    <div className="App">
      <header>
        <h1>MovieGram</h1>
        {/* {isLoading ? <Skeleton  height={200}/> :  <Header />} */}
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
