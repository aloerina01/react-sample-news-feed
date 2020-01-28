import * as React from "react";
import { FeedItemProps } from "../types/FeedItem";

export const SmallImageFeedItem: React.FC<FeedItemProps> = ({
  feedItem,
  index
}) => {
  return (
    <div className="feeditem feeditem-smallimage">
      <a href={feedItem.href}>
        <div className="contentbox-margin">
          <div className="content-label">
            <h3 className="title">{feedItem.title}</h3>
            <p className="description">{feedItem.description}</p>
          </div>
          <div className="content-image">
            <img src={feedItem.imageUrl} alt={feedItem.title} />
          </div>
        </div>
        <div className="contentbox-margin">
          <div className="content-meta">
            <img
              className="publisher-icon"
              src={feedItem.publisherImageUrl}
              alt={feedItem.publisher}
            />
            <span className="publisher-name">{feedItem.publisher}</span>
            <div className="menu-button">
              <img src="/assets/menu.png" alt="menu" />
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};
