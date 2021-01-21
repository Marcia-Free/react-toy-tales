import React, { Component } from 'react';

class ToyForm extends Component {



  handleSubmit = (e) => {
  e.preventDefault()

  const newToy = {
    ...this.state, 
    name: e.target.name.value,
    image: e.target.image.value,
    likes: 0,
  }
  const reqObj = 
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:  JSON.stringify(newToy)
    }

    fetch('http://localhost:3000/toys', reqObj)
    .then(res => res.json())
    .then(toy => {
      this.props.addNewToy(toy)
    })

  }





  render() {
    return (
      <div className="container">
        <form className="add-toy-form" onSubmit={this.handleSubmit}>
          <h3>Create a toy!</h3>
          <input type="text" name="name" placeholder="Enter a toy's name..." className="input-text"/>
          <br/>
          <input type="text" name="image" placeholder="Enter a toy's image URL..." className="input-text"/>
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit"/>
        </form>
      </div>
    );
  }

}

export default ToyForm;
