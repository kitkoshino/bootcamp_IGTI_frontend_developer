import React from 'react';
import WonderWoman from '../img/wonderWoman.png';
import '../styles/comment.scss'

function Comment() {
  return (
    <div className="comment__item">
      <img src={WonderWoman} alt="comment owner" />
      <div className="comment__user">
        <p className="comment__name">Mulher Maravilha</p>
        <div className="comment__text">
          <p>Comentario blablabalbalblblalb</p>
        </div>
      </div>
    </div>
  );
}

export default Comment;
