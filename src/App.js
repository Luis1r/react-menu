import React, { Component } from 'react';
import CenMenu from './CenMenu';

import logo from './logo.png';

class App extends Component {
  render() {
    let links = [
      { label: 'Home', link: '#home', active: true },
      { label: 'About', link: '#about' },
      { label: 'Create Account', link: '#createAccount' },
      { label: 'Login', link: '#login' },
    ];

    return (
      <div className="container center">
        <CenMenu links={links} logo={logo} />
      </div>
    );
  }
}

export default App;
