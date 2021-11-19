import React from 'react';

import styles from './MessageBox.module.css';

import { Avatar } from '../../elements/Avatar';
import { TimeAgo } from '../../elements/TimeAgo';
import { BubbleDialog } from '../../elements/BubbleDialog';
import { CheckMarkMsg } from '../../elements/CheckMarkMsg';
import { MessageType } from '../Main/Main';
import { TypingMsg } from '../../elements/TypingMsg';
import { VoiceMessage } from '../../elements/VoiceMsg';


type MessageBoxProps = MessageType & {}


export function MessageBox({created_at, text, avatar, isMe, isRead, attachments, isTyping, voice}: MessageBoxProps) {


  return (
    <>
      <div className={ isMe ? styles[`message-box--me`] : styles['message-box'] }>
        <div className={ styles['message-box__avatar'] }>
          <Avatar avatar={ avatar }/>
        </div>
        <div className={ isMe ? styles['container--me'] : styles.container }>
          { isTyping ? <TypingMsg/> :
            (text || voice)
              ? (
                <BubbleDialog className={ styles['message-box__bubble'] }>
                  <p className={ styles['message-box__text'] }>{ text }</p>
                  { attachments && <div className={ styles['message-box__attachments'] }>
                    { attachments?.map(file => <img className={ styles.attachments__file } src={ file.url }
                                                    alt={ file.filename }/>) }
                  </div> }
                  { voice && <VoiceMessage voice={ voice }/> }
                </BubbleDialog>
              ) : (
                <div>{ attachments?.map(file => (
                  <div className={ styles['single-file'] }>
                    <img className={ styles['single-file__image'] } src={ file.url } alt={ file.filename }/>
                  </div>
                )) }
                </div>
              )

          }
          <div style={ {display: 'flex', justifyContent: 'space-between', padding: '0 10px'} }>
            { isMe && <CheckMarkMsg isRead={ isRead }/> }
            <TimeAgo className={ styles['message-box__time'] } created_at={ created_at }/>
          </div>
        </div>
      </div>
    </>
  );
};
