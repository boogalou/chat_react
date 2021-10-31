import React from 'react';

import styles from './MemberList.module.css';
import { Member } from '../Member';

export function MemberList() {

  return (
    <>
      <div className={ styles.contacts }>
        <Member messageTime={'2021-10-30T11:18:05.367Z'} />
      </div>

    </>
  );
}
