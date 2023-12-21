import React from 'react'

import { Thumbnails } from '../types';

export type VideoStatisticsType = {
    viewCount : string,
    likeCount : string
}

export type VideoType = {
    title : string,
    thumbnails : Thumbnails,
    channelTitle : string,
}


function VideoCard({snippet, statistics} : { snippet: VideoType, statistics : VideoStatisticsType  }) {
    const video = snippet as VideoType;
    const stats = statistics as VideoStatisticsType;
    
    
 
    return (
    <div>
        <img className='w-full rounded-t-md' src={video?.thumbnails?.medium?.url} alt="" />
        
        <section className='w-full h-full p-2 flex flex-col justify-between items-start'>
            <h2 className='font-manrope line-clamp-1 text-sm'>{video?.title}</h2>
            <p className='font-manrope w-full text-xs line-clamp-1 font-bold mt-2 flex justify-between'>{video?.channelTitle} <span className='font-sm font-semibold'>{(Number(stats?.viewCount)/1000).toFixed(0)}K views</span></p>
        </section>
    </div>
  )
}

export default VideoCard