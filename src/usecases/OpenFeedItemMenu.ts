import { ModalStateStore } from "../stores/ModalStateStore";
import { ModalType, ModalState } from "../types/ModalState";
import { FeedItem } from "../types/FeedItem";

export function openFeedItemMenu(feedItem: FeedItem) {
  const newState: ModalState = {
    activeModalType: ModalType.ItemMenu,
    data: feedItem
  };
  ModalStateStore.update(newState);
}
