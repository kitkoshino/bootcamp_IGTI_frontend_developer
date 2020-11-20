import React, { useEffect, useState } from 'react';
import Batman from '../img/batman.png';
import Superman from '../img/superman.png';
import WonderWoman from '../img/wonderWoman.png';
import {
  listBestFriends,
  listCommentsByPostIds,
  listLikesByPostIds,
  listPostsByUserId
} from '../services/services';
import SkeletonUsers from '../components/skeletons/skeletonUserMenu';
import '../styles/header.scss';

function Header() {
  const [bestFriends, setBestFriends] = useState([]);
  const [posts, setPosts] = useState([]);
  const [likesNumber, setLikesNumber] = useState(0);
  const [commentsNumber, setCommentsNumber] = useState([]);
  const [user, setUser] = useState('superman');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    listBestFriends()
      .then((res) => setBestFriends(res))
      .then(() => setIsLoading(false));
    listPostsByUserId(user).then((res) => setPosts(res));
    // setIsLoading(true);
  }, [user]);

  useEffect(() => {
    const postsId = posts.map((post) => post.id);

    listLikesByPostIds(postsId).then((res) => {
      setLikesNumber(res.length);
    });

    listCommentsByPostIds(postsId).then((res) => {
      setCommentsNumber(res.length);
    });
  }, [posts, user]);

  // function handleActiveUser(e) {
  //   // setUser(e);
  //   console.log('click', e)
  // }

  return (
    <div className="menu">
      <div className="menu__profile">
        <img
          src={
            user === 'superman'
              ? Superman
              : user === 'batman'
              ? Batman
              : WonderWoman
          }
          alt="superman"
        />
        <div className="profile__infos">
          <h2>{user.charAt(0).toUpperCase() + user.slice(1)}</h2>
          <p>{posts.length} posts</p>
          <p>{likesNumber} curtidas</p>
          <p>{commentsNumber} comentários</p>
        </div>
      </div>
      {isLoading ? (
        <SkeletonUsers />
      ) : (
        <div className="menu__users">
          <h3>Visualizar timeline como:</h3>
          {/* {console.log('load header', isLoading)} */}
          <div className="users__list">
            <div
              className={`users__info ${
                user === 'batman' ? 'users__info--active' : ''
              } `}
              onClick={(e) => setUser('batman')}
            >
              <img src={Batman} alt="" />
              <p>{bestFriends[0]}</p>
            </div>

            <div
              className={`users__info ${
                user === 'superman' ? 'users__info--active' : ''
              } `}
              onClick={(e) => setUser('superman')}
            >
              <img src={Superman} alt="" />
              <p>Superman</p>
            </div>

            <div
              className={`users__info ${
                user === 'wonderWoman' ? 'users__info--active' : ''
              } `}
              onClick={(e) => setUser('wonderWoman')}
            >
              <img src={WonderWoman} alt="" />
              <p>{bestFriends[1]}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
