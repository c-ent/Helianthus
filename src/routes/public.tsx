// import { lazyImport } from '@/utils/lazyImport';


import { Home } from '@/features/misc/routes/Home';
// const { AuthRoutes } = lazyImport(() => import('@/features/auth'), 'AuthRoutes');

export const publicRoutes = [
  {
    path: '/',
    element: <Home />,
  },

];