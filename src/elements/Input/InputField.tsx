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
  classes?: string;
}

export const InputField: FC<InputProps> = ({
                                             id,
                                             type,
                                             label,
                                             value,
                                             placeholder,
                                             callback,
                                             classes,
                                             ...attr
                                           }: InputProps) => {



  return (
    <>
      { label && <label htmlFor={ id }/> }
      <input
        className={cn(classes) }
        id={ id }
        type={ type }
        placeholder={ placeholder }
        value={ value }
        onChange={ callback }
        { ...attr }
      />
    </>
  );
};
