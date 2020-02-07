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
            <li className="menu-list-item">
              <img src="/assets/baseline_share_black_18dp.png" alt="" />
              <span>共有</span>
            </li>
            <li className="menu-list-item">
              <img src="/assets/baseline_highlight_off_black_18dp.png" alt="" />
              <span>この記事を表示しない</span>
            </li>
            <li className="menu-list-item">
              <img src="/assets/baseline_block_black_18dp.png" alt="" />
              <span>{data.category}に関心がない</span>
            </li>
            <li className="menu-list-item">
              <img src="/assets/baseline_block_black_18dp.png" alt="" />
              <span>{data.publisher}の記事を表示しない</span>
            </li>
            <li className="menu-list-item">
              <img src="/assets/baseline_color_lens_black_18dp.png" alt="" />
              <span>興味を管理</span>
            </li>
            <li className="menu-list-item">
              <img src="/assets/baseline_feedback_black_18dp.png" alt="" />
              <span>ご意見・ご要望</span>
            </li>
          </ul>
        </div>
        <div className="modal-feeditem-menu-footer">
          <div className="close-button">閉じる</div>
        </div>
      </div>
    </div>
  );
};
