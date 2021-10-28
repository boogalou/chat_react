import React, { FC, ReactNode, MouseEvent } from 'react';
import styles from './Button.module.css'
import cn from 'classnames';

type ButtonProps = {
  children: ReactNode;
  className?: string;
  callback?: (evt: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}


export const Button: FC<ButtonProps> = ({ children, className, callback, disabled }: ButtonProps): JSX.Element => {


  const classes = cn(styles['btn-group__btn'], disabled)
  console.log(classes);
  return (
    <>
      <button
        onClick={ callback }
        className={ classes }
        disabled={disabled}
      >
        { children }
      </button>
    </>
  );
};

