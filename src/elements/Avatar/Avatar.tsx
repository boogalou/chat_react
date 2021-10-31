import React, { ReactNode } from 'react';
import styles from './Avatar.module.css';
import cn from 'classnames';


type AvatarProps = {
  userPic: string;
  className?: string;
  children?: ReactNode;
}

export function Avatar({userPic, className, children}: AvatarProps) {

  const classes = cn(styles.avatar, className)

  return (
    <>
      <div className={ styles.avatar }>

        <img
          className={ styles['image-rounded'] }
          src={ userPic } alt="avatar"
        />
        {children}
      </div>
    </>

  );
}
