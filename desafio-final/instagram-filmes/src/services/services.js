import axios from 'axios';

const baseServices = axios.create({
  baseURL: 'http://localhost:3333'
});

const listPosts = async () => {
  try {
    const result = await baseServices.get('/posts');
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

const listComments = async (id) => {
  try {
    const result = await baseServices.get('/comments', {params: {postId: id}});
    return result.data;
  } catch (error) {
    console.log(error);
  }
}

const listLikes = async (id) => {
  try {
    const result = await baseServices.get('/likes', {params: {postId: id}});
    return result.data;
  } catch (error) {
    console.log(error);
  }
}

export { listPosts, listComments , listLikes};
