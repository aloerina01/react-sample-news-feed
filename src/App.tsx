import * as React from "react";
import { FeedListContainer } from "./containers/FeedListContainer";
import { reloadFeedItems } from "./usecases/ReloadFeedItems";
import "./styles.css";

export default function App() {
  reloadFeedItems();
  return (
    <div className="App">
      <FeedListContainer />
    </div>
  );
}
