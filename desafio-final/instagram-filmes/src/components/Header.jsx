import userEvent from '@testing-library/user-event';
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
import '../styles/header.scss';

function Header() {
  const [bestFriends, setBestFriends] = useState([]);
  const [posts, setPosts] = useState([]);
  const [likesNumber, setLikesNumber] = useState(0);
  const [commentsNumber, setCommentsNumber] = useState([]);
  const [user, setUser] = useState('superman');

  useEffect(() => {
    listBestFriends().then((res) => setBestFriends(res));
    listPostsByUserId(user).then((res) => setPosts(res));
  }, [user]);

  useEffect(() => {
    const postsId = posts.map((post) => post.id);

    listLikesByPostIds(postsId).then((res) => {
      setLikesNumber(res.length);
    });

    listCommentsByPostIds(postsId).then((res) => {
      setCommentsNumber(res.length);
    });
  }, [posts]);

  function handleActiveUser(e) {
    // setUser(e);
    console.log('click', e)
  }

  return (
    <div className="menu">
      {/* {console.log('comment por id', commentPerPostId)} */}
      <div className="menu__profile">
        <img src={Superman} alt="superman" />
        <div className="profile__infos">
          <h2>{user.charAt(0).toUpperCase() + user.slice(1)}</h2>
          <p>{posts.length} posts</p>
          <p>{likesNumber} curtidas</p>
          <p>{commentsNumber} comentários</p>
        </div>
      </div>
      <div className="menu__users">
        <h3>Visualizar timeline como:</h3>
        <div className="users__list">
          <div className={`users__info ${user === 'batman' ? 'users__info--active' : ''} `} onClick={(e) => setUser('batman')}>
            <img src={Batman} alt="" />
            <p>{bestFriends[0].charAt(0).toUpperCase() + bestFriends[0].slice(1)}</p>
          </div>
          <div  className={`users__info ${user === 'superman' ? 'users__info--active' : ''} `} onClick={(e) => setUser('superman')}>
            <img src={Superman} alt="" />
            <p>Superman</p>
          </div>
          <div  className={`users__info ${user === 'wonderwoman' ? 'users__info--active' : ''} `} onClick={(e) => setUser('wonderwoman')}>
            <img src={WonderWoman} alt="" />
            <p>{bestFriends[1].charAt(0).toUpperCase() + bestFriends[1].slice(1)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
