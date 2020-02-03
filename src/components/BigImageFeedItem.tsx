import * as React from "react";
import { FeedItemProps } from "../types/FeedItem";
import { openFeedItemMenu } from "../usecases/OpenFeedItemMenu";

export const BigImageFeedItem: React.FC<FeedItemProps> = ({
  feedItem,
  index
}) => {
  const onClickMenuIcon = (event: React.MouseEvent<HTMLInputElement>): void => {
    event.preventDefault();
    openFeedItemMenu(feedItem);
  };
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
            <img
              className="publisher-icon"
              src={feedItem.publisherImageUrl}
              alt={feedItem.publisher}
            />
            <span className="publisher-name">{feedItem.publisher}</span>
            <div className="menu-button" onClick={onClickMenuIcon}>
              <img src="/assets/menu.png" alt="menu" />
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};
