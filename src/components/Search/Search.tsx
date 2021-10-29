import React from 'react';

import styles from './Search.module.css'
import { InputField } from '../../elements/Input';

export function Search() {
  return (
    <>
      <div className={styles.search}>
        <h2 className={ styles['search-title'] }>Memberes</h2>
        <form className={ styles['search-block'] } action="">
          <InputField type="text" placeholder="search" className={ styles['search-input'] } />
        </form>
      </div>
    </>
  );
}