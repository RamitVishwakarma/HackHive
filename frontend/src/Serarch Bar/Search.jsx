import React from 'react'
import "./Search.css"

export default function Search() {
  return (
    <div className="search">
        <input type="text" id='search-bar' placeholder='Search for Hackathons' />
        <button>Search</button>
    </div>
  )
}
