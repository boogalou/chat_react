import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';


import styles from './Auth.module.css';
import { Button } from '../../elements/Button';
import { InputField } from '../../elements/Input';


export const SignIn: FC = () => {

  const [inputValue, setInputlValue] = useState('');


  const changeHandler = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    setInputlValue(evt.target.value);
  };

  const submitHandler = (evt: React.FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();
  };

  return (
    <form className={ styles.form }>
      <h1 className={ styles.form__title }> Войти </h1>
      <span className={ styles.form__subtitle }>Войти в аккаунт</span>

      <InputField
        id={ 'email' }
        type={ 'email' }
        name={ 'email' }
        placeholder={ 'Email' }
        callback={ changeHandler }
      />

      <InputField
        id={ 'password' }
        type={ 'password' }
        name={ 'password' }
        placeholder={ 'Password' }
        callback={ changeHandler }
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
    </form>
  )
    ;
};
