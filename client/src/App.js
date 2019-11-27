import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ArticlePage from "./pages/ArticlePage";
import ArticlesListPage from "./pages/ArticlesListPage";
import NavBar from "./components/NavBar";
import NotFoundPage from "./pages/NotFoundPage";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <div id="page-body">
            <Route path="/" component={HomePage} exact />
            <Route path="/about" component={AboutPage} />
            <Route path="/article/:name" component={ArticlePage} />
            <Route path="/articles-list" component={ArticlesListPage} />
            <Route component={NotFoundPage} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
