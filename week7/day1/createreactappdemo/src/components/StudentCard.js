import React, { Component } from "react"

class StudentCard extends Component {
  render() {
    return (
      <div>
        <h3>Name: {this.props.name}</h3>
        <p>
          Project: <b>{this.props.project}</b>
        </p>
      </div>
    )
  }
}

// const StudentCard = props => {
//   return (
//     <div>
//       <h3>Name: {props.name}</h3>
//       <p>
//         Poject: <b>{}</b>
//       </p>
//     </div>
//   )
// }

export default StudentCard
// module.exports
export const es = "w"
// exports.es
