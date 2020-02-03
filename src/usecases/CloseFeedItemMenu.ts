import { ModalStateStore } from "../stores/ModalStateStore";
import { ModalType, ModalState } from "../types/ModalState";

export function openFeedItemMenu() {
  const newState: ModalState = {
    activeModalType: ModalType.None,
    data: null
  };
  ModalStateStore.update(newState);
}
