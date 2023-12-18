import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Results = () => {
  const videos = useSelector((store: RootState) => store.search.videos);
  console.log(videos)

  // useEffect(() => {
  //   async function handleInfiniteSearh() {
  //     console.log('HELLO')
  //     console.log(document.documentElement.clientWidth);
  //   }

  //   window.addEventListener('scroll', handleInfiniteSearh);
  // }, [])

  return (
    <div className='p-6 w-full mt-[80px]'>
      <ul>
        {videos?.map(({snippet : {title, description, thumbnails,channelTitle},id }) => (
           <Link key={id['videoId']} to={`/watch?v=${id['videoId']}`}>
            <li className='flex border-[1.5px] cursor-pointer  mb-4 w-full p-2 gap-4 rounded-md shadow-sm'>
              <section>
                <img 
                  src={thumbnails['medium']['url']} 
                  className='rounded-md w-[400px]' 
                  alt="youtube banner"
                />
              </section>

              <section>
                <h1 className='font-bold'>{title}</h1>
                <section className='h-7 mt-2 flex justify-start align-middle gap-2'>
                  <img 
                    className='h-7 w-7 rounded-full shadow-sm border-[1px] object-cover'
                    src={thumbnails['default']['url']} alt="yuotube channel avatare" />
                  <h2 className='text-sm leading-7 font-semibold'>{channelTitle}</h2>
                    <Check className='w-6 h-6 bg-gray-300 p-1 rounded-full font-bold' /> 
                </section>
                <p className='line-clamp-1 text-sm mt-2'>{description}</p>
              </section>
            </li>
           </Link>
        ))}
      </ul>
    </div>
  )
}

export default Results