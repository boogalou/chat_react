import React, { useState } from 'react';

import styles from './OnlineStatus.module.css';
import cn from 'classnames';

type OnlineStatusProps = {
  className: string;
}

export function OnlineStatus({className}: OnlineStatusProps) {

  const [onlineStatus, setOnlineStatus] = useState(false);

const classes = cn(styles[`online-status--offline`], className)

  return (
    <>
      <div className={ classes }>{ }</div>
    </>
  );
}

