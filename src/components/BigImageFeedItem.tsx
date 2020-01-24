import * as React from "react";
import { FeedItemProps } from "../types/FeedItem";

export const BigImageFeedItem: React.FC<FeedItemProps> = ({
  feedItem,
  index
}) => {
  return (
    <div className="feeditem feeditem-bigimage">
      <a href={feedItem.href}>
        <div className="imagebox">
          <img src={feedItem.imageUrl} alt={feedItem.title} />
        </div>
        <div className="labelbox">
          <h3 className="title">{feedItem.title}</h3>
          <p className="description">{feedItem.description}</p>
        </div>
        <div className="metabox">
          <p>
            <img src={feedItem.publisherImageUrl} alt={feedItem.publisher} />
            <span className="publisher">{feedItem.publisher}</span>
          </p>
        </div>
      </a>
    </div>
  );
};
