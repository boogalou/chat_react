import React from 'react';

import styles from './InputBox.module.css'


export function InputBox() {
  return (
    <>
      <div className={ styles['input-box'] }>

        <div className={ styles['chat-input__container'] }>
          <div className={ styles['attach-btn__block'] }>
            <button className="btn btn-attach">
              <img src="./img/attachicon_.svg" alt="send_msg icon" width="25" />
            </button>
          </div>
          <form action="" className={ styles['chat-input__form'] }>
            <input type="text" className={ styles['chat-input__input'] } />
          </form>
          <div className={ styles['send-btn__block'] }>
            <button className={ styles['btn btn-emoji'] }>
              <img src="./img/emoji_.svg" alt="send_msg icon" width="25" />
            </button>
            <button className={ styles['btn btn-send'] }>
              <img src="./img/send_msg_.svg" alt="send_msg icon" width="25" height="25"/>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
