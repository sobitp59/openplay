import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { addMessage } from '../features/livechat/livechat'
import { generateRandomMessage, generateRandomName } from '../utils/helpers'

const LiveChat = ({ videoHeight}: { videoHeight : string}) => {
    const messages = useSelector((state: RootState) => state.livechat.messages)
    const dispatch = useDispatch()

    useEffect(() => {
        const apipolling = setInterval(() => {
          dispatch(addMessage(
            {
            name : generateRandomName(),
            message : generateRandomMessage()
          }))  
          console.log('API POLLED CALLED')
        }, 1500)

        return () => clearInterval(apipolling)
    }, [])

  return (
    <div className={`flex flex-col-reverse gap-4 shadow-sm border-[1.5px] p-3 rounded-md w-full h-[${videoHeight}] overflow-y-scroll`}>
        {messages.map(({name,message}, index) => (
          <ChatMessage key={index} name={name} message={message}/>
        ))}
    </div>
  )
}

export default LiveChat