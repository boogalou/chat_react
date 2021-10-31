import React from 'react';

import styles from './Member.module.css';
import { Avatar } from '../../elements/Avatar';
import { TimeAgo } from '../../elements/TimeAgo';
import { OnlineStatus } from '../../elements/OlineStatus';


type MemberProps = {
  messageTime: string;
}


export function Member({messageTime}: MemberProps) {
  return (
    <>
      <div className={ styles['contact-item'] }>

        <Avatar
          className={ styles.avatar }
          userPic={ `https://static.tvtropes.org/pmwiki/pub/images/jessica_alba_7.jpg` }
        >
          <OnlineStatus className={ styles['online-status'] }/>
        </Avatar>
        <div className={ styles['contact-item__name'] }>
          <div className={ styles['contact-name'] }>Jessica Alba</div>
          <span className={ styles['contact-status'] }>{ 'Hello Everyone!' }</span>
        </div>

        <TimeAgo messageTime={ messageTime } className={ styles['time'] }/>
      </div>

      <div className={ styles['contact-item'] }>
        <Avatar
          className={ styles.avatar }
          userPic={ `https://static.mk.ru/upload/entities/2020/07/23/17/articles/detailPicture/91/9c/8a/7b/0fb74b1d41a574b376fbabd62d828b24.jpg` }
        >
          <OnlineStatus className={ styles['online-status'] }/>
        </Avatar>
        <div className={ styles['contact-item__name'] }>
          <div className={ styles['contact-name'] }>Jessica Alba</div>
          <span className={ styles['contact-status'] }>{ 'Здравствуйте товарищи' }</span>
        </div>

        <TimeAgo messageTime={ messageTime } className={ styles['time'] }/>
      </div>


    </>
  );
}
