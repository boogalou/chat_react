import React from 'react';

import styles from './Member.module.css';
import { Avatar } from '../../elements/Avatar';
import { TimeAgo } from '../../elements/TimeAgo';
import { OnlineStatus } from '../../elements/OlineStatus';
import { UserType } from '../MemberList/MemberList';


type MemberProps = {
  text: string;
  created_at: string;
  user: UserType;
}


export function Member({text, created_at, user}: MemberProps) {

  return (
    <>
      <div className={ styles['contact-item'] }>

        <Avatar
          className={ styles.avatar }
          avatar={ user.avatar}
        >
          <OnlineStatus className={ styles['online-status']} isOnline={user.isOnline}/>
        </Avatar>
        <div className={ styles['contact-item__name'] }>
          <div className={ styles['contact-name'] }>{ user.fullName }</div>
          <span className={ styles['contact-status'] }>{
            text.length > 25 ? text.slice(0, 25) + '...' : text
          }</span>
        </div>

        <TimeAgo created_at={ created_at } className={ styles['time'] }/>
      </div>
    </>
  );
}
