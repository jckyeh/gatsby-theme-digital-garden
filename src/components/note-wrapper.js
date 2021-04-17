import React from "react";
import {
  LinkToStacked,
  PageIndexProvider,
  useStackedPage,
} from "react-stacked-pages-hook";

import "./note-wrapper.css";

function noteContainerClassName({ overlay, obstructed, highlighted } = {}) {
  return `note-container ${overlay ? "note-container-overlay" : ""} ${
    obstructed ? "note-container-obstructed" : ""
  } ${highlighted ? "note-container-highlighted" : ""}`;
}

const NoteWrapper = ({ children, slug, title }) => {

  // console.log("children in note-wrapper: ", children)
  
  const [, state, i] = useStackedPage();

  return (
    <div
      className={noteContainerClassName(state)}
      style={{ left: 40 * (i || 0), right: -585 }}
    >
      <div className="note-content">{children}</div>
      <LinkToStacked to={slug} className="obstructed-label">
        
        {/* This is the vertical title shown on the side of the stack */}
        {title}

      </LinkToStacked>
    </div>
  );
};

const ContextProvider = ({ i, ...rest }) => (
  <PageIndexProvider value={i}>
    <NoteWrapper {...rest} />
  </PageIndexProvider>
);

export default ContextProvider;
