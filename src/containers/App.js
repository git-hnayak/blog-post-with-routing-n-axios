import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Blog from '../containers/Blog/Blog';

class App extends Component {
  //To enable routing in any react app, we need to wrap our JSX to a component called BrowserRouter from react-router-dom library
    render() {
      return (
        // <BrowserRouter basename="/blog-post">
          <BrowserRouter>
          <div className="App">
            <Blog />
          </div>
        </BrowserRouter>
      );
  }
}

export default App;
