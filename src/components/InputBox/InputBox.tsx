import React, { useState, ChangeEvent } from 'react';

import styles from './InputBox.module.scss';

import { Button } from '../../elements/Button';
import { InputField } from '../../elements/Input';
import cn from 'classnames';
import { AttachIcon, MicrophoneIcon, SendIcon, SmileIcon } from '../../elements/svg';


export function InputBox() {

  const [inputValue, setInputValue] = useState('');

  const onChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    setInputValue(evt.target.value);
  };

  return (
    <>
      <div className={ styles['input-box'] }>

        <div className={ styles['chat-input-container'] }>
          <div className={ styles['chat-input-container__attach-block'] }>

            <Button classes={ cn(styles.btn, styles['btn--attach']) }>
              <AttachIcon classes={ styles['btn--img'] }/>
            </Button>
          </div>

          <form className={ cn(styles.form, styles['chat-input-container__form']) }>
            <InputField
              type="text"
              className={ styles['form__input'] }
              callback={ onChangeHandler }
              placeholder='Напиши сюда сваое сообщение'
            />
          </form>

          <div className={ styles['chat-input-container__send-block'] }>

            <Button classes={ cn(styles.btn, styles['btn--emoji']) }>
              <SmileIcon classes={ styles['btn--img'] }/>
            </Button>

            <Button classes={ cn(styles.btn, styles['btn-send']) }>
              { inputValue
                ? <SendIcon classes={ styles['btn--img'] }/>
                : <MicrophoneIcon classes={ styles['btn--img'] }/> }
            </Button>

          </div>
        </div>

      </div>
    </>
  );
}
