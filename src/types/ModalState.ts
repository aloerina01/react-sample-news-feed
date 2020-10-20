import { FeedItem } from "./FeedItem";

export enum ModalType {
  ItemMenu,
  None
}

export type ModalState = {
  activeModalType: ModalType;
  data: FeedItem | null;
};
