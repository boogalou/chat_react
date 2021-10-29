import React from 'react';

import styles from './MemberList.module.css';
import { Member } from '../Member/Member';

export function MemberList() {
  return (
    <>
      <div className={ styles.contacts }>
        <Member/>
      </div>

    </>
  );
}
