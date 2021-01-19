import React from 'react';
import ToyCard from './ToyCard'


class ToyContainer extends React.Component{
  render() 
  {
    return(
      <div id="toy-collection">
        {this.loadToys()}
      </div>
    )
  }
  


  loadToys = () => {
    return this.props.toys.map(toy => {
      return <ToyCard
        id = {toy.id}
        name = {toy.name}
        image = {toy.image}
        likes = {toy.likes}
        deleteToy = {this.props.deleteToy}
        increaseLikes = {this.props.increaseLikes}
      />
      })
    }

  }


export default ToyContainer;
