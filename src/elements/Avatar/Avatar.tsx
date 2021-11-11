import React, { ReactNode } from 'react';
import styles from './Avatar.module.css';
import cn from 'classnames';


type AvatarProps = {
  avatar: string | undefined;
  className?: string;
  children?: ReactNode;
}

export function Avatar({avatar, className, children}: AvatarProps) {

  const classes = cn(styles.avatar, className)

  return (
    <>
      <div className={ styles.avatar }>

        <img
          className={ styles['image-rounded'] }
          src={ avatar } alt="avatar"
        />
        {children}
      </div>
    </>

  );
}
