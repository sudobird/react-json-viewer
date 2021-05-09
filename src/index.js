import React from 'react';
import reactDom from 'react-dom';
import JsonViewer from "./lib";


reactDom.render(<JsonViewer data={{name: {age: 90}}}/>, document.getElementById("root"));
