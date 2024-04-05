import { FC } from 'react';

import { Button, Container, Group, Title } from '@mantine/core';

import styles from './PageErrorBlock.module.css';

export interface PageErrorBlockProps {
  reload: () => void;
}

export const PageErrorBlock: FC<PageErrorBlockProps> = ({ reload }) => {
  return (
    <div className={styles.root}>
      <Container>
        <Title fz="36" ta="center" mb="50">
          Что-то пошло не так.
        </Title>
        <Group justify="center">
          <Button variant="filled" size="md" onClick={reload}>
            Перезагрузить страницу
          </Button>
        </Group>
      </Container>
    </div>
  );
};
