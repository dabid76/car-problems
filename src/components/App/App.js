
import 'semantic-ui-css/semantic.min.css';
import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import {connect} from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import Home from '../Home/Home';
import WhatsWrong from '../WhatsWrong/WhatsWrong';
import one from '../one/one';
import Edit from '../Edit/Edit'


import './App.css';

import Menu from '../Menu/Menu';
import styled from 'styled-components';

// import body from '../../body/body/body.sketch';

// import P5Wrapper from 'react-p5-wrapper';



const Head = styled.div`
  position: flex;
  z-index: 150;
`

class App extends Component {
  componentDidMount () {
    this.props.dispatch({type: 'FETCH_USER'})
  }

  render() {

    
    return (
      
      <Router>
        <div>
        <Head>

        <Menu/>
        {/* <P5Wrapper sketch={body}></P5Wrapper> */}
        </Head>
        {/* <P5Wrapper sketch={body}></P5Wrapper> */}

          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />
            <Route
              exact
              path="/home"
              component={Home}
            />
            {/* <Route exact from="/" to="/home" path="/Home" component={Home} /> */}
            {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
            <Route
              exact
              path="/about"
              component={AboutPage}
            />

            <Route
              path="/WhatsWrong"
              component={WhatsWrong}
            />

            <Route
              path='/one/:id'
              component={one} />

            <Route
              path='/Edit/:id'
              component={Edit} />

            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
            
            <ProtectedRoute
              exact
              path="/UserPage"
              component={UserPage}
            />
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
            <Route
              exact
              path="/info"
              component={InfoPage}
            />
            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <Footer />
        </div>
      </Router>
  )}
}

export default connect()(App);
