import { useEffect, useState } from "react"
import { INFINITE_SCROLL_OFFSET, YOUTUBE_SEARCH_VIDEO_MORE, YOUTUBE_VIDEOS_API } from "../constants";
import VideoCard, { VideoStatisticsType, VideoType } from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { getVideos } from "../features/homevideos/homevideos";
import HomeVideosSkeleton from "../skeletons/HomeVideosSkeleton";

function VideoContainer() {
  const [nextPageLoading, setNextPageLoading] = useState(false);

  const videos = useSelector((state: RootState) => state.homevideos.videos)
  const totalVideos = useSelector((state: RootState) => state.homevideos.totalVideos) 
  const nextPageToken = useSelector((state: RootState) => state.homevideos.nextPageToken)
  // const [videos, setVideos] = useState([])
  const isSidebarOpen = useSelector((state : RootState) => state.sidebar.isSidebarOpen) 
  const dispatch = useDispatch()


  useEffect(() => {
    getYouTubeVideos();
  }, [])

  async function getYouTubeVideos(){
    try {
      const response = await fetch(YOUTUBE_VIDEOS_API);
      const data = await response.json();
      dispatch(getVideos({type : 'HOME_VIDEOS', videos : data?.items, nextPageToken : data?.nextPageToken, totalVideos : data?.pageInfo?.totalResults}))
      console.log('DATA',data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    let timeoutId : number | undefined | ReturnType<typeof setTimeout>;

    async function handleVideoSearch(){
      setNextPageLoading(true)
      try {
        console.log('NEXTPAGE', nextPageToken)
        const response = await fetch(`${YOUTUBE_SEARCH_VIDEO_MORE}&pageToken=${nextPageToken}&key=AIzaSyChltceAnm4NiSLnObp1Fs5ZkyygGHVOGE`);
        const data = await response.json()
        console.log('RES : ', data)
        dispatch(getVideos({type : 'INFINITE_HOME_VIDEOS', videos : data?.items, nextPageToken : data?.nextPageToken}))
        setNextPageLoading(false)
      } catch (error) {
          console.log('SERACH VIDEO',error)
      }
    }


    async function handleInfiniteSearh() {
      
      if((window.innerHeight + document.documentElement.scrollTop + 1 > document.documentElement.scrollHeight) && videos?.length <= totalVideos){
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
  }, [nextPageToken])

  // grid-cols-[repeat(4,minmax(100px,500px))]

  console.log('SEARCH', videos)
  // grid place-items-center  gap-4 ${isSidebarOpen ? 'grid-cols-4' : 'grid-cols-5'} 


  return (
    <div className="w-full mt-[100px] p-6">
      {/* <HomeVideosSkeleton/> */}
      <ul className={`w-full grid place-items-center  gap-4 ${isSidebarOpen ? 'grid-cols-4' : 'grid-cols-5'}`}>

        
        {videos.length > 0 && videos?.map((video) => (
                  <li key={video?.id} className="w-full  border-[1.5px] rounded-md hover:shadow-xl">
        <Link to={`/watch?v=${video?.id}`}>
            <VideoCard snippet={video?.snippet} statistics={video?.statistics}/>
          </Link> 
        </li>
        ))}

      </ul>

      {nextPageLoading ? <HomeVideosSkeleton/> : null}
    </div>
  )
}

export default VideoContainer
