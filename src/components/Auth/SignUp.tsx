import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import styles from './Auth.module.css';

import { Button } from '../../elements/Button';
import { InputField } from '../../elements/Input';
import { useForm } from '../../hooks/useForm';
import { UserInit } from './types';


export const SignUp: FC = () => {
  const {changeHandler, submitHandler, data: user, errors} = useForm<UserInit>({
    validations: {
      name: {
        pattern: {
          value: '^[A-Za-z]*$',
          message: 'You\'re not allowed to...',
        },
        required: {
          value: true,
          message: 'This field is required',
        }
      },
      email: {
        pattern: {
          value: '^[a-zA-Z0-9.!#$%&\'*+\\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$',
          message: 'Не правильно введен адрес почты',
        },
        required: {
          value: true,
          message: 'This field is required',
        }
      },
      password: {
        required: {
          value: true,
          message: 'This field is required',
        },
        custom: {
          isValid: (value) => value.length > 6,
          message: 'Минимальная длинна пароля - 6 символов',
        },
      },
      confirmPassword: {
        required: {
          value: true,
          message: 'This field is required',
        },
        custom: {
          isValid: (value): boolean => value === user.password,
          message: 'Пароль не совпадает...',
        },
      },
    },
    onSubmit: () => setTimeout(() => {
      alert(JSON.stringify(user, null, 2));
    }), initialValues: {name: '', email: '', password: '', confirmPassword: ''},
  });

  return (
    <div className={ styles.container }>
      <form className={ styles.form } onSubmit={ submitHandler }>
        <h1 className={ styles.form__title }>Создать аккаунт</h1>
        <span className={ styles.form__subtitle }>для общения в чате тербуется регистрация</span>


        { errors.name && <p className="error">{ errors.name }</p> }
        <InputField
          id="name"
          type="text"
          placeholder="Name"
          value={ user.name }
          callback={ changeHandler('name') }
          className={ styles['form__input'] }
          required
        />

        { errors.email && <p className="error">{ errors.email }</p> }
        <InputField
          id="email"
          type="text"
          placeholder="Email"
          value={ user.email }
          callback={ changeHandler('email') }
          className={ styles['form__input'] }
          required
        />

        { errors.password && <p className="error">{ errors.password }</p> }
        <InputField
          id="password"
          type="password"
          placeholder="Password"
          value={ user.password }
          callback={ changeHandler('password') }
          className={ styles['form__input'] }
          required
        />

        { errors.confirmPassword && <p className="error">{ errors.confirmPassword }</p> }
        <InputField
          id="confirm password"
          type="password"
          placeholder="Confirm password"
          value={ user.confirmPassword }
          callback={ changeHandler('confirmPassword') }
          className={ styles['form__input'] }
          required
        />

        <div className={ cn(styles['btn-group'], styles['form__btn-group']) }>
          <Button
            type="submit"
            classMix={ styles['btn-group__btn'] }
          >Зарегистрироваться
          </Button>

          <Link
            to="/login"
            className={ cn(styles['btn-group__btn--link']) }
          >Войти в аккаунт
          </Link>
        </div>
      </form>
    </div>
  );
};
