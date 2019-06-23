import Landing from './pages/Landing';
import Product from './pages/Product';
import Category from './pages/Category';
import Solution from './pages/Solution';

const routes = [
  {
    path: '/',
    component: Landing,
    exact: true,
  },
  {
    path: '/products/:id',
    component: Product,
  },
  {
    path: '/products/:id/:slug',
    component: Product,
  },
  {
    path: '/categories/:id',
    component: Category,
  },
  {
    path: '/bundles/:id',
    component: Solution,
  },
];

export default routes;
