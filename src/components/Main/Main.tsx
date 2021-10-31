import React from 'react';

import styles from './Mian.module.css';
import { MessageBox } from '../MessageBox';


export function Main() {
  return (
    <section className={ styles.main }>
      <MessageBox
        msgText={ 'В своём стремлении познать действительность Свойство object-fit определяет, каким образом содержимое замещаемых элементов будет подогнано к краям контейнера тега ' }
        messageTime={ '2021-10-30T11:18:05.367Z' }
        userPic={ `https://www.wirewag.com/wp-content/uploads/2020/09/Jessica-Alba.jpg` }
        isMe={true}

      />

    </section>
  );
};
