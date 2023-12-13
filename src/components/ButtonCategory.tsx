import React from 'react'
import Button from './Button'

const buttons  = ['All', 'Music', 'Man from Earth', 'Programming', 'Comedy', 'Cooking', 'Festivals', 'Cricket', 'Fitness']

function ButtonCategory() {
  return (
    <ul className='flex gap-2 sticky top-0 p-6 bg-white'>
      {buttons.map((button, index) => <Button key={index} name={button}/> )}
    </ul>
  )
}

export default ButtonCategory