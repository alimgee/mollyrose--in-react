import React from 'react'
import ReactDOM from 'react-dom'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import App from './components/home/App'
import * as serviceWorker from './serviceWorker'
import 'bootstrap/dist/css/bootstrap.min.css'
import Menu from './components/Menu'
import Footer from './components/Footer'
import Story from './components/story/Story'
import './index.css'

  const routing = (
    <Router>
    <Menu />
    <Switch>
          <Route exact path="/" component={App} />
          <Route path="/story/" component={Story} />
          
        </Switch>
      <Footer />
    </Router>
  )
  ReactDOM.render(routing, document.getElementById('root'))



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
