import * as React from "react";
import { FeedItemProps } from "../types/FeedItem";

export const BigImageFeedItem: React.FC<FeedItemProps> = ({
  feedItem,
  index
}) => {
  return (
    <div className="feeditem feeditem-bigimage">
      <a href={feedItem.href}>
        <div className="contentbox-fit">
          <div className="content-image">
            <img src={feedItem.imageUrl} alt={feedItem.title} />
          </div>
        </div>
        <div className="contentbox-margin">
          <div className="content-label">
            <h3 className="title">{feedItem.title}</h3>
            <p className="description">{feedItem.description}</p>
          </div>
        </div>
        <div className="contentbox-margin">
          <div className="content-meta">
            <img src={feedItem.publisherImageUrl} alt={feedItem.publisher} />
            <span className="publisher">{feedItem.publisher}</span>
          </div>
        </div>
      </a>
    </div>
  );
};
