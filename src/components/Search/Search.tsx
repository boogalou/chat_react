import React from 'react';

import styles from './Search.module.scss'
import { InputField } from '../../elements/Input';

export function Search() {
  return (
    <>
      <div className={styles.search}>
        <div className={styles.search__header}>{}</div>

        <div className={ styles['search-block'] } >
          <InputField
            type="text"
            placeholder="search"
            className={ styles['search-input'] } />
        </div>
      </div>
    </>
  );
}