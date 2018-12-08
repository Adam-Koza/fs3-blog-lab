import React, { Component } from 'react';
import Header from './components/header';
import BlogPreview from './components/blogPreview';
import Footer from './components/footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="My Blog App" />
        <div className="blog-previews">
          <BlogPreview
            title="blog 1"
            author="Adam Koza"
            date="Nov 15"
            body="The Copyright Act of 1909 was meant to be a complete rewrite and overhaul of existing copyright law. As originally proposed in the draft of the bill, copyright protection required putting the word ..."
          />
          <BlogPreview
            title="blog 2"
            author="Adam Koza"
            date="Nov 15"
            body="The Copyright Act of 1909 was meant to be a complete rewrite and overhaul of existing copyright law. As originally proposed in the draft of the bill, copyright protection required putting the word ..."
          />
          <BlogPreview
            title="blog 3"
            author="Adam Koza"
            date="Nov 15"
            body="The Copyright Act of 1909 was meant to be a complete rewrite and overhaul of existing copyright law. As originally proposed in the draft of the bill, copyright protection required putting the word ..."
          />
          <BlogPreview
            title="blog 4"
            author="Adam Koza"
            date="Nov 15"
            body="The Copyright Act of 1909 was meant to be a complete rewrite and overhaul of existing copyright law. As originally proposed in the draft of the bill, copyright protection required putting the word ..."
          />
          <BlogPreview
            title="blog 5"
            author="Adam Koza"
            date="Nov 15"
            body="The Copyright Act of 1909 was meant to be a complete rewrite and overhaul of existing copyright law. As originally proposed in the draft of the bill, copyright protection required putting the word ..."
          />
          <BlogPreview
            title="blog 6"
            author="Adam Koza"
            date="Nov 15"
            body="The Copyright Act of 1909 was meant to be a complete rewrite and overhaul of existing copyright law. As originally proposed in the draft of the bill, copyright protection required putting the word ..."
          />
        </div>
        <Footer bottom="© Copyright 2018" />
      </div>

    );
  }
}

export default App;
