import { FC } from 'react';
import Link from 'next/link';

import { Button, Container, Group, Title } from '@mantine/core';

import styles from './NotFoundPage.module.css';

export const NotFoundPage: FC = () => {
  return (
    <div className={styles.root}>
      <Container>
        <Title fz="36" ta="center" mb="50">
          Страница не найдена.
        </Title>
        <Group justify="center">
          <Link href={'/'}>
            <Button variant="filled" size="md">
              Перейти на главную
            </Button>
          </Link>
        </Group>
      </Container>
    </div>
  );
};
