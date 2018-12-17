import React, {Component} from 'react'

class Welcome extends Component {
  render(){
    const {user} = this.props;
    return(
      <div className="text-center mt-2">
        <span className="text-secondary font-weight-bold pl-1">
          Welcome {user.displayName}

        </span>
        <a href="/" className="font-weight-bold text-primary pl-1">
          Log Out
        </a>
      </div>


    )
  }

}

export default Welcome;
