import { useEffect, useState } from "react"
import { YOUTUBE_VIDEOS_API } from "../constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

function VideoContainer() {
  const [videos, setVideos] = useState([])
  const isSidebarOpen = useSelector((state : RootState) => state.sidebar.isSidebarOpen) 

  useEffect(() => {
    getYouTubeVideos();
  }, [])

  async function getYouTubeVideos(){
    try {
      const response = await fetch(YOUTUBE_VIDEOS_API);
      const data = await response.json();
      console.log(data.items)
      setVideos(data?.items)
    } catch (error) {
      console.log(error)
    }
  }

  // grid-cols-[repeat(4,minmax(100px,500px))]

  console.log('SEARCH', videos)
  // grid place-items-center  gap-4 ${isSidebarOpen ? 'grid-cols-4' : 'grid-cols-5'} 

  return (
    <div className="w-full mt-[100px] p-6">
      <ul className={`w-full grid place-items-center  gap-4 ${isSidebarOpen ? 'grid-cols-4' : 'grid-cols-5'}`}>
        {videos?.map(({id, snippet, statistics}, index) => (
          <li key={index} className="w-full  border-[1.5px] rounded-md hover:shadow-xl">
            <Link to={`/watch?v=${id}`}>
              <VideoCard snippet={snippet} statistics={statistics}/>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default VideoContainer