import React from 'react';

import styles from './MessageBox.module.css';
import { Avatar } from '../../elements/Avatar';
import { TimeAgo } from '../../elements/TimeAgo';
import { BubbleDialog } from '../../elements/BubbleDialog';


type MessageBoxProps = {
  messageTime: string;
  msgText: string;
  userPic: string;
  isMe: boolean;
  isRead: boolean;
}

export function MessageBox({messageTime, msgText, userPic, isMe}: MessageBoxProps) {
  return (
    <>
      <div className={ styles['message-box'] }>
        <div className={ styles['message-box__avatar'] }>
          <Avatar userPic={ userPic }/>
        </div>
        <div className={ styles.container }>
          <BubbleDialog className={ styles['message-box__bubble'] }>
            { msgText }
          </BubbleDialog>
          <TimeAgo className={ styles['message-box__time'] } messageTime={ messageTime }/>
        </div>
      </div>

      <div className={ isMe ? styles[`message-box--me`] : styles['message-box'] }>
        <div className={ styles['message-box__avatar'] }>
          <Avatar userPic={ userPic }/>
        </div>
        <div className={ isMe ? styles['container--me'] : styles.container}>
          <BubbleDialog className={ styles['message-box__bubble'] }>
            { msgText }
          </BubbleDialog>
          <TimeAgo className={ styles['message-box__time'] } messageTime={ messageTime }/>
        </div>
      </div>
    </>
  );
};
