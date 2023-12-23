import { Clapperboard, Clock4, History, Home, Rss, ThumbsUp, Tv } from 'lucide-react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { Link, useLocation } from 'react-router-dom'
import { sidebarOpen } from '../features/sidebar/sidebar'

const sidebarTop = [
  {
    icon : <Home />,
    title : 'Home',
    path : '/'
  },
  {
    icon : <Clapperboard />,
    title : 'Shorts',
    path : '/'
  },
  {
    icon : <Rss />,
    title : 'Subscrption',
    path : '/'
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
  const isSidebarOpen = useSelector((state: RootState) => state.sidebar.isSidebarOpen);

  if(!isSidebarOpen) return null;

  return (
    <div className='w-[15%] hidden md:block fixed mt-[5.5rem] h-[91vh]  p-6 overflow-y-scroll no-scrollbar bg-slate-50'>
      {/* SIDEBAR TOP */}
      <ul className='flex flex-col gap-4'>
        {sidebarTop.map(({icon, title, path}, index) => (
        <Link to={path}>
          <li key={index} className='flex justify-start gap-2 align-middle cursor-pointer'>
              {icon} <span>{title}</span>
          </li>
        </Link>
        ))}
      </ul>

      {/* SIDEBAR TOP */}
      <section>
        {sidebarMiddle.map(({heading, info }, index) => (
          <div className='my-6 border-t-[1.5px]' key={index}>
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