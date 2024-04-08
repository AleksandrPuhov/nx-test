import { FC } from 'react';

import styles from './Header.module.css';

export const Header: FC = () => {
  return (
    <div className={styles.wrapp}>
      <span>Header</span>
    </div>
  );
};
