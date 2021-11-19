import React from 'react';

import styles from './BubbleDialog.module.scss';
import cn from 'classnames';

type BubbleDialogProps = {
  children: React.ReactNode;
  className: string;
}

export function BubbleDialog({ children, className }: BubbleDialogProps) {

  const klass = cn(styles.bubble, className)

  return (
    <>
      <div className={ klass }>
        {children}
      </div>
    </>
  );
}

