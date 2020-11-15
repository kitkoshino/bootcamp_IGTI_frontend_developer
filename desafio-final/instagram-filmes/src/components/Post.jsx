import React from 'react';
import '../styles/post.scss';
import AquamanPoster from '../img/aquaman-poster.jpg';
import Superman from '../img/superman.png';
import Comment from './Comment';

function Post() {
  return (
    <div className="post">
      <img src={AquamanPoster} alt="poster" />
      <div className="post__user">
        <img src={Superman} alt="" />
        <div className="post__infos">
          <p className="post__name">Superman</p>
          <p className="post__descricao">descricao</p>
        </div>
      </div>
      <div className="comment">
        <Comment />
        <Comment />
        <Comment />

      </div>
    </div>
  );
}

export default Post;
