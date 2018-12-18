import React, {Component} from 'react'
import firebase from './Firebase';
import {GoTrashcan} from 'react-icons/go';
import {FaLink} from 'react-icons/fa'
import {navigate} from '@reach/router'

class MeetingList extends Component {

  constructor(props){
    super(props);

  }

deleteMeeting = (e, whichMeeting) => {
  e.preventDefault();
  const ref = firebase.database().ref(`meetings/${this.props.userID}/${whichMeeting}`)
  ref.remove();
}

  render(){
    const { meetings, userID} = this.props;
    const myMeetings = meetings.map(item => {
      return(

          <div className="list-group-item d-flex" key={item.meetingId}>

            <section className="btn-group align-self-center" role="group">

              <button className="btn btn-sm btn-outline-secondary" title="Delete Meeting" onClick={e => this.deleteMeeting(e, item.meetingID)}>
                <GoTrashcan/>
              </button>

              <button className="btn btn-sm btn-outline-secondary" title="Check In to Meeting" onClick={() => navigate(
                `/checkin/${userID}/${item.meetingID}`
              )}>
                <FaLink/>
              </button>

            </section>
            <section className="pl-3 text-left align-self-center">
              {item.meetingName}
            </section>
          </div>

      )

    })
    return(
      <div className="text-center mt-2">
        {myMeetings}
      </div>


    )
  }

}

export default MeetingList;
