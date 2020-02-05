import { sampleData } from "../sample";
import { FeedItemsStore } from "../stores/FeedItemsStore";

export function reloadFeedItems() {
  // listの初期化
  FeedItemsStore.update([]);
  // APIたたいてデータを取得
  // 必要あればnormalize
  // store更新

  // ダミー
  setTimeout(() => {
    FeedItemsStore.update(sampleData);
  }, 500);
}
