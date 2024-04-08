import { FC } from 'react';

import { ErrorBoundary } from './providers/ErrorBoundary';
import { MantineProvider } from './providers/MantineProvider';
import { AppRouter } from './router';

import '@react-app/@app/styles/globals.css';
import '@mantine/core/styles.css';

const App: FC = () => {
  return (
    <MantineProvider>
      <ErrorBoundary>
        <AppRouter />
      </ErrorBoundary>
    </MantineProvider>
  );
};

export default App;
