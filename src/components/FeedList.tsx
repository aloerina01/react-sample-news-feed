import * as React from "react";
import { FeedListProps } from "../types/FeedList";
import { FeedItem, FeedItemDisplayType } from "../types/FeedItem";
import { BigImageFeedItem } from "./BigImageFeedItem";
import { SmallImageFeedItem } from "./SmallImageFeedItem";

const renderFeedItem = (feedItem: FeedItem, index: number): React.ReactNode => {
  switch (feedItem.type) {
    case FeedItemDisplayType.BigImage:
      return (
        <BigImageFeedItem key={feedItem.id} index={index} feedItem={feedItem} />
      );
    case FeedItemDisplayType.SmallImage:
      return (
        <SmallImageFeedItem
          key={feedItem.id}
          index={index}
          feedItem={feedItem}
        />
      );
    default:
      return null;
  }
};

export const FeedList: React.FC<FeedListProps> = ({ feedItems }) => {
  return (
    <section className="feedlist">
      {feedItems.map((item, index) => renderFeedItem(item, index))}
    </section>
  );
};
