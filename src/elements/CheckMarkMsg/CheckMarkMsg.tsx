import React from 'react';

type CheckMarkMessageProps = {
  isRead: boolean | undefined;
  className?: string;
}

export function CheckMarkMsg({isRead, className}: CheckMarkMessageProps) {

  console.log(isRead);

  return (

    <div className={ className }>
      { isRead ? (
        <svg version="1.1"
             id="Capa_1"
             xmlns="http://www.w3.org/2000/svg"
             xmlnsXlink="http://www.w3.org/1999/xlink"
             x="0px" y="0px"
             width="18px"
             height="18px"
             viewBox="0 0 594.149 594.149"
             fill="#3883E3"
             xmlSpace="preserve"
        >
          <g id="done-all">
            <path d="M448.8,161.925l-35.7-35.7l-160.65,160.65l35.7,35.7L448.8,161.925z
                       M555.899,126.225l-267.75,270.3l-107.1-107.1
			                 l-35.7,35.7l142.8,142.8l306-306L555.899,126.225z
			                 M0,325.125l142.8,142.8l35.7-35.7l-142.8-142.8L0,325.125z"/>
          </g>
        </svg>
      ) : (
        <svg version="1.1"
             id="Capa_1"
             xmlns="http://www.w3.org/2000/svg"
             x="0px" y="0px"
             width="18px"
             height="18px"
             viewBox="0 0 594.149 594.149"
             fill="#C8C2BC">

          <g id="done-all">
            <path d="M555.899,126.225l-267.75,270.3l-107.1-107.1
				             l-35.7,35.7l142.8,142.8l306-306L555.899,126.225z"/>
          </g>
        </svg>
      )
      }
    </div>


  );
}

