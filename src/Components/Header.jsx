import React from 'react'

export default function Header({links}) {
  return (
    <>
    <div className='header'>
    <a href="/#" className="links">Home</a>
    <a href="/#" className="links">About</a>
    <a href="/#" className="links">{links}</a>
    </div>
    </>
  )
}
