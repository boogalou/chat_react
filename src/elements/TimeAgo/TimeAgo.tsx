import React from 'react';
import { timeAgo } from '../../Utils/timeStamp';

type TimeAgoProps = {
  created_at: string;
  className: string;
}

export function TimeAgo({ created_at, className }:TimeAgoProps) {


  const date = timeAgo(created_at);

  return (
    <div className={ className }>
      { date }
    </div>
  );
}

