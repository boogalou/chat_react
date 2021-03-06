import React from 'react';

import styles from './SearchHeader.module.scss';

import { PenEdit } from '../../elements/SearchIntro/PenEdit';
import { MembersIcon } from '../../elements/SearchIntro/MembersIcon';


export const SearchHeader = () => {
  return (
    <div className={ styles['search-header'] }>
      <MembersIcon classes={ styles['search-header__dialog-icon'] }/>
      <span className={styles['search-header__title']}>Список диалогов</span>
      <PenEdit classes={ styles['search-header__edit-icon'] }/>
    </div>

  );
};
