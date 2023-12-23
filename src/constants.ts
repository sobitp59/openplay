export const YOUTUBE_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
export const YOUTUBE_VIDEO_BYID = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
export const YOUTUBE_SUGGESTION_API = 'http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=firefox&q='
export const YOUTUBE_SEARCH_VIDEO = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&'
export const YOUTUBE_SEARCH_VIDEO_MORE = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&'
export const LIVE_CHAT_OFFSET = 200;
export const INFINITE_SCROLL_OFFSET = 700;
