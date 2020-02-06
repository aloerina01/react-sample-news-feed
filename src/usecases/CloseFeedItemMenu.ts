import { ModalStateStore } from "../stores/ModalStateStore";
import { ModalType, ModalState } from "../types/ModalState";

export function closeFeedItemMenu(event) {
  event.preventDefault();
  const newState: ModalState = {
    activeModalType: ModalType.None,
    data: null
  };
  ModalStateStore.update(newState);
}
