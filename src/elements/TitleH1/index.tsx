import React, { FC } from 'react';

type TitleH1Props = {
  children: string;
  className: string;
}

export const TitleH1: FC<TitleH1Props> = ({children, className}: TitleH1Props) => {
  return (
    <>
      <h1 className={ className }>{ children }</h1>
    </>
  );
};

