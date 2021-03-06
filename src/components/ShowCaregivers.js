import React from 'react'
import CardColumns from 'react-bootstrap/CardColumns'
import Caregiver from './Caregiver.js'


class ShowCaregivers extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showAbout: false
    }
  }

  render () {
    return (
      <div className="container">
      <CardColumns>

      {this.props.caregivers.map((caregiver, index) => {
        return(

          <Caregiver toggleUpdateModal={this.props.toggleUpdateModal} caregiver={caregiver} deleteCaregiver={this.props.deleteCaregiver} index={index}/>
        )
      })}
      </CardColumns>

      </div>
    )
  }
}
export default ShowCaregivers
