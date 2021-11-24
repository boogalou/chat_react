import React, { MouseEventHandler, useState } from 'react';

import styles from './Conversation.module.scss';

import { Avatar } from '../../elements/Avatar';
import { TimeAgo } from '../../elements/TimeAgo';
import { OnlineStatus } from '../../elements/OlineStatus';
import { IUser } from '../../types/apiTypes';
import { useAppDispatch } from '../../hooks/useAppDispach';
import { setCurrentConversation } from '../../bus/conversations/actions';


type ConversationProps = {
  text: string;
  created_at: string;
  user: IUser;
  currentConversationId: string | null;
}


export function Conversation({text, created_at, user, currentConversationId}: ConversationProps) {

  const [activeConves, setActiveConvers] = useState(false)


  const dispatch = useAppDispatch();

  const clickHandler = () => {
    dispatch(setCurrentConversation(user._id))
  }

  return (
    <>
      <div className={ currentConversationId !== user._id ? styles.contact : styles['contact--active']} onClick={ clickHandler }>

        <Avatar
          className={ styles.avatar } avatar={ user.avatar } id={ user._id } fullName={ user.fullName }>
          <OnlineStatus className={ styles['online-status'] } isOnline={ user.isOnline }/>
        </Avatar>

        <div className={ styles.contact__box }>
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
