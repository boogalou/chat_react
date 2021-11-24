import React, { FC, MouseEvent, ReactNode } from 'react';

type ButtonProps = {
  children?: ReactNode;
  classes?: string;
  callback?: (evt: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  type?: 'submit' | 'reset' | 'button' | undefined;
}


export const Button: FC<ButtonProps> = ({ children, classes, callback, disabled, type }: ButtonProps): JSX.Element => {

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

