import React, { useEffect, useState } from 'react';
import { FiHeart } from 'react-icons/fi';
import { BiCommentDots } from 'react-icons/bi';
import '../styles/post.scss';
import Superman from '../img/superman.png';
import Comment from './Comment';
import {
  listCommentsByPostIds,
  listLikesByPostIds
} from '../services/services';
import CommentSkeleton from './CommentSkeleton';

function Post({ picture, description, owner, id }) {
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [displayLikes, setDisplayLikes] = useState(false);

  useEffect(() => {
    listCommentsByPostIds(id)
      .then((res) => setComments(res))
      .then(() => setIsLoading(false));
    listLikesByPostIds(id).then((res) => setLikes(res));
  }, [id]);



  return (
    <div className="post">
      {/* <Skeleton duration = {2} height={50}/> */}
      {/* {console.log(likes)} */}
      <img src={picture} alt="poster" />
      <div className="post__user">
        <img src={Superman} alt="user" />
        <div className="post__infos">
          <p className="post__name">{owner}</p>
          <p className="post__descricao">{description}</p>
        </div>
      </div>
      <div className="post__likes">
        <span>{likes.length}</span> <FiHeart onClick={() => setDisplayLikes(!displayLikes)}/>
        <span>{comments.length}</span> <BiCommentDots />
      </div>
      {console.log(displayLikes)}
      <div className= {displayLikes ? 'post__likes--user' : 'post__likes--notShow'}>
          {likes.map((like) => (
            <span>{like.user}</span>
          ))}
        </div>
      <div className="comment">
        {isLoading ? (
          <>
            <CommentSkeleton />
            <CommentSkeleton />
            <CommentSkeleton />
          </>
        ) : (
          comments.map((comment) => (
            <Comment
              key={comment.id}
              commentText={comment.comment}
              user={comment.user}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Post;
