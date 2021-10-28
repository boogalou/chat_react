import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';


import { Button } from '../../elements/Button';
import { FormBlock } from '../../elements/FormBlock';
import { InputField } from '../../elements/Input';
import styles from './Auth.module.css';
import cn from 'classnames';


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
      <h1 className={ styles.form__title }> Войти </h1>
      <span className={ styles.form__subtitle }>Войти в аккаунт</span>

      <InputField
        id={ 'email' }
        type={ 'email' }
        name={ 'email' }
        placeholder={ 'Email' }
        value={ emailValue }
        // callback={ emailOnChangeHandler }
        className={ styles.form__input }
      />

      <InputField
        id={ 'password' }
        type={ 'password' }
        name={ 'password' }
        placeholder={ 'Password' }
        value={ passwordValue }
        // callback={ passwordOnChangeHandler }

      />


      <div className={ cn(styles['btn-group'], styles['form__btn-group']) }>
        <Button
          disabled={ false }>
          Войти
        </Button>

        <Link className={ cn(styles['btn-group__btn--link']) } to="/registration"
        >Зарегистрироваться
        </Link>
      </div>
    </FormBlock>
  )
    ;
};
