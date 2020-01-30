export enum ModalType {
  ItemMenu,
  None
}

export type ModalState = {
  isDisplay: boolean;
  modalType: ModalType;
  data: any;
};
