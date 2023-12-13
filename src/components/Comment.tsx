import { CircleUserRound } from 'lucide-react'

type CommentType = {
    id : number,
    name : string,
    text : string,
    replies : CommentType[]
}

const Comment = ({id, name, text, replies} : CommentType) => {
  return (
    <>
    <li key={id} className='bg-gray-100 my-2 py-4 px-3 rounded-md'>
        <section className='flex'><CircleUserRound className='w-6 h-6 text-gray-600' /> <span className='ml-1 font-bold'>{name}</span></section>
        <p className='text-sm text-gray-500 mt-2'>{text}</p> 
    </li>
        <section className='ml-8 border-l-2'>
    {replies.map((com) => (
        <Comment id={com?.id} name={com?.name} text={com?.text} replies={com?.replies}/>
        ))}
    </section>
  </>
  )
}

export default Comment