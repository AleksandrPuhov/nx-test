import { FC, Suspense } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { routerConfig } from '../config/routerConfig';
import { Loader } from '@libs/@shared/ui/Loader/Loader';

export const AppRouter: FC = () => {
  const router = createBrowserRouter(routerConfig);

  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};
