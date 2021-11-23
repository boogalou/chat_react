import React, { useEffect, useRef } from 'react';

import styles from './Mian.module.css';

import { MessageBox } from '../MessageBox';
import { useAppSelector } from '../../hooks/useAppSelector';
import { IMessage } from '../../types/apiTypes';

import { fetchMessages } from '../../bus/messages/thunk';
import { useDispatch } from 'react-redux';
import { Preloader } from '../../elements/svg';





export function Main() {

  let messages = useAppSelector((state) => state.messages.messages);
  const {currentConversation, isFetching} = useAppSelector((state) => state.conversations);

  const refScroll = useRef<HTMLElement>(null);

  useEffect(() => {
    if (refScroll && refScroll.current) {
      refScroll.current.scrollTo(0, 999999)
    }
  }, [messages])

  const dispatch = useDispatch();

  useEffect(() => {
    if (currentConversation)
      dispatch(fetchMessages(currentConversation));
  }, [currentConversation]);

  messages = [
    {
      _id: '1257c61e0fc78c5398249f07d0577c1e',
      text: '😐Давайте не забывать, что😐 неподкупность государственных СМИ стала доступной ширнармассам😐',
      created_at: '2021-10-30T11:18:05.367Z',
      avatar: `https://www.wirewag.com/wp-content/uploads/2020/09/Jessica-Alba.jpg`,
      voice: null,
      attachments: null,
      isMe: false,
      isRead: false,
      isTyping: false,
    },
    {
      _id: '6e2809e6c20aa99d52ec027f52e94f',
      text: 'В своём стремлении познать действительность ',
      created_at: '2021-10-30T11:18:05.367Z',
      avatar: `https://www.wirewag.com/wp-content/uploads/2020/09/Jessica-Alba.jpg`,
      voice: null,
      attachments: null,
      isMe: true,
      isRead: true,
      isTyping: false,
    },
    {
      _id: '1257c61e0fc78c5398249f07d0577c1e',
      text: 'Сама идея работы генератора заимствована у псевдосоветского "универсального кода речей", из которого мы выдернули используемые в нём словосочетания, запилили приличное количество собственных, в несколько раз усложнили алгоритм, добавив новые схемы сборки, – и оформили в виде быстрого и удобного сервиса для получения тестового контента.',
      created_at: '2021-10-30T11:18:05.367Z',
      attachments: null,
      avatar: `https://www.wirewag.com/wp-content/uploads/2020/09/Jessica-Alba.jpg`,
      voice: null,
      isMe: false,
      isRead: false,
      isTyping: false,
    },
    {
      _id: '1257c61e0fc78c5398249f07d0577c1e',
      text: 'Банальные, но неопровержимые выводы, а также явные признаки победы институционализации представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть ассоциативно распределены по отраслям. В своём стремлении повысить качество жизни, они забывают, что начало повседневной работы по формированию позиции напрямую зависит от системы обучения кадров, соответствующей насущным потребностям. Банальные, но неопровержимые выводы, а также акционеры крупнейших компаний, превозмогая сложившуюся непростую экономическую ситуацию, разоблачены.',
      created_at: '2021-10-30T11:18:05.367Z',
      avatar: `https://www.wirewag.com/wp-content/uploads/2020/09/Jessica-Alba.jpg`,
      voice: null,
      attachments: [
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
      ],
      isMe: false,
      isRead: false,
      isTyping: false,
    },
    {
      _id: '1257c61e0fc78c5398249f07d0577c1e',
      text: 'Сама идея работы генератора заимствована у псевдосоветского "универсального кода речей", из которого мы выдернули используемые в нём словосочетания, запилили приличное количество собственных, в несколько раз усложнили алгоритм, добавив новые схемы сборки, – и оформили в виде быстрого и удобного сервиса для получения тестового контента.',
      created_at: '2021-10-30T11:18:05.367Z',
      avatar: `https://www.wirewag.com/wp-content/uploads/2020/09/Jessica-Alba.jpg`,
      voice: null,
      attachments: null,
      isMe: false,
      isRead: false,
      isTyping: true,
    },
    {
      _id: '1257c61e0fc78c5398249f07d0577c1e',
      text: '',
      created_at: '2021-10-30T11:18:05.367Z',
      avatar: `https://www.wirewag.com/wp-content/uploads/2020/09/Jessica-Alba.jpg`,
      voice: null,
      attachments: [
        {
          filename: 'image.jpg',
          url: 'https://i1.sndcdn.com/avatars-000184939717-kd5pr5-t500x500.jpg',
        },],
      isMe: false,
      isRead: false,
      isTyping: false,
    },
    {
      _id: '1257c61e0fc78c5398249f07d0577c1e',
      text: '',
      created_at: '2021-10-30T11:18:05.367Z',
      avatar: `https://www.wirewag.com/wp-content/uploads/2020/09/Jessica-Alba.jpg`,
      voice: null,
      attachments: [
        {
          filename: 'image.jpg',
          url: 'https://images.all-free-download.com/images/graphiclarge/ford_fairlane_zb_500_516881.jpg',
        },],
      isMe: true,
      isRead: false,
      isTyping: false,
    },
    {
      _id: '1257c61e0fc78c5398249f07d0577c1e',
      text: '',
      created_at: '2021-10-30T11:18:05.367Z',
      avatar: `https://www.wirewag.com/wp-content/uploads/2020/09/Jessica-Alba.jpg`,
      voice: 'https://www.mightycall.com/wp-content/uploads/2016/10/I-am-sorry-I-could-not-come-to-the-phone.mp3',
      attachments: null,
      isMe: false,
      isRead: false,
      isTyping: false,
    },

  ];

  return (
    <section ref={refScroll} className={ styles.main }>


      <Preloader classes={styles.preloader}/>
      { messages.map(msg => <MessageBox key={ msg._id } { ...msg }/>) }


    </section>
  );
};


