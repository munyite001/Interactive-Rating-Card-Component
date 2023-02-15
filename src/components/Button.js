import React from 'react';

export default function Button(props)
{
  return(
    <div className="btn" onClick={(e) => 
    {
      clicked(e,props)
    }}>
      {props.value}
    </div>
  )
}

function clicked(e,props)
{
  // let rating = e.currentTarget.textContent; 
  const btns = document.querySelectorAll('.btn');
  btns.forEach((btn) => {
    btn.classList.remove('active-btn');
  });

  e.currentTarget.classList.add('active-btn');
  props.setRate(props.value);
}