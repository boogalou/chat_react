import React from 'react';

import styles from './Mian.module.css'
import { DialogBubble } from '../DialogBubble';

export function Main() {
  return (
    <div className={styles.main}>
      <DialogBubble />
    </div>
  );
};
