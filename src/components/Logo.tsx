import React from 'react'
import OPENPLAY_LOGO from "../assets/icons/openplay-icon.svg"

function Logo() {
  return (
    <div>
        <img className='w-48' src={OPENPLAY_LOGO} alt="openplay app logo" />
    </div>
  )
}

export default Logo