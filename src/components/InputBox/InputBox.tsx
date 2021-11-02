import React from 'react';

import styles from './InputBox.module.css'
import { Button } from '../../elements/Button';
import { InputField } from '../../elements/Input';


export function InputBox() {
  return (
    <>
      <div className={ styles['input-box'] }>

        <div className={ styles['chat-input__container'] }>
          <div className={ styles['attach-btn__block'] }>
            <Button classMix={ styles['btn-attach'] }>
              <img src="./img/attachicon_.svg" alt="send_msg icon" width="25" />
            </Button>
          </div>

          <form action="" className={ styles['chat-input__form'] }>
            <InputField type="text" className={ styles['chat-input__input'] } />
          </form>
          <div className={ styles['send-btn__block'] }>
            <Button classMix={ styles['btn-emoji'] }>
              <img src="./img/emoji_.svg" alt="send_msg icon" width="25" />
            </Button>
            <Button classMix={ styles['btn-send'] }>
              <img src="./img/send_msg_.svg" alt="send_msg icon" width="25" height="25"/>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
