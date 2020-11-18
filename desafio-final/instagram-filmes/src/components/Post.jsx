import React, { useEffect, useState } from 'react';
import { FiHeart } from 'react-icons/fi';
import { BiCommentDots } from 'react-icons/bi';
import '../styles/post.scss';
import Superman from '../img/superman.png';
import Comment from './Comment';
import { listCommentsByPostIds, listLikesByPostIds } from '../services/services';

function Post({ picture, description, owner, id }) {
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);

  useEffect(() => {
    listCommentsByPostIds(id).then((res) => setComments(res));
    listLikesByPostIds(id).then((res) => setLikes(res));
  }, [id]);

  return (
    <div className="post">
      <img src={picture} alt="poster" />
      <div className="post__user">
        <img src={Superman} alt="" />
        <div className="post__infos">
          <p className="post__name">{owner}</p>
          <p className="post__descricao">{description}</p>
        </div>
      </div>
      <div className="post__likes">
        <span>{likes.length}</span> <FiHeart />
        <span>{comments.length}</span> <BiCommentDots />
      </div>
      <div className="comment">
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            commentText={comment.comment}
            user={comment.user}
          />
        ))}
      </div>
    </div>
  );
}

export default Post;
