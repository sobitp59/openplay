import { Clapperboard, Clock4, History, Home, Rss, ThumbsUp, Tv } from 'lucide-react'
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'

const sidebarTop = [
  {
    icon : <Home />,
    title : 'Home'
  },
  {
    icon : <Clapperboard />,
    title : 'Shorts'
  },
  {
    icon : <Rss />,
    title : 'Subscrption'
  },
]

const sidebarMiddle = [
  {
    heading : 'You',
    info : [
      {
        icon : <Tv />,
        title : 'Your Channel'
      },
      {
        icon : <History />,
        title : 'History'
      },
      {
        icon : <Clock4 />,
        title : 'Watch Later'
      },
      {
        icon : <ThumbsUp />,
        title : 'Liked Videos'
      },
    ]
  },
  {
    heading : 'You',
    info : [
      {
        icon : <Tv />,
        title : 'Your Channel'
      },
      {
        icon : <History />,
        title : 'History'
      },
      {
        icon : <Clock4 />,
        title : 'Watch Later'
      },
      {
        icon : <ThumbsUp />,
        title : 'Liked Videos'
      },
    ]
  },
  {
    heading : 'You',
    info : [
      {
        icon : <Tv />,
        title : 'Your Channel'
      },
      {
        icon : <History />,
        title : 'History'
      },
      {
        icon : <Clock4 />,
        title : 'Watch Later'
      },
      {
        icon : <ThumbsUp />,
        title : 'Liked Videos'
      },
    ]
  },
  {
    heading : 'You',
    info : [
      {
        icon : <Tv />,
        title : 'Your Channel'
      },
      {
        icon : <History />,
        title : 'History'
      },
      {
        icon : <Clock4 />,
        title : 'Watch Later'
      },
      {
        icon : <ThumbsUp />,
        title : 'Liked Videos'
      },
    ]
  },
  {
    heading : 'You',
    info : [
      {
        icon : <Tv />,
        title : 'Your Channel'
      },
      {
        icon : <History />,
        title : 'History'
      },
      {
        icon : <Clock4 />,
        title : 'Watch Later'
      },
      {
        icon : <ThumbsUp />,
        title : 'Liked Videos'
      },
    ]
  },
]

function Sidebar() {
  const isSidebarOpen = useSelector((state: RootState) => state.sidebar.isSidebarOpen)
  if(!isSidebarOpen) return null;

  return (
    <div className='w-[15%] border-r-[1.5px] p-6 h-[91vh] overflow-y-scroll'>
      {/* SIDEBAR TOP */}
      <ul className='flex flex-col gap-4'>
        {sidebarTop.map(({icon, title}, index) => (
          <li key={index} className='flex justify-start gap-2 align-middle cursor-pointer'>
            {icon} <span>{title}</span>
          </li>
        ))}
      </ul>

      {/* SIDEBAR TOP */}
      <section>
        {sidebarMiddle.map(({heading, info }) => (
          <div className='my-6 border-t-[1.5px]'>
            <h3 className='text-lg my-2 font-semibold'>{heading}</h3>
            <ul className='flex flex-col gap-4'>
              {info.map(({icon, title}, index) => (                
                <li key={index} className='flex flex-col justify-start align-middle'>
                  <span className='flex justify-start gap-2 align-middle cursor-pointer'>{icon} {title}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>


    </div>
  )
}

export default Sidebar