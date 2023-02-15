import React from "react";
import Container from './components/container.js';
//  import Success from './components/Success.js';

class App extends React.Component
{
  constructor()
  {
    super();
    this.state = {
      rating:4,
      success: false,
    }

    this.setRating = this.setRating.bind(this);
    this.getRating = this.getRating.bind(this);
  }
  setRating()
  {
    this.setState((r) => {
      return({rating:r})
    })
  }
  getRating()
  {
    return(this.state.rating);
  }
  
  render()
  {
    return(
      <div className="App">
        <Container rating={this.setRating()} setR={this.setRating()}/>
      </div>
    );
  }

}

export default App;