import React, { ChangeEvent, useRef, useState } from 'react';
import { useFileUpload } from 'use-file-upload';
import cn from 'classnames';

import styles from './InputBox.module.scss';

import { Button } from '../../elements/Button';
import { InputField } from '../../elements/Input';
import { AttachIcon, MicrophoneIcon, SendIcon, SmileIcon } from '../../elements/svg';
import { EmojiPicker } from '../../elements/EmojiPicker';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';

export function InputBox() {

  const [inputValue, setInputValue] = useState('');
  const [visibleEmoji, setVisibleEmoji] = useState(true);

  const outsideClick = useRef(null);


  const visibleEmojiToggler = () => {
    setVisibleEmoji(!visibleEmoji);
  };

  const outsideClickHandler = () => {
    setVisibleEmoji(true)
  };

  useOnClickOutside(outsideClick, outsideClickHandler);

  const onChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    setInputValue(evt.target.value);
  };

  const [files, selectFiles] = useFileUpload();

  const fileUploadHandler = () => {
    selectFiles(
      {accept: 'image/*', multiple: true},
      (files) => console.log(({files})));
  };






  return (
    <>
      <div className={ styles['input-box'] }>

        <div className={ styles['chat-input-container'] }>
          <div className={ styles['chat-input-container__attach-block'] }>

            <Button
              callback={ fileUploadHandler }
              classes={ cn(styles.btn, styles['btn--attach']) }>
              <AttachIcon classes={ styles['btn--img'] }/>
            </Button>
          </div>

          <form className={ cn(styles.form, styles['chat-input-container__form']) }>
            <InputField
              type="text"
              className={ styles['form__input'] }
              callback={ onChangeHandler }
              placeholder="Напиши свое сообщение..."
            />
          </form>

          <div className={ styles['chat-input-container__send-block'] }>

            <div ref={ outsideClick }>
              <Button classes={ cn(styles.btn, visibleEmoji ? styles.btn__emoji : styles['btn__emoji--active']) }>
                <SmileIcon
                  classes={ styles['btn--img'] }
                  callback={ visibleEmojiToggler }
                />

                <EmojiPicker classes={ cn(visibleEmoji
                  ? styles['btn__emoji-picker']
                  : styles['btn__emoji-picker--active']) }
                />
              </Button>
            </div>

            <Button classes={ cn(styles.btn, styles['btn-send']) }>
              { inputValue
                ? <SendIcon classes={ styles['btn--img'] }/>
                : <MicrophoneIcon classes={ styles['btn--micro'] }/> }
            </Button>

          </div>
        </div>

      </div>
    </>
  );
}
