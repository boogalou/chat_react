import React from 'react';

import styles from './OnlineStatus.module.scss';
import cn from 'classnames';

type OnlineStatusProps = {
  className?: string;
  isOnline?: boolean;
}

export function OnlineStatus({className, isOnline}: OnlineStatusProps) {


  const classes = cn(
    styles[`online-status`],
    isOnline
      ? styles[`online-status--online`]
      : styles[`online-status--offline`])

  return (
    <>
      <div className={ classes }>{ }</div>
    </>
  );
}

