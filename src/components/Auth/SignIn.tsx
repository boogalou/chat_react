import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './Auth.module.css';
import { ButtonJSX } from '../../elements/Button';
import { Input } from '../../elements/Input';
import { FormBlock } from '../../elements/FormBlock';
import { TitleH1 } from '../../elements/TitleH1';


export const SignIn: FC = () => {

  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const emailOnChangeHandler = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    setEmailValue(evt.target.value);
    console.log(emailValue);
  };

  const passwordOnChangeHandler = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    setPasswordValue(evt.target.value);
    console.log(evt.target.value);
  };

  const submitHandler = (evt: React.FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();
  };

  return (
    <FormBlock callback={ submitHandler } className={ styles.form }>
      <TitleH1 className={ styles.form__title }> Войти </TitleH1>
      <span className={ styles.subtitle }>Войти в аккаунт</span>
      <div className={ styles.form__group }>
        <Input
          id={ 'email' }
          type={ 'email' }
          name={ 'email' }
          placeholder={ 'Email' }
          value={ emailValue }
          callback={ emailOnChangeHandler }
          className={ styles.form__input }
        />

        <Input
          id={ 'password' }
          type={ 'password' }
          name={ 'password' }
          placeholder={ 'Password' }
          value={ passwordValue }
          callback={ passwordOnChangeHandler }
          className={ styles.form__input }
        />


        <div className={ styles.btn__block }>
          <ButtonJSX

            className={
              [styles.btn, styles.btn__login].join(' ') }>
            Войти
          </ButtonJSX>

          <Link to="/registration"
          >Зарегистрироваться
          </Link>
        </div>
      </div>
    </FormBlock>
  );
};
