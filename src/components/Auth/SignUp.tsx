import React, { MouseEvent } from 'react';
import { Link } from 'react-router-dom';

import { Button } from '../../elements/Button';
import { InputField } from '../../elements/Input';
import styles from './Auth.module.css';
import cn from 'classnames';

export const SignUp = () => {

  function registrationClickHandler(evt: MouseEvent<HTMLButtonElement>): void {
    evt.preventDefault();
  }

  return (
    <>
      <div className={ styles.container }>
        <form className={ styles.form }>
          <h1 className={ styles.form__title }>Создать аккаунт</h1>
          <span className={ styles.form__subtitle }>для общения в чате тербуется регистрация</span>

          <InputField
            id="name"
            type="text"
            placeholder="Name"
          />

          <InputField
            type="text"
            id="email"
            placeholder="Email"
          />

          <InputField
            type="password"
            id="password"
            placeholder="Password"
          />

          <InputField
            type="password"
            id="password"
            placeholder="Confirm password"
          />


          <div className={cn (styles['btn-group'], styles['form__btn-group'])}>`
            <Button
              callback={ registrationClickHandler }
            >Зарегистрироваться
            </Button>

            <Link
              to="/login"
              className={ cn(styles['btn-group__btn--link'])}
              >Войти в аккаунт
            </Link >
          </div>
        </form>
      </div>
    </>
  )
    ;
};

