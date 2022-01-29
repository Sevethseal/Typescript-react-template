import React from 'react'
import './App.css'
import image from './image.png'

const App = () => {
  const name = 'name'
  const name2 = 'name2'
  const name3 = 'name2'
  return (
    <div className="heading">
      Hello world
      <img src={image} alt="logo" />
    </div>
  )
}

export default App
