import * as React from "react";
import { FeedItemMenuProps } from "../types/FeedItemMenu";
import { closeFeedItemMenu } from "../usecases/CloseFeedItemMenu";

export const FeedItemMenu: React.FC<FeedItemMenuProps> = ({
  isDisplay,
  data
}) => {
  if (!isDisplay || !data) {
    return (
      <div className="modal-layer">
        <div className="slide-up-modal modal-feeditem-menu">a</div>
      </div>
    );
  }
  return (
    <div className="modal-layer show" onClick={closeFeedItemMenu}>
      <div className="slide-up-modal modal-feeditem-menu">
        <div className="modal-feeditem-menu-title">
          <div>{data.category}</div>
          <div>フォロー</div>
        </div>
        <div className="modal-feeditem-menu-list">
          <ul>
            <li>共有</li>
            <li>この記事を表示しない</li>
            <li>{data.category}に関心がない</li>
            <li>{data.publisher}の記事を表示しない</li>
            <li>興味を管理</li>
            <li>ご意見・ご要望</li>
          </ul>
          <div>閉じる</div>
        </div>
      </div>
    </div>
  );
};
