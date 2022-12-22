import Characters from '../pages/Characters';
import Todos from '../pages/Todos';
import { RouteComponent } from './router-typings';

export const publicRoutes: RouteComponent[] = [
  {
    path: '/',
    component: Todos,
    key: 'todos'
  },
  {
    path: '/characters',
    component: Characters,
    key: 'characters'
  }
];