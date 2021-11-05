import React, { ChangeEvent, FC, InputHTMLAttributes, ReactElement, ReactNode } from 'react';
import styles from './InputField.module.css';
import cn from 'classnames';


type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  type?: string;
  id?: string;
  label?: ReactElement;
  value?: string;
  placeholder?: string;
  callback?: (e: ChangeEvent<HTMLInputElement & HTMLSelectElement>) => void;
  children?: ReactNode;
}

export const InputField: FC<InputProps> = ({
                                             id,
                                             type,
                                             label,
                                             value,
                                             placeholder,
                                             callback,
                                             className,
                                             ...attr
                                           }: InputProps) => {


  const classes = cn(className);
  return (
    <>
      <div className={ styles['form__group'] }>
        { label && <label htmlFor={ id }/>}

        { type === 'textarea' ? (
          <input
            id={ id }
            type={ type }
            placeholder={ placeholder }
            value={ value }
            onChange={ callback }
            className={ classes }
            { ...attr }
          />
        ) : (
          <input
          id={ id }
          type={ type }
          placeholder={ placeholder }
          value={ value }
          onChange={ callback }
          className={ classes }
        { ...attr }
          />
          ) }
      </div>
    </>
  );
};
