import React, { FC } from 'react';

type MicrophoneIconProps = {
  classes: string;
}

export const MicrophoneIcon: FC<MicrophoneIconProps> = ({classes}: MicrophoneIconProps) => {
  return (
    <div className={classes}>
      <svg

        version="1.1"
        viewBox="0 0 24 24"
        height="100%"
        width="100%"
        xmlSpace="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink">
        <g id="Icon">
          <path
            d="M16.25,6.5c-0,-2.347 -1.903,-4.25 -4.25,-4.25l-0,0c-2.347,0 -4.25,1.903 -4.25,4.25l0,5.497c0,2.348 1.903,4.25 4.25,4.25l0,0c2.347,0 4.25,-1.902 4.25,-4.25l-0,-5.497Zm-1.5,-0l-0,5.497c-0,1.519 -1.231,2.75 -2.75,2.75c-1.519,0 -2.75,-1.231 -2.75,-2.75l0,-5.497c0,-1.519 1.231,-2.75 2.75,-2.75c1.519,0 2.75,1.231 2.75,2.75Z"/>
          <path
            d="M11.25,19.209c-3.65,-0.376 -6.5,-3.464 -6.5,-7.212c-0,-0.414 0.336,-0.75 0.75,-0.75c0.414,0 0.75,0.336 0.75,0.75c-0,3.174 2.576,5.75 5.75,5.75c3.174,0 5.75,-2.576 5.75,-5.75c0,-0.414 0.336,-0.75 0.75,-0.75c0.414,0 0.75,0.336 0.75,0.75c0,3.748 -2.85,6.836 -6.5,7.212l0,1.788c0,0.414 -0.336,0.75 -0.75,0.75c-0.414,0 -0.75,-0.336 -0.75,-0.75l0,-1.788Z"/>
        </g>
      </svg>
    </div>
  );
};

export default MicrophoneIcon;