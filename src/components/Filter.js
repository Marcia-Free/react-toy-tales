import React from 'react'

class Filter extends React.Component {

 render(){
   const styles = {
     padding: '5%',
   }
   
   return (
    <div style={styles}>
      <input type='checkbox' onChange={this.props.toggleUnliked} /> Not Liked Yet
      <select onChange={this.props.updateSort}>
        <option value=''></option>
        <option value='liked5>='>5 likes or up</option>
        <option value='liked4<='>4 likes or less</option>
      </select>
    </div>
    )
  }
 }
 
 export default Filter