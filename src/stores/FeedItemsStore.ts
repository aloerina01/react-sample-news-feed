import { FeedList } from "../types/FeedList";
import { createObservableStore } from "../StoreFactory";

const initialFeedList: FeedList = [];
export const FeedItemsStore = createObservableStore(initialFeedList);
