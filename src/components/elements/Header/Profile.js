import React from 'react';
import styles from './Header.module.scss';

function Profile() {
  return (
    <div className={styles['profile-wrapper']}>
      <div className={styles.notification}>
        <i className="bx bsx-bell" />
      </div>
      <div className={styles.profile}>
        <div>
          <img
            src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/06/28/14/avatar.jpg?width=50"
            alt=""
          />
        </div>
        <i className="bx bx-caret-down" />
      </div>
    </div>
  );
}

export default Profile;
