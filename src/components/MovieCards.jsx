import React, { useState, useEffect } from 'react';
  
export default function MovieCards(props) {

  // Iterate through movieCard's data to display each detail in it's own <p>
  // Display image as well.
  const responseCardDetails = [];

  // const keys = Object.keys(props.cardData);

  // for (let i = 0; i < keys.length; i++) {
  //   responseCardDetails.push(
  //   <p key={i} className={keys[i]} >{keys[i]} : {props.cardData[keys[i]]}</p>
  //   )
  // }

  // setMustWatchMovies={setMustWatchMovies} 
  // setInterestedMovies={setInterestedMovies} 
  // setWatchedMovies={setWatchedMovies}
     
  return (
    <div>
      <span>
        {responseCardDetails}
      </span>
      <span>
        (image)
      </span>
      <div>
        {/* <button className='must-watch' onClick={props.setMustWatchMovies}>Must Watch</button>
        <button className='interested' onClick={props.setInterestedMovies}>Interested</button>
        <button className='watched' onClick={props.setWatchedMovies}>Watched</button> */}
      </div>
    </div>
  );
}
