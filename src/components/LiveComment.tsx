import { Send } from 'lucide-react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addMessage } from '../features/livechat/livechat'

const LiveComment = () => {
    const [message, setMessage] = useState('')
    const dispatch = useDispatch();

    function handleAddMessage(){
        dispatch(addMessage({name : 'Sobit(You)', message : message}))
        setMessage('')
    }

    function handleAddMessageOnEnter(e: React.KeyboardEvent<HTMLInputElement>){
        if(e.key === 'Enter'){
            handleAddMessage()
        }
    }

  return (
    <div className='w-full bg-gray-100 h-[60px] rounded-b-md border-t-[1.5px] flex justify-start align-middle'>
      <input 
        className='outline-none p-2 bg-gray-100 w-full placeholder-gray-500' 
        placeholder='Enter your message...' 
        onChange={(e) => setMessage(e?.target.value)}
        type="text"
        onKeyDown={handleAddMessageOnEnter}
        value={message}
      /> 
      <button onClick={handleAddMessage} className='py-4 px-6 border-l-[1.5px] hover:bg-gray-200'>
        <Send className='w-5 h-5 text-gray-700'/>
      </button>
    </div>
  )
}

export default LiveComment