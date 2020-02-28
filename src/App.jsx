import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './components/Layout/index';
import 'antd/dist/antd.css';

import GlobalStyles from './styles/GlobalStyles';
import ROUTES from './routes';

const App = () => (
  <>
    <GlobalStyles />
    <Layout>
      <Switch>
        {ROUTES.map(({ path, component, exact }) => (
          <Route key={path} path={path} exact={exact} component={component} />
        ))}
      </Switch>
    </Layout>
  </>
);
export default App;
