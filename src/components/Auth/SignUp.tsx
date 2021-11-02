import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Button } from '../../elements/Button';
import { InputField } from '../../elements/Input';
import styles from './Auth.module.css';
import cn from 'classnames';

export const SignUp = () => {

  const [inputValue, setInputValue] = useState<string>('');

  function changeHandler(evt: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(evt.target.value);
  }

  console.log(inputValue);

  function registrationClickHandler(evt: React.MouseEvent<HTMLButtonElement>): void {
    evt.preventDefault();
  }

  return (

     <div className={ styles.container }>
       <form className={ styles.form }>
         <h1 className={ styles.form__title }>Создать аккаунт</h1>
         <span className={ styles.form__subtitle }>для общения в чате тербуется регистрация</span>

         <div className={ styles['form__group'] }>
           <InputField
             id="name"
             type="text"
             placeholder="Name"
             callback={ changeHandler }
             className={ styles['form__input'] }
           />

           <InputField
             id="email"
             type="text"
             placeholder="Email"
             callback={ changeHandler }
             className={ styles['form__input'] }
           />

           <InputField
             id="password"
             type="password"
             placeholder="Password"
             callback={ changeHandler }
             className={ styles['form__input'] }
           />

           <InputField
             id="password"
             type="password"
             placeholder="Confirm password"
             callback={ changeHandler }
             className={ styles['form__input'] }
           />
         </div>


         <div className={ cn(styles['btn-group'], styles['form__btn-group']) }>
           <Button
             classMix={ styles['btn-group__btn'] }
             callback={ registrationClickHandler }
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
  )
    ;
};
