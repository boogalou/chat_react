import React, { useEffect } from 'react';

import styles from './Conversations.module.scss';
import { Conversation } from '../Conversation';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getConversations } from '../../bus/conversations/thunks';
import { useDispatch } from 'react-redux';

export function Conversations() {

  const dispatch = useDispatch();

  const conversations = useAppSelector(state => state.conversations.conversations);

  useEffect(() => {
    if (!conversations.length)
      dispatch(getConversations())
  }, [conversations])

  return (
    <>
      <div className={ styles.contacts }>
        {
          conversations && conversations.map(member => <Conversation key={ member.user._id} { ...member }  />)
        }
      </div>

    </>
  );
}
