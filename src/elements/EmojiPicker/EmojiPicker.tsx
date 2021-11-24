import React, { FC } from 'react';
import { Picker } from 'emoji-mart';
import cn from 'classnames';



type EmojiPickerProps = {
  classes: string;
}

export const EmojiPicker: FC<EmojiPickerProps> = ({ classes }:EmojiPickerProps) => {
  console.log(classes);
  return (
    <>
      <div className={cn(classes)}>
        <Picker set="apple"/>
      </div>
    </>
  );
};

