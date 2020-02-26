import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './components/Layout/index';
import Home from './pages/Home';
import 'antd/dist/antd.css';

import GlobalStyles from './styles/GlobalStyles';

const App = () => (
  <>
    <GlobalStyles />
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </Layout>
  </>
);
export default App;
