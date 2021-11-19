import React from 'react';

import styles from './SearchTitle.module.scss'

import { PenEdit } from '../../elements/SearchIntro/PenEdit';
import { MembersIcon } from '../../elements/SearchIntro/MembersIcon';

export const SearchTitle = () => {
  return (
    <div className={styles['search-title']}>
      <MembersIcon/>
      <PenEdit/>
    </div>
  );
};
