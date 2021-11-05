import React from 'react';

import styles from './Mian.module.css';
import { MessageBox } from '../MessageBox';

export type Attach = {
  filename: string;
  url: string;
};

const attachments: Attach[] = [
  {
    filename: 'image.jpg',
    url: 'https://source.unsplash.com/100x100/?random=1&film,athletics,weater',
  },
  {
    filename: 'image.jpg',
    url: 'https://source.unsplash.com/100x100/?random=1&film,athletics,weater',
  },
  {
    filename: 'image.jpg',
    url: 'https://source.unsplash.com/100x100/?random=1&film,athletics,weater',
  },

];

export function Main() {

  return (
    <section className={ styles.main }>
      <MessageBox
        msgText={ 'Давайте не забывать, что неподкупность государственных СМИ стала доступной ширнармассам' }
        messageTime={ '2021-10-30T11:18:05.367Z' }
        userPic={ `https://www.wirewag.com/wp-content/uploads/2020/09/Jessica-Alba.jpg` }
        isMe={ false }
        isRead={ false }
      />

      <MessageBox
        msgText={ 'В своём стремлении познать действительность ' }
        messageTime={ '2021-10-30T11:18:05.367Z' }
        userPic={ `https://www.wirewag.com/wp-content/uploads/2020/09/Jessica-Alba.jpg` }
        isMe={ true }
        isRead={ true }
      />

      <MessageBox
        msgText={ 'Сама идея работы генератора заимствована у псевдосоветского "универсального кода речей", из которого мы выдернули используемые в нём словосочетания, запилили приличное количество собственных, в несколько раз усложнили алгоритм, добавив новые схемы сборки, – и оформили в виде быстрого и удобного сервиса для получения тестового контента.' }
        messageTime={ '2021-10-30T11:18:05.367Z' }
        userPic={ `https://www.wirewag.com/wp-content/uploads/2020/09/Jessica-Alba.jpg` }
        isMe={ false }
        isRead={ false }
      />

      <MessageBox
        msgText={ 'Банальные, но неопровержимые выводы, а также явные признаки победы институционализации представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть ассоциативно распределены по отраслям. В своём стремлении повысить качество жизни, они забывают, что начало повседневной работы по формированию позиции напрямую зависит от системы обучения кадров, соответствующей насущным потребностям. Банальные, но неопровержимые выводы, а также акционеры крупнейших компаний, превозмогая сложившуюся непростую экономическую ситуацию, разоблачены.' }
        messageTime={ '2021-10-30T11:18:05.367Z' }
        userPic={ `https://www.wirewag.com/wp-content/uploads/2020/09/Jessica-Alba.jpg` }
        attachments={ attachments }
        isMe={ true }
        isRead={ false }
      />

    </section>
  );
};
