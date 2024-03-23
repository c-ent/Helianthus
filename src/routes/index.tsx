import { useRoutes } from 'react-router-dom';
import { publicRoutes } from './public';

import { Home } from '@/features/misc/routes/Home';

export const AppRoutes = () => {

  const commonRoutes = [{ path: '/', element: <Home /> }];


const routes = publicRoutes;

  const element = useRoutes([...routes, ...commonRoutes]);
  return <>{element}</>;
};