export interface IPlayList {
  kind: string;
  etag: string;
  nextPageToken: string;
  pageInfo: IPageInfo;
  items: IItem[];
}

interface IItem {
  kind: string;
  etag: string;
  id: string;
  snippet: ISnippet;
}

export interface ISnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: IThumbnails;
  channelTitle: string;
  playlistId: string;
  position: number;
  resourceId: IResourceId;
}

interface IResourceId {
  kind: string;
  videoId: string;
}

interface IThumbnails {
  default: IDefault;
  medium: IDefault;
  high: IDefault;
  standard: IDefault;
  maxres: IDefault;
}

interface IDefault {
  url: string;
  width: number;
  height: number;
}

interface IPageInfo {
  totalResults: number;
  resultsPerPage: number;
}