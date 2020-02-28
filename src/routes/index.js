import Home from '../pages/Home';
import Recipe from '../pages/Recipe';

const ROUTES = [
  { path: '/', component: Home, exact: true },
  { path: '/recipe/:id', component: Recipe, exact: false },
];

export default ROUTES;
