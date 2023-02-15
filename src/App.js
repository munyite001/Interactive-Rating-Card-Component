import React from "react";
import Container from './components/container.js';
import Success from './components/Success.js';

class App extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      rating:0,
      submit: false,
    }

    this.setRating = this.setRating.bind(this);
    this.getRating = this.getRating.bind(this);
    this.submit = this.submit.bind(this);
  }
  setRating(val)
  {
    this.setState({
      rating:val
    })
  }

  getRating()
  {
    return(this.state.rating);
  }

  submit()
  {
    this.setState({
      submit:true
    })
  }
  
  render()
  {
    if (this.state.submit === false)
    {
      return(
        <div className="App">
          <Container rating={this.setRating} submitStatus={this.submit} getRateValue={this.getRating}/>
        </div>
      );
    }
    else
    {
      return(
        <div className="App">
          <Success getRateValue={this.getRating}/>
        </div>
      );
    }
  }

}

export default App;