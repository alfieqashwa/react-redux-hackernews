import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";
import store from "./store";
import { getReadableStories } from "./selectors/story";
import { STORY_ARCHIVE } from "./constants/actionTypes";

import "./index.css";
import * as serviceWorker from "./serviceWorker";

const stories = [
  {
    title: "React",
    url: "https://facebook.github.io/react/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0
  },
  {
    title: "Redux",
    url: "https://github.com/reactjs/redux",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1
  }
];

function render() {
  ReactDOM.render(
    <App
      stories={getReadableStories(store.getState())}
      onArchive={id => store.dispatch({ type: STORY_ARCHIVE, id })}
    />,
    document.getElementById("root")
  );
}

store.subscribe(render);
render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();
