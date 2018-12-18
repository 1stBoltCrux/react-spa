import React, {Component} from 'react'
import {Link} from '@reach/router';

class Welcome extends Component {
  render(){
    const {displayName, logOutUser} = this.props;
    return(
      <div className="text-center mt-2">
        <span className="text-secondary font-weight-bold pl-1">
          Welcome {displayName}

        </span>
        <Link to="/login"
          className="font-weight-bold text-primary pl-1"
          onClick={e => logOutUser(e)}>
          Log Out
        </Link>
      </div>


    )
  }

}

export default Welcome;
