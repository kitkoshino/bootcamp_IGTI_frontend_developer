import React from 'react';
import { FiXCircle } from 'react-icons/fi';
import '../styles/tweet.scss';
import { deleteTweet } from '../services/tweet';

function Tweet({ content, tweetId, afterRemove }) {

  function removeTweet(tweetId) {
    console.log('deletar tweet', tweetId);
    deleteTweet(tweetId).then(() => afterRemove(tweetId));
  }

  return (
    <div className="tweet">
      <p>{content}</p>
      <FiXCircle onClick={() => removeTweet(tweetId)} />
    </div>
  );
}

export default Tweet;
