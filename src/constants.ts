// export const YOUTUBE_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&location=21.5922529%2C-158.1147114&locationRadius=10mi&q=surfing&type=video&key=AIzaSyBc179a0gCs6y2rNMTonAzzsxThtE-UNGQ`
export const YOUTUBE_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=AIzaSyChltceAnm4NiSLnObp1Fs5ZkyygGHVOGE`
export const YOUTUBE_VIDEO_BYID = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=AIzaSyChltceAnm4NiSLnObp1Fs5ZkyygGHVOGE`
export const YOUTUBE_SUGGESTION_API = 'http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=firefox&q='
export const YOUTUBE_SEARCH_VIDEO = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&'

// https://youtube.googleapis.com/youtube/v3/search?q=naruto&key=[YOUR_API_KEY]