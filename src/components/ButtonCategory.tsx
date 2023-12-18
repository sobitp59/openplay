import React from 'react'
import Button from './Button'

const buttons  = ['All', 'Music', 'Man from Earth', 'Programming', 'Comedy', 'Cooking', 'Festivals', 'Cricket', 'Fitness']

function ButtonCategory() {
  return (
    <ul className='flex gap-2 p-6 bg-white fixed w-full z-20'>
      {buttons.map((button, index) => <Button key={index} name={button}/> )}
    </ul>
  )
}

export default ButtonCategory