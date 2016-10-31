import React, { Component } from 'react';
import Topbar from './Topbar';
import Footer from './Footer';

class App extends Component {
    render() {
        return (
            <div>
              <Topbar />
              <div>
                {this.props.children}
              </div>
              <Footer />
            </div>
        );
    }
}

export default App;
