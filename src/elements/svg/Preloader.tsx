import React, { FC } from 'react';


type PreloaderProps = {
  classes: string;
}

export const Preloader: FC<PreloaderProps> = ({classes}: PreloaderProps) => {
  return (
    <div className={ classes }>
      <svg version="1.1"
           id="L3"
           xmlns="http://www.w3.org/2000/svg"
           xmlnsXlink="http://www.w3.org/1999/xlink"
           x="0px"
           y="0px"
           viewBox="0 0 100 100"
           enableBackground="new 0 0 0 0"
           width="100%"
           height="100%"
           xmlSpace="preserve">
        <circle fill="none" stroke="#fff" strokeWidth="4" cx="50" cy="50" r="44" />
        <circle fill="#fff" stroke="#e74c3c" strokeWidth="3" cx="8" cy="54" r="6">
          <animateTransform
            attributeName="transform"
            dur="2s"
            type="rotate"
            from="0 50 48"
            to="360 50 52"
            repeatCount="indefinite"/>
        </circle>
      </svg>
    </div>
  );
};
