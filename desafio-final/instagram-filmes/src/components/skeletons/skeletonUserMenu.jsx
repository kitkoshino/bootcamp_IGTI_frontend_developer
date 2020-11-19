import React from 'react';
import Skeleton from 'react-loading-skeleton';
import '../../styles/skeleton/skeletonUsersMenu.scss';

function skeletonUserMenu() {
  return (
    <div className="skeleton__users">
      <div className="skeleton__title">
        <Skeleton width={300} height={20} />
      </div>
      <div className="skeleton__menu">
        <div className="skeleton__items">
          <div className="skeleton__image">
            <Skeleton circle={true} height={50} width={50} />
          </div>
          <Skeleton width={60} />
        </div>
        <div className="skeleton__items">
          <div className="skeleton__image">
            <Skeleton circle={true} height={50} width={50} />
          </div>
          <Skeleton width={60} />
        </div>
        <div className="skeleton__items">
          <div className="skeleton__image">
            <Skeleton circle={true} height={50} width={50} />
          </div>
          <Skeleton width={60} />
        </div>
      </div>
    </div>
  );
}

export default skeletonUserMenu;
