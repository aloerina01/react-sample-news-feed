export enum FeedItemDisplayType {
  BigImage,
  SmallImage,
  TextOnly
}

export type FeedItem = {
  id: string;
  type: FeedItemDisplayType;
  title: string;
  description: string;
  href: string;
  imageUrl: string;
  isRecommended: boolean;
  category: string;
  publisher: string;
  publisherImageUrl?: string;
};

export type FeedItemProps = {
  index: number;
  feedItem: FeedItem;
  // onClick: () => {};
};
