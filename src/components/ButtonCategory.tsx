import React from 'react'
import Button from './Button'

const buttons  = ['All', 'Music', 'Man from Earth', 'Programming', 'Comedy', 'Cooking', 'Festivals', 'Cricket', 'Fitness']

function ButtonCategory() {
  return (
    <ul className='flex overflow-x-scroll no-scrollbar gap-2 p-6 bg-slate-50 shadow-sm fixed w-full z-[20] '>
      {buttons.map((button, index) => <Button key={index} name={button}/> )}
    </ul>
  )
}

export default ButtonCategory