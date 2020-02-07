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
        <div className="modal-feeditem-menu-header">
          <div className="title">{data.category}</div>
          <div className="follow-button">フォロー</div>
        </div>
        <div className="modal-feeditem-menu-body">
          <ul className="menu-list">
            <li className="menu-list-item">共有</li>
            <li className="menu-list-item">この記事を表示しない</li>
            <li className="menu-list-item">{data.category}に関心がない</li>
            <li className="menu-list-item">
              {data.publisher}の記事を表示しない
            </li>
            <li className="menu-list-item">興味を管理</li>
            <li className="menu-list-item">ご意見・ご要望</li>
          </ul>
        </div>
        <div className="modal-feeditem-menu-footer">
          <div className="close-button">閉じる</div>
        </div>
      </div>
    </div>
  );
};
