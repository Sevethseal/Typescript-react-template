import React from 'react'
import './App.css'
import image from './image.png'

const App = () => {
  return (
    <div className="heading">
      Hello world
      <img src={image} alt="logo" />
    </div>
  )
}

export default App
