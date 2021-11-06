import React from 'react';

import styles from './OnlineStatus.module.css';
import cn from 'classnames';

type OnlineStatusProps = {
  className?: string;
  onlineStatus?: boolean;
}

export function OnlineStatus({className, onlineStatus}: OnlineStatusProps) {


  const classes = cn(
    styles[`online-status`],
    onlineStatus
      ? styles[`online-status--online`]
      : styles[`online-status--offline`])

  return (
    <>
      <div className={ classes }>{ }</div>
    </>
  );
}

