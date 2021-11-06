import React from 'react';

import styles from './MemberList.module.css';
import { Member } from '../Member';


type MemberListType = {
  id: number;
  name: string;
  statusMsg: string;
  onlineStatus: boolean;
  userPic: string;
  lastVisit: string;
}

const membersList: MemberListType[] = [
  {
    id: 1,
    name: 'Jessica Alba',
    statusMsg: 'Hello Everyone!',
    onlineStatus: true,
    userPic: `https://static.tvtropes.org/pmwiki/pub/images/jessica_alba_7.jpg`,
    lastVisit: '2021-11-06T13:33:00.058Z',
  },
  {
    id: 3,
    name: 'Высоцкий В.',
    statusMsg: 'Здравстуйте товарищи!',
    onlineStatus: false,
    userPic: `https://static.mk.ru/upload/entities/2020/07/23/17/articles/detailPicture/91/9c/8a/7b/0fb74b1d41a574b376fbabd62d828b24.jpg`,
    lastVisit: '2021-11-06T19:59:00.058Z'
  }
];


export function MemberList() {

  return (
    <>
      <div className={ styles.contacts }>
        {
          membersList.map(member =>  <Member key={member.id} {...member}/> )
        }
      </div>

    </>
  );
}
