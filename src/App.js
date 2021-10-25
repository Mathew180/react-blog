import React from 'react';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlesPage from './pages/ArticlesPage';
import ArticleListPage from './pages/ArticleListPage';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div id="pages">
          <Switch>
          <Route path="/" component={HomePage} exact />
        <Route path="/about" component={AboutPage} />
        <Route path="/article-lists" component={ArticleListPage} />
        <Route path="/article/:name" component={ArticlesPage} />
        <Route component={NotFoundPage} />
          </Switch>
        </div>
    </div>
    </Router>
  );
}

export default App;
