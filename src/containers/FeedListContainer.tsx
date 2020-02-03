import * as React from "react";
import { FeedListContainerProps } from "../types/FeedListContainer";
import { FeedList } from "../components/FeedList";
import { PrimaryFloatButton } from "../components/PrimaryFloatButton";
import { FeedItemMenu } from "../components/FeedItemMenu";
import { ModalStateStore } from "../stores/ModalStateStore";
import { FeedItemsStore } from "../stores/FeedItemsStore";
import { useObservableStore } from "../hooks/useObservableStore";
import { ModalState, ModalType } from "../types/ModalState";
import { FeedItem } from "../types/FeedItem";

export const FeedListContainer: React.FC<FeedListContainerProps> = () => {
  // container上にstoreのstateを格納する空間を用意する
  const modalState = useObservableStore<ModalState>(ModalStateStore);
  const feedItems = useObservableStore<Array<FeedItem>>(FeedItemsStore);

  return (
    <section>
      <FeedList feedItems={feedItems} />
      <PrimaryFloatButton
        label="タップして新しい情報を取得できます"
        isDisplay={false}
        onClick={() => {}}
      />
      <FeedItemMenu
        isDisplay={modalState.activeModalType === ModalType.ItemMenu}
        data={modalState.data as FeedItem}
      />
    </section>
  );
};
