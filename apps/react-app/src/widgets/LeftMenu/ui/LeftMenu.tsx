import { FC } from 'react';

import styles from './LeftMenu.module.css';
import { Button } from '@mantine/core';

export const LeftMenu: FC = () => {
  const menu = [
    { name: 'Menu 1' },
    { name: 'Menu 2' },
    { name: 'Menu 3' },
    { name: 'Menu 4' }
  ];

  return (
    <div className={styles.wrapp}>
      {menu.map(menuItem => {
        return (
          <>
            <Button radius="xl" variant="light" fullWidth justify="center">
              {menuItem.name}
            </Button>
          </>
        );
      })}
    </div>
  );
};
