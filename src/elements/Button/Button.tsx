import React, { FC, MouseEvent, ReactNode, DetailedHTMLProps, ButtonHTMLAttributes } from 'react';

import styles from './Button.module.css'
import cn from 'classnames';

type ButtonProps = {
  children?: ReactNode;
  classMix?: string;
  callback?: (evt: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  type?: 'submit' | 'reset' | 'button' | undefined;
}


export const Button: FC<ButtonProps> = ({ children, classMix, callback, disabled, type }: ButtonProps): JSX.Element => {


  const classes = cn(styles.button, classMix);
  return (
    <>
      <button
        type={type}
        className={ classes }
        onClick={ callback }
        disabled={ disabled }
      >
        { children }
      </button>
    </>
  );
};

