import * as React from "react";
import { FeedListContainerProps } from "../types/FeedListContainer";
import { FeedList } from "../components/FeedList";
import { PrimaryFloatButton } from "../components/PrimaryFloatButton";
import { FeedItemMenu, useFeedItemMenu } from "../components/FeedItemMenu";

export const FeedListContainer: React.FC<FeedListContainerProps> = () => {
  // FeedItemMenuのModalの状態管理用
  const [feedItemMenuState, dispatch] = useFeedItemMenu();

  return (
    <section>
      <FeedList feedItems={[]} openItemMenuAction={dispatch} />
      <PrimaryFloatButton
        label="タップして新しい情報を取得できます"
        isDisplay={false}
        onClick={() => {}}
      />
      <FeedItemMenu
        isDisplay={feedItemMenuState.isDisplay}
        feedItem={feedItemMenuState.target}
      />
    </section>
  );
};
