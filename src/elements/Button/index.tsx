import React, { FC } from 'react';

type ButtonProps = {
  children: string;
  className: string;
  fn?: () => void;
}

export const ButtonJSX: FC<ButtonProps> = ({ children, className, fn }: ButtonProps): JSX.Element => {
  return (
    <>
      <button
        onClick={ fn }
        className={ className }>
        { children }
      </button>
    </>
  );
};

