import { Layout } from '@react-app/@app/layout/Layout';
import { NotFoundPage } from '@react-app/@pages/NotFoundPage';

export const routerConfig = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        async lazy() {
          const { MainPage } = await import('@react-app/@pages/MainPage');
          return { Component: MainPage };
        }
      }
    ]
  },
  {
    path: '*',
    element: <NotFoundPage />
  }
];
