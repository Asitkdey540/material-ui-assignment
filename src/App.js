import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Fetch from './components/Fetch/Fetch';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NoMatch from './components/NoMatch/NoMatch';
import PostDetail from './components/PostDetail/PostDetail';
import Comment from './components/Comments/Comment';

function App() {
  return (
    <div>
      <Header></Header>

      <Router>
        <Switch>
          <Route path="/blog-post">
            <Fetch />
          </Route>
          <Route path="/postDetail/:id">
            <PostDetail />
          </Route>
          <Route path="/commentDetail/:id">
            <Comment/>
          </Route>
          <Route exact path="/">
            <Fetch />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
