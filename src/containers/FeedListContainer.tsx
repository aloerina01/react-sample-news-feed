import * as React from "react";
import { FeedListContainerProps } from "../types/FeedListContainer";
import { FeedList } from "../components/FeedList";
import { PrimaryFloatButton } from "../components/PrimaryFloatButton";

export const FeedListContainer: React.FC<FeedListContainerProps> = ({
  feedItems
}) => {
  return (
    <section>
      <FeedList feedItems={feedItems} />
      <PrimaryFloatButton
        label="タップして新しい情報を取得できます"
        isDisplay={false}
        onClick={() => {}}
      />
    </section>
  );
};
