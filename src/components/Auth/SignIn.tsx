import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import styles from './Auth.module.css';

import { Button } from '../../elements/Button';
import { InputField } from '../../elements/Input';
import { useForm } from '../../hooks/useForm';
import { UserInit } from './types';


export const SignIn: FC = () => {

  const {data: user, errors, submitHandler, changeHandler} = useForm<UserInit>({
    validations: {
      email: {
        pattern: {
          value: "^[a-zA-Z0-9.!#$%&'*+\\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$",
          message: 'You\'re not allowed to...',
        },
      },
      password: {
        required: {
          value: true,
          message: 'This field is required',
        },
        custom: {
          isValid: (value) => value.length > 6,
          message: 'The password needs to be at...',
        },
      },
    },
    onSubmit: () => setTimeout(() => {
      alert(JSON.stringify(user, null, 2));
    }), initialValues: {password: '1597896', email: 'email@mail.em'}

  });

  return (
    <div className={ styles.container }>
      <form className={ styles.form } onSubmit={ submitHandler }>
        <h1 className={ styles.form__title }> Войти </h1>
        <span className={ styles.form__subtitle }>Войти в аккаунт</span>

        { errors.email && <p className="error">{ errors.email }</p> }
        <InputField
          id="email"
          type="email"
          placeholder="Email"
          value={ user.email || '' }
          callback={ changeHandler('email') }
          className={ styles['form__input'] }
        />

        { errors.password && <p className="error">{ errors.password }</p> }
        <InputField
          id="password"
          type="password"
          placeholder="Password"
          value={ user.password || '' }
          callback={ changeHandler('password') }
          className={ styles['form__input'] }
        />

        <div className={ cn(styles['btn-group'], styles['form__btn-group']) }>
          <Button
            type="submit"
            classMix={ styles['btn-group__btn'] }
            disabled={ false }
          >
            Войти
          </Button>
          <Link className={ cn(styles['btn-group__btn--link']) } to="/registration"
          >Зарегистрироваться
          </Link>
        </div>
      </form>
    </div>
  );
};
