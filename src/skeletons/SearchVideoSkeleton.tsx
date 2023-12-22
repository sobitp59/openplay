import { Check } from 'lucide-react'
import React from 'react'

const SearchVideoSkeleton = () => {
  return (
    <ul className='w-full'>
        {new Array(5).fill(0).map(() => (
             <li className='flex border-[1.5px] cursor-pointer h-[300px] mb-4 w-full p-2 gap-4 rounded-md shadow-sm animate-pulse'>
             <section className='w-[400px] bg-gray-300 rounded-md'>
             </section>

             <section>
               <h1 className='font-bold'></h1>
               <section className='h-7 mt-2 flex justify-start align-middle gap-2'>
                <section className='h-7 w-7 rounded-full shadow-sm border-[1px]'></section>
                 <h2 className='text-sm leading-7 font-semibold'></h2>
                   <Check className='w-6 h-6 bg-gray-300 p-1 rounded-full font-bold' /> 
               </section>
               <p></p>
             </section>
           </li>
        ))}
    </ul>
  )
}

export default SearchVideoSkeleton