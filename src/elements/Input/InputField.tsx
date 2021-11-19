import React, { ChangeEvent, FC, InputHTMLAttributes, ReactElement, ReactNode } from 'react';
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
      { label && <label htmlFor={ id }/> }
      { type === 'textarea' ? (
        <input
          className={ classes }
          id={ id }
          type={ type }
          placeholder={ placeholder }
          value={ value }
          onChange={ callback }
          { ...attr }
        />
      ) : (
        <input
          className={ classes }
          id={ id }
          type={ type }
          placeholder={ placeholder }
          value={ value }
          onChange={ callback }
          { ...attr }
        />
      ) }

    </>
  );
};
