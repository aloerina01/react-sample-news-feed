import { FeedItem } from "@/types/FeedItem";

export enum ModalType {
  ItemMenu,
  None
}

export type ModalState = {
  activeModalType: ModalType;
  data: FeedItem | null;
};
