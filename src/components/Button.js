import React from 'react';

export default function Button(props)
{
  return(
    <div className="btn" onClick={clicked}>
      {props.value}
    </div>
  )
}

function clicked(e)
{
  // let rating = e.currentTarget.textContent; 
  const btns = document.querySelectorAll('.btn');
  btns.forEach((btn) => {
    btn.classList.remove('active-btn');
  });

  e.currentTarget.classList.add('active-btn');
}