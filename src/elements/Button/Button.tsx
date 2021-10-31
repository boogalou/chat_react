import React, { FC, MouseEvent, ReactNode } from 'react';
import cn from 'classnames';

type ButtonProps = {
  children: ReactNode;
  className?: string;
  callback?: (evt: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}


export const Button: FC<ButtonProps> = ({ children, className, callback, disabled }: ButtonProps): JSX.Element => {


  const classes = cn(disabled, className);
  console.log(className);
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

