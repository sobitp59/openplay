import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { sidebarClose } from '../features/sidebar/sidebar'
import { useSearchParams } from 'react-router-dom'
import { YOUTUBE_VIDEO_BYID } from '../constants'
import { DataType } from '../types'

export const WatchVideo = () => {
    const dispatch = useDispatch()
    const [searchParams] = useSearchParams()
    const [video, setVideo] = useState(null)

    useEffect(() => {
        dispatch(sidebarClose()) 
        getVideoDetails()
    }, [])

    async function getVideoDetails(){
      try {
        const response = await fetch(YOUTUBE_VIDEO_BYID+`&id=${searchParams.get("v")}`)
        const data = await response.json()
        setVideo(data?.items[0])
      } catch (error) {
        console.log(error)
      }
    }

    console.log(video)

  return (
    <div className='p-6 w-full'>
        <section>
        <iframe 
            className='rounded-lg'
            width={'1200px'} 
            height={'600px'} 
            src={"https://www.youtube.com/embed/" + searchParams.get("v")} 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen>
        </iframe>
        </section>

        <section>
          {!video && <p>loading....</p> }
          {video && video['id']}
        </section>
        
    </div>
  )
}
