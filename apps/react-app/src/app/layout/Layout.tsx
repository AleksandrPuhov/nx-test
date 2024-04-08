import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import styles from './Layout.module.css';

import { Header } from '@react-app/@widgets/Header';
import { Footer } from '@react-app/@widgets/Footer';
import { LeftMenu } from '@react-app/@widgets/LeftMenu';

export const Layout: FC = () => {
  return (
    <>
      <LeftMenu />
      <div className={styles.mainWrapp}>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};
