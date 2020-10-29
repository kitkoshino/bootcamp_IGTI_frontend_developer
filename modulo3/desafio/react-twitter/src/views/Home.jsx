import React, { useEffect, useState } from 'react';
import Tweet from '../components/tweet';
import { listTweets, createTweet } from '../services/tweet';
import '../styles/home.scss';
import Alert from '@material-ui/lab/Alert';

function Home() {
  const [tweets, setTweets] = useState([]);
  const [newTweetText, setNewTweetText] = useState('');
  const [remainCharacters, setRemainCharacters] = useState(280);
  const [remainCharactersClass, setRemainCharactersClass] = useState('green-color');
  const [canTweet, setCanTweet] = useState(true);

  useEffect(() => {
    listTweets().then((res) => setTweets(res));

    // document.addEventListener('keydown', (event) => {
    //   if (event.code === 'Enter' && event.ctrlKey) {
    //     submit();
    //   }
    // });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const result = 280 - newTweetText.length;
    setRemainCharactersClass(
      result >= 10 ? 'green-color' : result >= 0 ? 'orange-color' : 'red-color'
    );
    setRemainCharacters(result);
  }, [newTweetText]);

  function removeTweet(tweetId) {
    setTweets(tweets.filter(tweet => tweet.id !== tweetId));
  }

  function submit() {
    console.log('submit');
    if (remainCharacters < 0) {
      setCanTweet(false);
    } else {
      createTweet(newTweetText)
        .then((tweet) => {
          listTweets().then((res) => setTweets(res));
        })
        .catch((err) => console.log(err));
    }
  }

  return (
    <div className="home-container">
      {!canTweet && <Alert onClose={() => setCanTweet(true)} severity="error" >This is a success alert — check it out!</Alert>}
      <div className="tweet-container">
        <label htmlFor="new-tweet">What's going on?</label>
        <textarea
          id="new-tweet"
          value={newTweetText}
          onChange={(event) => setNewTweetText(event.target.value)}
          cols="50"
          rows="4"
          wrap="hard"
        ></textarea>
        <div className="buttons">
          <span className={remainCharactersClass}>
            {remainCharacters} caracteres
          </span>
          <button onClick={submit}>Tweetar</button>
        </div>
      </div>
      {tweets?.map((tweet) => (
        <Tweet afterRemove={removeTweet} content={tweet.value} tweetId={tweet.id} key={tweet.id} />
      ))}
    </div>
  );
}

export default Home;
