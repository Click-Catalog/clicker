import React from 'react'

// link components

export default function Navbar() {
  return (
    <div>
      <span>
        <a href='./must-watch' className='must-watch'>
          Must Watch 
        </a>
      </span>
      <span>
      <a href='./interested' className='interested'>
        Interested 
      </a>
      </span>
      <span>
      <a href='./watched' className='watched'>
        Watched
      </a>
      </span>
    </div>
  );
}
