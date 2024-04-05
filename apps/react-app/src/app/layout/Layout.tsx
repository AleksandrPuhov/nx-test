import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import styles from './Layout.module.css';

export const Layout: FC = () => {
  return (
    <>
      <div className={styles.menuWrapp}>left</div>
      <div className={styles.mainWrapp}>
        <div className={styles.headerWrapp}>header</div>
        <Outlet />
        <div className={styles.footerWrapp}>footer</div>
      </div>
    </>
  );
};
