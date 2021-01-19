import React, { Component } from 'react';

class ToyCard extends Component {

  handleRemove = () => {
    fetch(`http://localhost:3000/toys/${this.props.id}`, {method: 'DELETE'})
    .then(res => res.json())
    .then(data => {
      this.props.deleteToy(this.props.id)
    })
  }
  

  render() {
    return (
      <div className="card">
        <h2>{this.props.name}</h2>
        <img src={this.props.image} alt={this.props.name} className="toy-avatar" />
        <p>{this.props.likes} Likes </p>
        <button className="like-btn" onClick={() => {this.props.increaseLikes(this.props.id)}}>Like {'<3'}</button>
        <button className="del-btn" onClick={this.handleRemove}>Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
