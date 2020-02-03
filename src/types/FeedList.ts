import { FeedItem } from "./FeedItem";

export type FeedList = Array<FeedItem>;

export type FeedListProps = {
  feedItems: FeedList;
};
