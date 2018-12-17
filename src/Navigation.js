import React, { Component } from 'react';
import { FaUsers } from 'react-icons/fa';
import {Link} from '@reach/router'

class Navigation extends Component {
  render(){
    const {user} = this.props;
    return(

      <nav className="site-nav family-sans navbar navbar-expand bg-primary navbar-dark higher">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <FaUsers className="mr-1"/>  Meeting Log
          </Link>
          <div className="navbar-nav ml-auto">
            {user && (
              <span className="d-flex">
                <Link className="nav-item nav-link" to="/login">
                  log out
                </Link>
                <Link className="nav-item nav-link" to="/meetings">
                  meetings
                </Link>
              </span>
            )}

            {!user && (
              <span className="d-flex">
                <Link className="nav-item nav-link" to="/login">
                  log in
                </Link>
                <Link className="nav-item nav-link" to="/register">
                  register
                </Link>
              </span>

            )}


          </div>
        </div>
      </nav>


    )
  }

}

export default Navigation;
