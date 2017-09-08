import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const About = () => (
  <div>About</div>
)

const Courses = () => {

  

  return (
    <div></div>
  )
}

const Navbar = () => (
  <header className="navbar">
    <div className="container">

    </div>
    <nav>
      <ul className="nav navbar-nav" >
        <li><a href="/courses">Courses</a></li>
      <li><a href="/experiments">Experiments</a></li>
    <li><a href="/quiz">Quiz</a></li>
      </ul>
      <img src="/static/pic/ustc.gif" className="pulll-right"/>
    </nav>
  </header>
)


ReactDOM.render(
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
    {/* <Route path="/courses" component={Courses} />
  <Route path="/experiments" component={Experiments} />
<Route path="/quiz" component={Quiz} /> */}
    </div>
  </Router>, document.getElementById('root'));
registerServiceWorker();
