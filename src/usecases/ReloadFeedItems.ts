import { sampleData } from "../sample";
import { FeedItemsStore } from "../stores/FeedItemsStore";

export function reloadFeedItems() {
  // ダミー
  setTimeout(() => {
    FeedItemsStore.update(sampleData);
  }, 500);
  // APIたたいてデータを取得
  // 必要あればnormalize
  // store更新
}
