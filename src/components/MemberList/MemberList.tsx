import React from 'react';

import styles from './MemberList.module.css';
import { Member } from '../Member';


export type UserType = {
  _id: string;
  fullName: string;
  avatar: string | null;
  isOnline?: boolean;
}

type MessageType = {
  _id: string;
  text: string;
  created_at: string;
  user: UserType;
}


const membersList: MessageType[] = [
  {
    _id: String(Math.random()),
    text: 'Hello Everyone!',
    created_at: '2021-11-06T13:33:00.058Z',
    user: {
      _id: String(Math.random()),
      isOnline: true,
      fullName: 'Jessica Alba',
      avatar: `https://static.tvtropes.org/pmwiki/pub/images/jessica_alba_7.jpg`,
    },
  },
  {
    _id: String(Math.random()),
    text: '«Все Советы рабочих и солдатских депутатов учреждают рабочую милицию. Рабочая милиция находится всецело и исключительно в ведении Совета рабочих и солдатских депутатов.',
    created_at: '2021-11-10T19:59:00.058Z',
    user: {
      _id: String(Math.random()),
      isOnline: false,
      fullName: 'Высоцкий В.',
      avatar: `https://static.mk.ru/upload/entities/2020/07/23/17/articles/detailPicture/91/9c/8a/7b/0fb74b1d41a574b376fbabd62d828b24.jpg`,
    }
  },
  {

    _id: String(Math.random()),
    text: '«Все Советы рабочих и солдатских депутатов учреждают рабочую милицию. Рабочая милиция находится всецело и исключительно в ведении Совета рабочих и солдатских депутатов.',
    created_at: '2021-11-10T19:59:00.058Z',
    user: {
      _id: String(Math.random()),
      isOnline: false,
      fullName: 'Bill M.Chen',
      avatar: null,
    }
  },

  {
    _id: "9973ec6566de894d7",
    text: "Cillum adipisicing deserunt et aliqua id aliquip laboris quis ullamco velit incididunt enim. Aliquip Lorem ullamco voluptate irure sunt laboris dolor nulla esse. Sunt consectetur voluptate et adipisicing veniam eu deserunt reprehenderit officia non.",
    created_at: " Tue Feb 16 2010 03:18:14 GMT+0300 (Москва, стандартное время)",
    user: {
      _id: "73b553e0d2b4462b7dacac967c37d8c42",
      fullName: "Penny Richardson",
      avatar: null
    }
  },
  {
    _id: "9414a80e7d1b8b4bb",
    text: "Ut magna ad pariatur excepteur voluptate. Nulla culpa aliquip minim fugiat incididunt anim labore amet exercitation officia culpa sunt exercitation deserunt. Id excepteur ex sint culpa ex magna proident qui eiusmod in sint.",
    created_at: " Sat Jun 04 1994 03:54:13 GMT+0400 (Москва, летнее время)",
    user: {
      _id: "3de27d9dfacf25824c1a50da73d5c684",
      fullName: "Summer Wolfe",
      avatar: null
    }
  },

];

export function MemberList() {

  return (
    <>
      <div className={ styles.contacts }>
        {
          membersList.map(member => <Member key={ member._id } { ...member }  />)
        }
      </div>

    </>
  );
}
