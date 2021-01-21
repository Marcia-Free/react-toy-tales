import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'
import Filter from "./components/Filter";


class App extends React.Component{
constructor() {
  super()
  this.state = 
  {
    display: false,
    toyData: [],
    showUnliked: false,
    sortBy: ''
  }
}

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean,
    })
  }

  addNewToy = (newToy) => {
      this.setState({
        toyData: [...this.state.toyData, newToy]
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

  toggleUnliked = () => {
    this.setState({
      showUnliked: !this.state.showUnliked
    })
  }

  updateSort = (e) => {
    this.setState({
      sortBy: e.target.value
    })
  }

  findToys = () => {
    let updatedToys = this.state.toyData;

    if (this.state.showUnliked) {
      updatedToys = this.state.toyData.filter( toy => toy.likes === 0)
    } 

    if (this.state.sortBy === 'liked5>=') {
      updatedToys = updatedToys.filter( toy => {
        return toy.likes >= 5
      })

    } else if (this.state.sortBy === 'liked4<=') {
      updatedToys = updatedToys.filter( toy => {
        return toy.likes <= 4
      })
    }
    return updatedToys

  }

  render(){
    const toysToShow = this.findToys()

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
          <Filter toggleUnliked={this.toggleUnliked} updateSort={this.updateSort}/>
        </div>
        <ToyContainer toys={toysToShow} deleteToy ={this.deleteToy} increaseLikes={this.increaseLikes}/>
      </>
    );
  }

}

export default App;
