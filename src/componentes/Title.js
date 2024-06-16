import React from 'react'
// Supports weights 400-900
import '../styles/Title.css'

export const Title = ({text}) => {
  return (
    <h1 className='title'>{text}</h1>
  )
}