import { CircleUser } from 'lucide-react'
import React from 'react'

const ChatMessage = ({name, message} : {name : string, message: string}) => {
  return (
    <div className='flex w-full justify-start align-middle gap-2'>
        <img className='w-6 h-6 rounded-full' src="https://aui.atlassian.com/aui/latest/docs/images/avatar-person.svg" />
        <h1 className='font-bold break-words'>{name} <span className='font-normal'>{message}</span></h1>
        
    </div>
  )
}

export default ChatMessage