import * as React from "react";
import { FeedItemProps } from "../types/FeedItem";

export const SmallImageFeedItem: React.FC<FeedItemProps> = ({
  feedItem,
  index,
  onClick
}) => {
  return (
    <div>
      <a href={feedItem.href}>
        <div>
          <h3>{feedItem.title}</h3>
          <p>{feedItem.description}</p>
          <p>
            <img src={feedItem.imageUrl} alt={feedItem.title} />
          </p>
        </div>
        <div>
          <p>
            <img src={feedItem.publisherImageUrl} alt={feedItem.publisher} />
            <span>{feedItem.publisher}</span>
          </p>
        </div>
      </a>
    </div>
  );
};
