import React from 'react';
import wonderWoman from '../img/wonderWoman.png';
import antman from '../img/antman.png';
import aquaman from '../img/aquaman.png';
import batman from '../img/batman.png';
import blackWidow from '../img/blackWidow.png';
import captainAmerica from '../img/captainAmerica.png';
import captainMarvel from '../img/captainMarvel.png';
import greenLantern from '../img/greenLantern.png';
import ironMan from '../img/ironMan.png';
import spiderMan from '../img/spiderMan.png';
import superman from '../img/superman.png';
import thor from '../img/thor.png';

import '../styles/comment.scss';

const heros = new Map();
heros
  .set('antman', antman)
  .set('aquaman', aquaman)
  .set('batman', batman)
  .set('blackWidow', blackWidow)
  .set('captainAmerica', captainAmerica)
  .set('captainMarvel', captainMarvel)
  .set('greenLantern', greenLantern)
  .set('ironMan', ironMan)
  .set('spiderMan', spiderMan)
  .set('superman', superman)
  .set('thor', thor)
  .set('wonderWoman', wonderWoman);



function Comment({ commentText, user }) {
  return (
    <div className="comment__item">
      {/* {console.log('user comment', user)} */}
      <img src={heros.get(user)} alt={user} />
      <div className="comment__user">
        <p className="comment__name">{user}</p>
        <div className="comment__text">
          <p>{commentText}</p>
        </div>
      </div>
    </div>
  );
}

export default Comment;
