import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'

const HomeVideosSkeleton = () => {
    const isSidebarOpen = useSelector((state : RootState) => state.sidebar.isSidebarOpen) 

  return (
    <ul className={`w-full p-6 grid place-items-center  gap-4 ${isSidebarOpen ? 'grid-cols-4' : 'grid-cols-5'}`}>
        {new Array(10).fill(0).map(() => (
            <li className='w-[400px] h-[300px]'>
                <section className='w-[350px] h-[200px] bg-gray-300 animate-pulse rounded-md'></section>
                <section className='p-2 flex flex-col justify-between items-start'>
                    <h2 className='font-manrope line-clamp-1 text-sm w-[250px] h-[10px] rounded-md bg-gray-300'></h2>
                    <p className='w-[100px] h-[10px] rounded-md bg-gray-300  mt-2 '></p>
                </section>
            </li>
        ))}
    </ul>
  )
}

export default HomeVideosSkeleton