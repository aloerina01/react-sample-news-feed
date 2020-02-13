import { FeedItemsStore } from "../stores/FeedItemsStore";
import { FeedItem } from "../types/FeedItem";

export function hideFeedItem(feedItemId: string): void {
  const nextState = FeedItemsStore.getState();
  const target: FeedItem | undefined = nextState.find(
    each => each.id === feedItemId
  );
  target.isHided = true;
  FeedItemsStore.update(nextState);
}
