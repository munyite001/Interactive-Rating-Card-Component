import React from 'react';
import illustration from '../Template/images/illustration-thank-you.svg';

export default function Success(props)
{
  return(
    <div className="success-container">
      <div className="image-container">
        <img src={illustration} alt="Thank You Illustration"/>
      </div>
      <p className="rate-text"> You selected {props.getRateValue()} out of 5 </p>
      <h1>Thank you!</h1>
      <p>
        We appreciate you taking the time to give a rating.
        If you ever need more support, don't hesitate to get in touch.
      </p>
    </div>
  );
}