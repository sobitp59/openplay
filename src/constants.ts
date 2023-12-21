export const YOUTUBE_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=AIzaSyChltceAnm4NiSLnObp1Fs5ZkyygGHVOGE`
export const YOUTUBE_VIDEO_BYID = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=AIzaSyChltceAnm4NiSLnObp1Fs5ZkyygGHVOGE`
export const YOUTUBE_SUGGESTION_API = 'http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=firefox&q='
export const YOUTUBE_SEARCH_VIDEO = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&'
export const YOUTUBE_SEARCH_VIDEO_MORE = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&'
export const LIVE_CHAT_OFFSET = 200;
export const INFINITE_SCROLL_OFFSET = 300;

/*
curl \
  'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=[YOUR_API_KEY]' \
  --header 'Authorization: Bearer [YOUR_ACCESS_TOKEN]' \
  --header 'Accept: application/json' \
  --compressed

  https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&order=relevance&q=site%3Ayoutube.com&topicId=%2Fm%2F02vx4&key={YOUR_API_KEY}
    https://www.googleapis.com/youtube/v3/search?pageToken=CBkQAA&part=snippet&maxResults=25&order=relevance&q=site%3Ayoutube.com&topicId=%2Fm%2F02vx4&key={YOUR_API_KEY}

  */
