import * as React from "react";
import { FeedList } from "../components/FeedList";
import { PrimaryFloatButton } from "../components/PrimaryFloatButton";
import { FeedItemMenu } from "../components/FeedItemMenu";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { ModalStateStore } from "../stores/ModalStateStore";
import { FeedItemsStore } from "../stores/FeedItemsStore";
import { useObservableStore } from "../hooks/useObservableStore";
import { reloadFeedItems } from "../usecases/ReloadFeedItems";
import { ModalState, ModalType } from "../types/ModalState";
import { FeedItem } from "../types/FeedItem";

export const FeedListContainer: React.FC = () => {
  // container上にstoreのstateを格納する空間を用意する
  const modalState = useObservableStore<ModalState>(ModalStateStore);
  const feedItems = useObservableStore<Array<FeedItem>>(FeedItemsStore);

  return (
    <section>
      {feedItems.length < 1 ? (
        <LoadingSpinner />
      ) : (
        <FeedList feedItems={feedItems} />
      )}
      <PrimaryFloatButton
        label="タップして新しい情報を取得できます"
        isDisplay={false}
        onClick={reloadFeedItems}
      />
      <FeedItemMenu
        isDisplay={modalState.activeModalType === ModalType.ItemMenu}
        data={modalState.data as FeedItem}
      />
    </section>
  );
};
