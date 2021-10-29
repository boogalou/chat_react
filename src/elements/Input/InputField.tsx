import React, { FC, InputHTMLAttributes, ReactElement, ReactNode, useState } from 'react';
import styles from './InputField.module.css';


type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  type?: string;
  label?: ReactElement;
  id?: string;
  value?: string;
  placeholder?: string;
  callback?: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  children?: ReactNode;

}

export const InputField: FC<InputProps> = ({
                                             type,
                                             label,
                                             id,
                                             value,
                                             placeholder,
                                             callback,
                                             className,
                                             ...attr
                                           }: InputProps) => {

  //ToDo adding validation

  return (
    <div className={ styles.form__group }>
      { label && <label htmlFor={ id }>{ label }</label> }

      { type === 'textarea' ? (
        <input
          type="text"
          id={ id }
          placeholder={ placeholder }
          onChange={ callback }
          className={ styles.form__input }
          {...attr}
        />
      ) : (
        <input
          type="text"
          id={ id }
          placeholder={ placeholder }
          value={ value }
          onChange={ callback }
          className={ styles.form__input }
          {...attr}
        />
      ) }

    </div>
  );
};
