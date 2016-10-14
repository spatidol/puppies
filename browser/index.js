'use strict';

import { Provider } from 'react-redux';
import store from './store.js'
import React from 'react';
import ReactDOM from 'react-dom';
import AllPuppies from './AllPuppies';
import AllPuppiesContainer from './AllPuppiesContainer.js';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { loadPuppies } from './action-creators';

const onEnterPuppies = function() {
  return store.dispatch(loadPuppies())
}



ReactDOM.render(
<Provider store={store}>
<Router history={hashHistory}>
  <Route path='/'>
    <IndexRoute component={AllPuppiesContainer} />
    <Route path='puppies' component={AllPuppiesContainer} onEnter={onEnterPuppies}/>
  </Route>
</Router>
</Provider>,
  document.getElementById('app')
);
