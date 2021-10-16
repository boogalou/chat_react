import React, { FC, ReactElement, ReactNode } from 'react';

type FormBlockProps = {
  className: string;
  children: ReactNode;
  callback: (evt: React.FormEvent<HTMLFormElement>) => void;
}

export const FormBlock: FC<FormBlockProps> = ({children, className, callback}: FormBlockProps) => {
  return (
    <>
      <form
        onSubmit={ callback }
        className={ className }
      >
        { children }
      </form>
    </>
  );
};
