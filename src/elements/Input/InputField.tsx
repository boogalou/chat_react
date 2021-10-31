import React, { FC, InputHTMLAttributes, ReactElement, ReactNode, useState } from 'react';
import styles from './InputField.module.css';
import cn from 'classnames';


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

  const classes = cn(className)

  return (
    <>
      { label && <label htmlFor={ id }>{ label }</label> }

      { type === 'textarea' ? (
        <input
          type="text"
          id={ id }
          placeholder={ placeholder }
          onChange={ callback }
          className={ classes }
          {...attr}
        />
      ) : (
        <input
          type="text"
          id={ id }
          placeholder={ placeholder }
          value={ value }
          onChange={ callback }
          className={ classes }
          {...attr}
        />
      ) }

    </>
  );
};
