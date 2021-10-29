import React from 'react';

import styles from './Member.module.css';

export function Member() {
  return (
    <>
      <div className={ styles['contact-item'] }>
        <div className={ styles['contact-avatar'] }>
          <img className="image-rounded" src="./img/Без названия.jfif" alt="avatar"/>
          <div className={ styles['online-status'] }></div>
        </div>
        <div className={ styles['contact-item__name'] }>
          <div className={ styles['contact-name'] }>Jessica Alba</div>
          <span className={ styles['contact-status'] }>Hello everyone!</span>
        </div>
        <div className={ styles['time'] }>12:30</div>
      </div>

      <div className="contact-item">
        <div className="contact-avatar">
          <img className="image-rounded" src="./img/margo.jpg" alt="avatar"/>
          <div className="online-status"></div>
        </div>
        <div className="contact-item__name">
          <div className="contact-name">Margot Robbie</div>
          <span className="contact-status">Hello everything!</span>
        </div>
        <div className="time">12:30</div>
      </div>

      <div className="contact-item">
        <div className="contact-avatar">
          <img className="image-rounded" src="./img/emma-stone.jpg" alt="avatar"/>
          <div className="online-status"></div>
        </div>
        <div className="contact-item__name">
          <div className="contact-name">Emma Stone</div>
          <span className="contact-status">Hello everything!</span>
        </div>
        <div className="time">12:30</div>
      </div>

      <div className="contact-item">
        <div className="contact-avatar">
          <img className="image-rounded" src="./img/Без названия.jfif" alt="avatar"/>
          <div className="online-status"></div>
        </div>
        <div className="contact-item__name">
          <div className="contact-name">Jessica Alba</div>
          <span className="contact-status">Hello everything!</span>
        </div>
        <div className="time">12:30</div>
      </div>

      <div className="contact-item">
        <div className="contact-avatar">
          <img className="image-rounded" src="./img/Без названия.jfif" alt="avatar"/>
          <div className="online-status"></div>
        </div>
        <div className="contact-item__name">
          <div className="contact-name">Jessica Alba</div>
          <span className="contact-status">Hello everything!</span>
        </div>
        <div className="time">12:30</div>
      </div>
    </>
  );
}
