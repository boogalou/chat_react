import React, { ReactNode } from 'react';

import styles from './App.module.css'
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { Main } from '../components/Main';
import { Info } from '../components/Info';
import { MemberList } from '../components/MemberList';
import { InputBox } from '../components/InputBox/';
import { Search } from '../components/Search';

type AppProps = {
  children: ReactNode;
}

export function App({ children }: AppProps): JSX.Element {
  return (
    <div className={styles.container}>
      <Sidebar />
      <Main />
      <InputBox />
      <Search />
      <MemberList />
      <Header />
      <Info />
    </div>
  );
}
;
