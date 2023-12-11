import { useEffect, useState } from "react"
import { YOUTUBE_VIDEOS_API } from "../constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

function VideoContainer() {
  const [videos, setVideos] = useState([])


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


  return (
    <div className="p-6 ">
      <ul className="grid grid-cols-4 gap-8 ">
        {videos.map(({id, snippet, statistics}, index) => (
          <li key={index}>
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