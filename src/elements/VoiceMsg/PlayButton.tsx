import React, { FC, MouseEvent } from 'react';

import styles from './PlayButton.module.css';

type PlayButtonProps = {
  isPlay: boolean;
  callback: (evt: MouseEvent<HTMLButtonElement>) => void;

}

export const PlayButton: FC<PlayButtonProps> = ({isPlay, callback}: PlayButtonProps) => {

  return (
    <>
      <button className={ styles.play } onClick={ callback }>
        { !isPlay ? (
          <svg version="1.1"
               id="Capa_1"
               xmlns="http://www.w3.org/2000/svg"
               xmlnsXlink="http://www.w3.org/1999/xlink"
               x="0px" y="0px"
               width="65%"
               height="65%"
               fill="#3883E3"
               viewBox="0 0 232.153 232.153"
            // style="enable-background:new 0 0 232.153 232.153;"
               xmlSpace="preserve">
            <g id="Play">
              <path
                // style="fill-rule:evenodd;clip-rule:evenodd;"
                d="M203.791,99.628L49.307,2.294c-4.567-2.719-10.238-2.266-14.521-2.266
		            c-17.132,0-17.056,13.227-17.056,16.578v198.94c0,2.833-0.075,16.579,17.056,16.579c4.283,0,9.955,0.451,14.521-2.267
		            l154.483-97.333c12.68-7.545,10.489-16.449,10.489-16.449S216.471,107.172,203.791,99.628z"/>
            </g>

          </svg>

        ) : (

          <svg version="1.1"
               id="Capa_1"
               xmlns="http://www.w3.org/2000/svg"
               xmlnsXlink="http://www.w3.org/1999/xlink"
               x="0px" y="0px"
               width="65%"
               height="65%"
               fill="#3883E3"
               viewBox="0 0 12 12"
            // style="enable-background:new 0 0 12 12;"
               xmlSpace="preserve">

            <g>
              <path
                // style="fill:#030104;"
                d="M2.5,0c-1.104,0-2,0.896-2,2v8c0,1.104,0.896,2,2,2s2-0.896,2-2V2C4.5,0.896,3.604,0,2.5,0z"/>
              <path
                // style="fill:#030104;"
                d="M9.5,0c-1.104,0-2,0.896-2,2v8c0,1.104,0.896,2,2,2s2-0.896,2-2V2C11.5,0.896,10.604,0,9.5,0z"/>
            </g>
          </svg>
        ) }
      </button>
    </>
  );
};
