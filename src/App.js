// Import React
import React, { Component } from 'react';
import { Router, navigate } from '@reach/router';
import firebase from './Firebase';
import CheckIn from './CheckIn';
import Home from './Home';
import Welcome from './Welcome';
import Navigation from './Navigation';
import Login from './Login';
import Register from './Register';
import Meetings from './Meetings';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      user: null,
      displayName: null,
      userID: null,
      meetings: null,
      howManyMeetings: null
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(FBUser => {
      if (FBUser) {
        this.setState({
          user: FBUser,
          displayName: FBUser.displayName,
          userID: FBUser.uid
        })

        const meetingsRef = firebase.database().ref(`meetings/${FBUser.uid}`)

        meetingsRef.on('value', snapshot => {
          let meetings = snapshot.val();
          console.log(meetings);
          let meetingsList = [];

          for(let item in meetings) {
            meetingsList.push({
              meetingID: item,
              meetingName: meetings[item].meetingName
            });
          }

          this.setState({
            meetings: meetingsList,
            howManyMeetings: meetingsList.length
          })
        })
      } else {
        this.setState({user: null})
      }
    })
  }

  registerUser = (userName) => {
    firebase.auth().onAuthStateChanged(FBUser => {
      console.log(FBUser.displayName);
      FBUser.updateProfile({
        displayName: userName
      }).then(() => {
        this.setState({
          user: FBUser,
          displayName: FBUser.displayName,
          userID: FBUser.uid
        })
        navigate('/meetings')
      })
    })
  }

  logOutUser = (e) => {
    e.preventDefault();
    this.setState({
      userID: null,
      displayName: null,
      user: null,
    })

    firebase.auth().signOut().then(() => {
      navigate('/login')
    })
  }

  addMeeting = (meetingName) => {
    const ref = firebase
    .database()
    .ref(`meetings/${this.state.user.uid}`)
    ref.push({meetingName: meetingName});
  }



  render(){
    return(
      <div>
        <Navigation
          user={this.state.user}
          logOutUser={this.logOutUser}/>
        {this.state.user &&
          <Welcome
            displayName={this.state.displayName}
            logOutUser={this.logOutUser}/>
        }

        <Router>
          <Home path="/" user={this.state.user}/>
          <Login path="/login" user={this.state.user}/>
          <Meetings addMeeting={this.addMeeting} path="/meetings" user={this.state.user} meetings={this.state.meetings} userID={this.state.userID}/>
          <CheckIn path="/checkin/:userID/:meetingID"/>
          <Register path="/register" user={this.state.user} registerUser={this.registerUser}/>
        </Router>

      </div>
    )
  }


}

export default App;
