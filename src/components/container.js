import React from 'react';
import star from '../Template/images/icon-star.svg';
import Button from './Button.js';

export default function Container(props)
{
  return(
    <div className="container">
      <div className="star-container">
        <img className="star" src={star} alt="star"/>
      </div>
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request.
        All feedback is appreciated to help us improve our offering!
      </p>
      <div className="btn-container">
        <Button value="1" setRate={props.rating}/>
        <Button value="2" setRate={props.rating}/>
        <Button value="3" setRate={props.rating}/>
        <Button value="4" setRate={props.rating}/>
        <Button value="5" setRate={props.rating}/>
      </div>
      <button className="submit" onClick={() => {setSubmit(props)}}> Submit </button>
    </div>
  );
}

function setSubmit(props)
{
  if (props.getRateValue() !== 0)
  {
    props.submitStatus();
  }
}