import React from "react";

const layout = (props) => {
  return (
    <div>
      <h1>This is review Detail</h1>
      <div>{props.children}</div>
    </div>
  );
};

export default layout;
