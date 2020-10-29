import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const baseTweetService = axios.create({
  baseURL: 'http://localhost:3333/tweets'
});

const listTweets = async () => {
  try {
    const result = await baseTweetService.get('');
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

const createTweet = async (tweet) => {
  try {
    const result = await baseTweetService.post('', { value: tweet, id: uuidv4() });
    return result.data;
  } catch(error) {
    console.log(error);
  }
 
};

const deleteTweet = async (tweetId) => {
  try {
    await baseTweetService.delete(`${tweetId}`);
  } catch(error) {
    console.log(error);
  }
}

export { listTweets, createTweet, deleteTweet };
