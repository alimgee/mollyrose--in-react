import React from 'react'
import ReactDOM from 'react-dom'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import App from './components/home/Home'
import * as serviceWorker from './serviceWorker'
import 'bootstrap/dist/css/bootstrap.min.css'
import Menu from './components/Menu'
import Notfound from './components/Notfound'
import Footer from './components/Footer'
import Story from './components/story/Story'
import News from './components/news/News'
import './index.css'
import Cancer from './components/cancer/Cancer'
import Help from './components/help/Help'
import About from './components/about/About'



const routing = (
  <Router>
    <Menu />
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/story/" component={Story} />
      <Route path="/news/" component={News} />
      <Route path="/childhoodcancer/" component={Cancer} />
      <Route path="/helpout/" component={Help} />
      <Route path="/about/" component={About} />
      <Route component={Notfound} />
    </Switch>
    <Footer />
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
