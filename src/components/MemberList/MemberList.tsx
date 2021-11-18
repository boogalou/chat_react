import React from 'react';

import styles from './MemberList.module.css';
import { Member } from '../Member';


export type UserType = {
  _id: number;
  fullName: string;
  avatar: string | null;
  isOnline: boolean;
}

type MessageType = {
  _id: number;
  text: string;
  created_at: string;
  user: UserType;
}


const membersList: MessageType[] = [
  {
    _id: Math.random(),
    text: 'Hello Everyone!',
    created_at: '2021-11-06T13:33:00.058Z',
    user: {
      _id: 1,
      isOnline: true,
      fullName: 'Jessica Alba',
      avatar: `https://static.tvtropes.org/pmwiki/pub/images/jessica_alba_7.jpg`,
    },
  },
  {
    _id: Math.random(),
    text: '«Все Советы рабочих и солдатских депутатов учреждают рабочую милицию. Рабочая милиция находится всецело и исключительно в ведении Совета рабочих и солдатских депутатов.',
    created_at: '2021-11-10T19:59:00.058Z',
    user: {
      _id: 3,
      isOnline: false,
      fullName: 'Высоцкий В.',
      avatar: `https://static.mk.ru/upload/entities/2020/07/23/17/articles/detailPicture/91/9c/8a/7b/0fb74b1d41a574b376fbabd62d828b24.jpg`,
    }
  },
  {

    _id: Math.random(),
    text: '«Все Советы рабочих и солдатских депутатов учреждают рабочую милицию. Рабочая милиция находится всецело и исключительно в ведении Совета рабочих и солдатских депутатов.',
    created_at: '2021-11-10T19:59:00.058Z',
    user: {
      _id: 3,
      isOnline: false,
      fullName: 'Bill M. Chen',
      avatar: null,
    }
  }


];


export function MemberList() {

  return (
    <>
      <div className={ styles.contacts }>
        {
          membersList.map(member => <Member  key={ member._id } { ...member }  />)
        }
      </div>

    </>
  );
}
