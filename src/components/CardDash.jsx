import React from 'react'
import Card from './Card.jsx'

export default function CardDash() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 mx-10">
      <Card />
      <Card />

      <Card />
      <Card />
      <Card /><Card />


      <Card />
    </div>
  )
}
