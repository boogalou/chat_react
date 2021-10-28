import React, { FC, InputHTMLAttributes, ReactElement, ReactNode } from 'react';
import styles from './InputField.module.css';


type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  children?: ReactNode;
  label: ReactElement

}


export const InputField: FC<InputProps> = ({label, className, id, value, onChange, ...InputAttrs}: InputProps) => {

  console.log({...InputAttrs});

  return (
    <div className={ styles.form__group }>
      { label && <label htmlFor={ id }>{ label }</label> }
      <input
        className={ styles.form__input }
        type="text"
        id={ id }
        { ...InputAttrs }
      />
    </div>
  );
};
