export type  Thumbnail = {
    url: string;
    width: number;
    height: number;
}
  
export type Thumbnails = {
    default: Thumbnail;
    medium: Thumbnail;
    high: Thumbnail;
}

export type DataType = {
    kind : string,
    etag: string,
    id: {
      kind: string,
      videoId: string
    },
    snippet : {
      publishedAt: string,
      channelId: string,
      title : string,
      description :string, 
      thumbnails: Thumbnails,
      channelTitle: string,
      liveBroadcastContent: string,
      publishTime: string
    }
  }