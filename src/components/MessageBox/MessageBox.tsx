import React from 'react';

import styles from './MessageBox.module.css';

import { Avatar } from '../../elements/Avatar';
import { TimeAgo } from '../../elements/TimeAgo';
import { BubbleDialog } from '../../elements/BubbleDialog';
import { CheckMarkMsg } from '../../elements/CheckMarkMsg';
import { Attach } from '../Main/Main';
import { TypingMsg } from '../../elements/TypingMsg';


type MessageBoxProps = {
  messageTime: string;
  msgText: string | null;
  userPic: string;
  isMe: boolean;
  isRead: boolean;
  attachments?: Attach[];
  isTyping?: boolean;
}


export function MessageBox({messageTime, msgText, userPic, isMe, isRead, attachments, isTyping}: MessageBoxProps) {


  return (
    <>
      <div className={ isMe ? styles[`message-box--me`] : styles['message-box'] }>
        <div className={ styles['message-box__avatar'] }>
          <Avatar userPic={ userPic }/>
        </div>
        <div className={ isMe ? styles['container--me'] : styles.container }>
          {
            (!isTyping && !msgText) ? (
              <div>{ attachments?.map(file => (
                <div className={styles['single-file']}>
                  <img className={styles['single-file__image']} src={ file.url } alt={ file.filename }/>
                </div>
              )) }
              </div>
            ) : (
              <BubbleDialog className={ styles['message-box__bubble'] }>
                { isTyping
                  ? <div className={ styles['message-box--typing'] }>
                    <TypingMsg/>
                  </div>
                  : <p className={ styles['message-box__text'] }>
                    { msgText }
                  </p> }
                { attachments && <div className={ styles['message-box__attachments'] }>
                  { attachments?.map(file => <img className={ styles.attachments__file } src={ file.url }
                                                  alt={ file.filename }/>) }
                </div> }
              </BubbleDialog>
            )

          }
          <div style={ {display: 'flex', justifyContent: 'space-between', padding: '0 10px'} }>
            { isMe && <CheckMarkMsg isRead={ isRead }/> }
            <TimeAgo className={ styles['message-box__time'] } messageTime={ messageTime }/>
          </div>
        </div>
      </div>
    </>
  );
};
