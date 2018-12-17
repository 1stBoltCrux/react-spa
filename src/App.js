// Import React
import React, { Component } from 'react';
import Home from './Home';
import Welcome from './Welcome';
import Navigation from './Navigation'
import { Router } from '@reach/router'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      user: ''
    }
  }
  render(){
    return(
      <div>
        {this.state.user &&
          <Welcome user={this.state.user}/>
        }
        <Navigation user={this.state.user}/>

        <Home user={this.state.user}/>
      </div>
    )
  }


}

export default App;
