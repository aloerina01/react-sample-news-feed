import * as React from "react";
import { FeedList } from "./components/FeedList";
import { PrimaryFloatButton } from "./components/PrimaryFloatButton";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <FeedList feedItems={[]} />
      <PrimaryFloatButton
        label="タップして新しい情報を取得できます"
        onClick={() => console.log()}
      />
    </div>
  );
}
