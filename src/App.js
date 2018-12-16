// Import React
import React, { Component } from 'react';
import Home from './Home'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      user: 'Ray'
    }
  }
  render(){
    return(
      <div>
        <Home user={this.state.user}/>
      </div>
    )
  }


}

export default App;
