import { State } from "../types/State";
import { ModalState, ModalType } from "../types/ModalState";
import { createObservableStore } from "../StoreFactory";

export const modalState: ModalState & State = {
  isDisplay: false,
  modalType: ModalType.None,
  data: null
};

// Stateを定義する部分とStoreインスタンスを生成する部分を切り分けておく
// Applicationの肥大化に併せて、のちのちStoreの仕組みを別のライブラリに置き換えられるように
export const ModalStateStore = createObservableStore(modalState);
