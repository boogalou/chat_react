import React, { ReactNode } from 'react';
import styles from './Avatar.module.scss';
import { stringToColour } from '../../Utils/stringToColor';


type AvatarProps = {
  avatar: string | null | undefined;
  className?: string;
  fullName?: string | undefined;
  id?: string | undefined;
  children?: ReactNode;
}

export function Avatar({avatar, children, fullName, id}: AvatarProps) {

  const firstLetter = fullName?.split('')[0];

  return (
    <>
      <div className={ styles.avatar }>
        { avatar
          ? < img className={ styles.avatar__rounded } src={ avatar } alt="avatar"/>
          : <svg className={ styles.avatar__rounded }
                 viewBox="0 0 10 10"
                 xmlns="http://www.w3.org/2000/svg"
                 xmlnsXlink="http://www.w3.org/1999/xlink">
            <defs>
              <linearGradient id="defaultAvatar" gradientTransform="rotate(75)">
                <stop offset="45%" stopColor={ `#${ stringToColour(id) }` }/>
                <stop offset="90%" stopColor={ `#${ stringToColour(id).split('').reverse().join('') }` }/>
              </linearGradient>
            </defs>
            <circle cx="5" cy="5" r="6" fill="url('#defaultAvatar')"/>
          </svg>
        }
        { !avatar &&
        <span className={ styles.avatar__name }>{ firstLetter }</span> }
        { children }
      </div>
    </>

  );
}
