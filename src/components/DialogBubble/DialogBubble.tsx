import React from 'react';

import styles from './DialogBubble.module.css';

type DialogBubbleProps = {}

export function DialogBubble({}: DialogBubbleProps) {
  return (
    <>
      <div className={ styles['bubble-container--left'] }>
        <div className={ styles['bubble-avatar'] }>
          <img className={ styles['image-rounded'] } src="./img/Без названия.jfif" alt="avatar"/>
        </div>

        <div className={ styles.bubble }>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi esse aliquam
          fugiat
          molestiae
          minus sequi in? Dolore nisi cumque voluptatibus rerum asperiores? Tenetur architecto cum, fugiat beatae ex
          culpa ratione!
        </div>
      </div>

      <div className={ styles['bubble-container--right'] }>
        <div className={ styles.bubble }>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi esse aliquam
          fugiat
          molestiae
          minus sequi in?
        </div>
        <div className={ styles['bubble-avatar'] }>
          <img className={ styles['image-rounded'] } src="./img/margo.jpg" alt="avatar"/>
        </div>
      </div>
      <div className={ styles['bubble-container--left'] }>
        <div className={ styles['bubble-avatar'] }>
          <img className={ styles['image-rounded'] } src="./img/emma-stone.jpg" alt="avatar"/>
        </div>

        <div className={ styles.bubble }>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
      </div>
    </>
  );
};
