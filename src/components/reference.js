import React from "react";
import { LinkToStacked } from "react-stacked-pages-hook";

import "./reference.css";

const Reference = ({ node }) => {

  // console.log("node: ", node)
  
  return (
    <div>
      <LinkToStacked to={node.slug} className="reference">
        <div>
          <h5>{node.title}</h5>
          <p>{node.content}</p>
        </div>
      </LinkToStacked>
    </div>
  );
};

export default Reference;
