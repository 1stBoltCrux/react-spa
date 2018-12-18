import React, {Component} from 'react'

class MeetingList extends Component {
  render(){
    const { meetings} = this.props;
    const myMeetings = meetings.map(item => {
      return(

          <div className="list-group-item d-flex" key={item.meetingId}>
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
