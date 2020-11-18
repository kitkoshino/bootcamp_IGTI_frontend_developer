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

const listPostsByUserId = async (user) => {
  try {
    const result = await baseServices.get('/posts', { params: { user: user } });
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

const listCommentsByPostIds = async (id) => {
  try {
    const result = await baseServices.get('/comments', {
      params: { postId: id }
    });
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

const listAllLikes = async () => {
  try {
    const result = await baseServices.get('/likes');
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

const listLikesByPostIds = async (ids) => {
  try {
    const result = await baseServices.get('/likes', {
      params: { postId: ids }
    });
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

const listLikesByUser = async (user) => {
  try {
    const result = await baseServices.get('/likes', { params: { user: user } });
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

const listBestFriends = async () => {
  try {
    const result = await baseServices.get('/bestFriends');
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

export {
  listPosts,
  listCommentsByPostIds,
  listAllLikes,
  listLikesByPostIds,
  listLikesByUser,
  listBestFriends,
  listPostsByUserId
};
