import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Auth.module.css';

export const SignUp = () => {

  return (
    <>
      <div className={styles.container}>
        <form className={styles.form}>
          <h1 className={styles.form__title}>Создать Аккаунт</h1>
          <span className={styles.subtitle}>для общения в чате тербуется регистрация</span>
          <div className={styles.form__group}>

            <label htmlFor="form__input" className={styles.label__input}></label>
            <input type="text" placeholder="Name" className={styles.form__input}/>

            <label htmlFor="form__input" className={styles.label__input}></label>
            <input type="email" placeholder="Email" className={styles.form__input}/>

            <label htmlFor="form__input" className={styles.label__input}></label>
            <input type="password" placeholder="Password" className={styles.form__input}/>

            <label htmlFor="form__input" className={styles.label__input}></label>
            <input type="password" placeholder="Confirm password" className={styles.form__input}/>
          </div>
          <div className={ styles.btn__block }>
            <button className={ [styles.btn, styles.btn__login].join(' ') }>Зарегистрироваться</button>

            <Link to='/login'
            >Войти в аккаунт
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

