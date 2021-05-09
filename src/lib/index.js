import React, { Fragment } from "react";
import "./index.scss";

import JsonTree from "./json-tree/json-tree";
import { TYPES, getType } from "./contants";

const JsonViewer = ({ data }) => {
  const type = getType(data);
  return (
    <div className="json-viewer-wrapper">
      {type === TYPES.BLANK_OBJECT && "{ }"}
      {type === TYPES.BLANK_ARRAY && "[ ]"}
      {type === TYPES.ARRAY && (
        <Fragment>
          [
          <JsonTree data={data} />]
        </Fragment>
      )}
      {type === TYPES.OBJECT && (
        <Fragment>
          {"{"}
          <JsonTree data={data} />
          {"}"}
        </Fragment>
      )}
    </div>
  );
};

export default JsonViewer;
