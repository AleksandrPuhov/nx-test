import { FC, ReactNode } from 'react';

import { createTheme, MantineProvider } from '@mantine/core';

import '@mantine/core/styles.css';

interface IMantineProvProps {
  children: ReactNode;
}

export const MantineProv: FC<IMantineProvProps> = ({ children }) => {
  const theme = createTheme({
    /** Put your mantine theme override here */
    // primaryColor: "cyan",
  });

  return <MantineProvider theme={theme}>{children}</MantineProvider>;
};
