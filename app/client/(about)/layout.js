import React from "react";

const InternalLayout = (props) => {
  return (
    <div>
      <p>InternalLayout</p>

      {props.children}
    </div>
  );
};

export default InternalLayout;
