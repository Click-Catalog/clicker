import React from 'react'
import router from 'next/router'

// link components

export default function Navbar() {
  return (
    <div>
      <span onClick={() => router.replace('/must-watch')}>
          Must Watch 
      </span>
      <span onClick={() => router.replace('/interested')}>
        Interested 
      </span>
      <span onClick={() => router.replace('/watched')}>
        Watched
      </span>
    </div>
  );
}
