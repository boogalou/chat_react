import React, { FC } from 'react';

type SendIconProps = {
  classes: string;
}

export const SendIcon: FC<SendIconProps> = ({classes}: SendIconProps) => {
  return (
    <div className={ classes }>
      <svg
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px" y="0px"
        width="100%"
        height="100%"
        viewBox="0 0 612.46 612.46"
        xmlSpace="preserve">
        <g>
          <g id="_x31_0_33_">
            <g>
              <path d="M592.105,1.491C570.034,12.221,0.229,287.882,0.229,287.882s191.92,115.683,190.928,114.557
				c-0.305-0.344,114.557,210.021,114.557,210.021S606.425,30.13,611.198,20.583C615.38,8.65,606.425-4.485,592.105,1.491z
				 M76.601,287.882L515.734,77.862L210.25,364.254C210.174,364.158,76.601,287.882,76.601,287.882z M305.714,536.089
				c0,0-59.722-115.016-76.371-152.743L536.26,92.735L305.714,536.089z"/>
            </g>
          </g>
        </g>
      </svg>

    </div>
  );
};

