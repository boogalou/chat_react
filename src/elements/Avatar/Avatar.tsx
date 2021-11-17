import React, { ReactNode } from 'react';
import styles from './Avatar.module.css';


type AvatarProps = {
  avatar: string | undefined;
  className?: string;
  children?: ReactNode;
}

export function Avatar({avatar, children}: AvatarProps) {


  return (
    <>
      <div className={ styles.avatar }>

        <img
          className={ styles['image-rounded'] }
          src={ avatar } alt="avatar"
        />
        { children }
      </div>
    </>

  );
}
