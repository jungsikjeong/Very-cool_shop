import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainPage from './components/views/MainPage/MainPage';
import Navbar from './components/views/Navbar/Navbar';
import GlobalStyles from './components/utils/GlobalStyles';
//Redux
import { Provider } from 'react-redux';
import store from './store';
// import { loadUser } from './actions/auth';
// import setAuthToken from './utils/setAuthToken';

// if (localStorage.token) {
//   setAuthToken(localStorage.token);
// }
const App = () => {
  // useEffect(() => {
  //   store.dispatch(loadUser());
  // }, []);
  return (
    <Provider store={store}>
      <Router>
        <>
          <GlobalStyles />
          <Navbar />
          <Switch>
            <Route exact path="/" component={MainPage} />
          </Switch>
        </>
      </Router>
    </Provider>
  );
};

export default App;
