import { FC } from 'react';

import { LoadingOverlay } from '@mantine/core';

export const Loader: FC = () => {
  return (
    <LoadingOverlay
      visible={true}
      zIndex={1000}
      overlayProps={{ blur: 0 }}
      loaderProps={{ size: 'xl' }}
    />
  );
};
