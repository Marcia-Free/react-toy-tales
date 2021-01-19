import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'


class App extends React.Component{
constructor() {
  super()
  this.state = 
  {
    display: false,
    toyData: []
  }
}

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean,
    })
  }

  addNewToy = (e) => {
    e.preventDefault()
      const newToy = 
      {
        id: 9,
        name: e.target.name.value,
        image: e.target.image.value,
        likes: 0,

      }
      const newToyArr = [...this.state.toyData, newToy]

      this.setState
      ({
        toyData: newToyArr
      })
  }

  deleteToy = (id) => {
    const updatedToyArr = this.state.toyData.filter(toy => toy.id !== id)

    this.setState
    ({
      toyData: updatedToyArr
    })
  }

  increaseLikes = (id) => {
    const updatedToyArr = this.state.toyData.map(toy => {
      if(toy.id === id) 
      {
        toy.likes++
        return toy
      } else
        return toy
    })
    this.setState
    ({
      toyData: updatedToyArr
    })
  }
  


  componentDidMount() {
    fetch('http://localhost:3000/toys')
    .then(res => res.json())
    .then(toyArr => {

      this.setState({
        toyData: toyArr
      })
    })
  }

  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm addNewToy={this.addNewToy}/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer toys={this.state.toyData} deleteToy ={this.deleteToy} increaseLikes={this.increaseLikes}/>
      </>
    );
  }

}

export default App;
