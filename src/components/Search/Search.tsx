import React from 'react';

import styles from './Search.module.scss';
import { InputField } from '../../elements/Input';
import { SearchHeader } from '../SearchTitle';



export function Search() {


  return (
    <>
      <div className={ styles.search }>
        <SearchHeader/>
        <div className={ styles.search__block }>
          <InputField
            type="text"
            placeholder="Search"
            className={ styles.block__input }/>
        </div>
      </div>
    </>
  );
}

