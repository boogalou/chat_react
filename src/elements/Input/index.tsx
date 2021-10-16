import React, { FC, useState } from 'react';
import { InputTypes } from '../../types/inputTypes';

type InputProps = {
  className: string;
  callback: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  children?: never;
} & InputTypes;

export const Input: FC<InputProps> = (props: InputProps) => {

  const [inputValue, setInputValue] = useState('');

  const onChangeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(evt.target.value)
  }

  return (
    <>
      <input
        onChange={ onChangeHandler }
        value={ inputValue }
        id={ props.id }
        name={ props.name }
        placeholder={ props.placeholder }
        type={ props.type }
        className={ props.className }
      />
    </>
  );
};
