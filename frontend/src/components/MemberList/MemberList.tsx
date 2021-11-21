import React, { useEffect } from 'react';

import styles from './MemberList.module.css';
import { Member } from '../Member';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getConversations } from '../../bus/conversationsList/thunks';
import { useDispatch } from 'react-redux';

export function MemberList() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getConversations())
  }, [])


  const conversations = useAppSelector(state => state.conversations.conversations)

  return (
    <>
      <div className={ styles.contacts }>
        {
          conversations && conversations.map(member => <Member key={ member._id } { ...member }  />)
        }
      </div>

    </>
  );
}
