import React from 'react';

import styles from './Member.module.css';
import { Avatar } from '../../elements/Avatar';
import { TimeAgo } from '../../elements/TimeAgo';
import { OnlineStatus } from '../../elements/OlineStatus';


type MemberProps = {
  id: number;
  name: string;
  statusMsg: string;
  onlineStatus: boolean;
  userPic: string;
  lastVisit: string;
}


export function Member({name, onlineStatus, statusMsg, lastVisit, userPic}: MemberProps) {

  return (
    <>
      <div className={ styles['contact-item'] }>

        <Avatar
          className={ styles.avatar }
          userPic={ userPic }
        >
          <OnlineStatus className={ styles['online-status']} onlineStatus={onlineStatus}/>
        </Avatar>
        <div className={ styles['contact-item__name'] }>
          <div className={ styles['contact-name'] }>{ name }</div>
          <span className={ styles['contact-status'] }>{ statusMsg }</span>
        </div>

        <TimeAgo messageTime={ lastVisit } className={ styles['time'] }/>
      </div>
    </>
  );
}
