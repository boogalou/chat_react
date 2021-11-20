import React from 'react';

import styles from './SearchHeader.module.scss';

import { PenEdit } from '../../elements/SearchIntro/PenEdit';
import { MembersIcon } from '../../elements/SearchIntro/MembersIcon';


export const SearchHeader = () => {
  return (
    <div className={ styles['search-header'] }>
      <MembersIcon classes={ styles['dialog-icon'] } title={ 'Список диалогов' }/>
      <PenEdit classes={ styles['edit-icon'] }/>
    </div>

  );
};
