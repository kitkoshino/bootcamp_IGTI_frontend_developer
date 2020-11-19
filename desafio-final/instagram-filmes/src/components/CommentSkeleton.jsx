import React from 'react';
import Skeleton from 'react-loading-skeleton';
import '../styles/skeleton/commentSkeleton.scss';

function CommentSkeleton() {
  return (
    <div className="skeleton__comment">
      <div className="skeleton__image">
        <Skeleton circle={true} height={50} width={50} />
      </div>
      <div className="skeleton__infos">
        <div className="skeleton__item">
          <Skeleton duration={1} width={100} />
        </div>
        <div className="skeleton__item">
          <Skeleton duration={1} width={290} />
        </div>
      </div>
    </div>
  );
}

export default CommentSkeleton;
