import React from 'react';
import { timeAgo } from '../../Utils/timeStamp';

type TimeAgoProps = {
  messageTime: string;
  className: string;
}

export function TimeAgo({ messageTime, className }:TimeAgoProps) {


  const date = timeAgo(messageTime);

  return (
    <div className={ className }>
      { date }
    </div>
  );
}

