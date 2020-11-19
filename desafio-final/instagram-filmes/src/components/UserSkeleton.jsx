import React from 'react';
import Skeleton from 'react-loading-skeleton';
import '../styles/skeleton/userSkeleton.scss';

function UserSkeleton() {
  return (
    <div className="skeleton">
      <div className="skeleton__image">
        <Skeleton circle={true} height={50} width={50} />
      </div>

      <div className="skeleton__item">
        <Skeleton duration={1} width={100} />
      </div>
    </div>
  );
}

export default UserSkeleton;
