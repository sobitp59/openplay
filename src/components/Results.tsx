import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { Check } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { INFINITE_SCROLL_OFFSET, YOUTUBE_SEARCH_VIDEO_MORE } from '../constants';
import { getSearchedVideos } from '../features/search/search';
import SearchVideoSkeleton from '../skeletons/SearchVideoSkeleton';

const Results = () => {
  const [nextPageLoading, setNextPageLoading] = useState(false);
  const pageToken = useSelector((store: RootState) => store.search.nextPageToken);
  const videos = useSelector((store: RootState) => store.search.videos);
  const navigate = useNavigate()
  const searchQuery = useSelector((store: RootState) => store.search.searchQuery) ;
  const dispatch = useDispatch()

  // pageToken=CBkQAA&

  useEffect(() => {

    if(videos.length < 1){
      navigate('/')
    }
  }, [videos])

  useEffect(() => {
    let timeoutId : number | undefined | ReturnType<typeof setTimeout>;

    async function handleVideoSearch(){
      setNextPageLoading(true)
      try {
        console.log('NEXTPAGE', pageToken)
        const response = await fetch(`${YOUTUBE_SEARCH_VIDEO_MORE}q=${searchQuery}&pageToken=${pageToken}&key=AIzaSyChltceAnm4NiSLnObp1Fs5ZkyygGHVOGE`);
        const data = await response.json()
        console.log('RES : ', data)
        dispatch(getSearchedVideos({type : 'INFINITE_VIDEO_SEARCH', videos : data?.items, nextPageToken : data?.nextPageToken}))
        setNextPageLoading(false)
      } catch (error) {
          console.log('SERACH VIDEO',error)
      }
    }


    async function handleInfiniteSearh() {
      
      if(window.innerHeight + document.documentElement.scrollTop + 1 > document.documentElement.scrollHeight){
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          handleVideoSearch()
        }, INFINITE_SCROLL_OFFSET) 
      }
    }

    window.addEventListener('scroll', handleInfiniteSearh);

    return () => {
      window.removeEventListener('scroll', handleInfiniteSearh);
      clearTimeout(timeoutId);
    }
  }, [searchQuery, pageToken])


  return (
    <div className='p-6 w-full mt-[80px]'>
      <ul className='w-full'>
        {videos.length > 0 && videos?.map(({snippet,id }) => (
           <Link key={id['videoId']} to={`/watch?v=${id['videoId']}`}>
            <li className='flex border-[1.5px] cursor-pointer  mb-4 w-full p-2 gap-4 rounded-md shadow-sm'>
              <section>
                <img 
                  src={snippet?.thumbnails['medium']['url']} 
                  className='rounded-md w-[400px]' 
                  alt="youtube banner"
                />
              </section>

              <section>
                <h1 className='font-bold'>{snippet?.title}</h1>
                <section className='h-7 mt-2 flex justify-start align-middle gap-2'>
                  <img 
                    className='h-7 w-7 rounded-full shadow-sm border-[1px] object-cover'
                    src={snippet?.thumbnails['default']['url']} alt="yuotube channel avatare" />
                  <h2 className='text-sm leading-7 font-semibold'>{snippet?.channelTitle}</h2>
                    <Check className='w-6 h-6 bg-gray-300 p-1 rounded-full font-bold' /> 
                </section>
                <p className='line-clamp-1 text-sm mt-2'>{snippet?.description}</p>
              </section>
            </li>
           </Link>
        ))}
      </ul>
      {nextPageLoading ? <SearchVideoSkeleton/> : null}
    </div>
  )
}

export default Results


