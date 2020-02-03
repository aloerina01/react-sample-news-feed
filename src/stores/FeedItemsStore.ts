import { FeedList } from "../types/FeedList";
import { createObservableStore } from "../StoreFactory";
import { sampleData } from "../sample";

const initialFeedList: FeedList = sampleData;
export const FeedItemsStore = createObservableStore(initialFeedList);
