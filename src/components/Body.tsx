import React from 'react'
import Sidebar from './Sidebar'
import VideoContainer from './VideoContainer'
import Main from './Main'

function Body() {
  return (
    <div className='flex w-full font-manrope'>
        <Sidebar/>
        <Main/>
    </div>
  )
}

export default Body