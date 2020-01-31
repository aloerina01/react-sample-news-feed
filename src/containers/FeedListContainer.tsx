import * as React from "react";
import { FeedListContainerProps } from "../types/FeedListContainer";
import { FeedList } from "../components/FeedList";
import { PrimaryFloatButton } from "../components/PrimaryFloatButton";
import { FeedItemMenu } from "../components/FeedItemMenu";
import { ModalStateStore } from "../stores/ModalStateStore";
import { useObservableStore } from "../hooks/useObservableStore";
import { State } from "../types/State";
export const FeedListContainer: React.FC<FeedListContainerProps> = () => {
  //
  const calculateState = () => {
    const state: State = {
      modalState: ModalStateStore.getState()
    };
    return state;
  };
  // container上にstoreのstateを格納する空間を用意する
  const storeState = useObservableStore([ModalStateStore], calculateState);
  // storeの更新に伴って、container上に用意したstateを更新する
  // ModalStateStore.addListener(() => dispatch(ModalStateStore.getState());

  return (
    <section>
      <FeedList feedItems={[]} />
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
