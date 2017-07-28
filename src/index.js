import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import registerServiceWorker from './registerServiceWorker';
import { compose, createStore, applyMiddleware } from 'redux'
import { persistStore, autoRehydrate } from 'redux-persist'
import reducers from './reducers'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
// Containers
import Full from './containers/Full/'

// Views
import Login from './views/Pages/Login/'
import Register from './views/Pages/Register/'
import Page404 from './views/Pages/Page404/'
import Page500 from './views/Pages/Page500/'

const history = createBrowserHistory();//在生产环境做本地缓存的东西???

ReactDOM.render((
  <HashRouter history={history}>
    <Switch>
      <Route exact path="/login" name="Login Page" component={Login}/>
      <Route exact path="/register" name="Register Page" component={Register}/>
      <Route exact path="/404" name="Page 404" component={Page404}/>
      <Route exact path="/500" name="Page 500" component={Page500}/>
      <Route path="/index" name="Home" component={Full}/>
      <Route path="/" name="Home" component={Login}/>
    </Switch>
  </HashRouter>
), document.getElementById('root'))
registerServiceWorker();


const store = createStore(reducers, undefined,
    compose(
        applyMiddleware(thunk),
        //autoRehydrate()
    ))
