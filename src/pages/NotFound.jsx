import React from 'react'
import {Link} from 'react-router-dom'

export default function NotFound() {
  return (
    <div>
        <h1>404 Not Found bro</h1>
        <Link to="/">Home</Link>
    </div>
  )
}

