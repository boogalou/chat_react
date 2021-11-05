import React from 'react';

import styles from './MessageBox.module.css';
import { Avatar } from '../../elements/Avatar';
import { TimeAgo } from '../../elements/TimeAgo';
import { BubbleDialog } from '../../elements/BubbleDialog';
import { CheckMarkMsg } from '../../elements/CheckMarkMsg';
import { Attach } from '../Main/Main';


type MessageBoxProps = {
  messageTime: string;
  msgText: string;
  userPic: string;
  isMe: boolean;
  isRead: boolean;
  attachments?: Attach[];
}


export function MessageBox({messageTime, msgText, userPic, isMe, isRead, attachments}: MessageBoxProps) {


  return (
    <>
      <div className={ isMe ? styles[`message-box--me`] : styles['message-box'] }>
        <div className={ styles['message-box__avatar'] }>
          <Avatar userPic={ userPic }/>
        </div>
        <div className={ isMe ? styles['container--me'] : styles.container }>
          <BubbleDialog className={ styles['message-box__bubble'] }>
            { msgText }
            { attachments && <div className={ styles['message-box__attachments'] }>
              { attachments?.map(file => <img className={styles.attachments__file} src={ file.url } alt={ file.filename }/>) }
            </div> }
          </BubbleDialog>
          <div style={ {display: 'flex', justifyContent: 'space-between', padding: '0 10px'} }>
            { isMe && <CheckMarkMsg isRead={ isRead }/> }
            <TimeAgo className={ styles['message-box__time'] } messageTime={ messageTime }/>
          </div>
        </div>
      </div>
    </>
  );
};
