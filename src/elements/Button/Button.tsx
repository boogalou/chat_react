import React, { FC, MouseEvent, ReactNode } from 'react';

import styles from './Button.module.css'
import cn from 'classnames';

type ButtonProps = {
  children?: ReactNode;
  classMix?: string;
  callback?: (evt: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}


export const Button: FC<ButtonProps> = ({ children = 'Button', classMix, callback, disabled }: ButtonProps): JSX.Element => {


  const classes = cn(styles.button, classMix);
  console.log(classes);
  return (
    <>
      <button
        className={ classes }
        onClick={ callback }
        disabled={ disabled }
      >
        { children }
      </button>
    </>
  );
};

