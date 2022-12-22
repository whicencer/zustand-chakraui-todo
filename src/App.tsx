import React from 'react';
import Routing from './routing/routing';
import { routerProvider } from './routing/router-provider';

function App() {
  return (
    <Routing />
  );
}

export default routerProvider(App);
