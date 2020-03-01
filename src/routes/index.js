import Home from '../pages/Home';
import Recipe from '../pages/Recipe';
import NotFound from '../pages/404';

const ROUTES = [
  { path: '/', component: Home, exact: true },
  { path: '/recipe/:id', component: Recipe, exact: true },
  { component: NotFound },
];

export default ROUTES;
