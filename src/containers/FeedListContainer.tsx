import * as React from "react";
import { FeedListContainerProps } from "../types/FeedListContainer";
import { FeedList } from "../components/FeedList";
import { PrimaryFloatButton } from "../components/PrimaryFloatButton";
import { FeedItemMenu } from "../components/FeedItemMenu";
import { ModalStateStore } from "../stores/ModalStateStore";
import { useObservableStore } from "../hooks/useObservableStore";

export const FeedListContainer: React.FC<FeedListContainerProps> = () => {
  // container上にstoreのstateを格納する空間を用意する
  const { modalState } = useObservableStore(ModalStateStore);
  // storeの更新に伴って、container上に用意したstateを更新する
  // ModalStateStore.addListener(() => dispatch(ModalStateStore.getState());

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
