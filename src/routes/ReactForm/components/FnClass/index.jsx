import React, { useEffect } from "react";

const Demo = (props) => {
  useEffect(() => {
    const { onChange } = props;
    onChange("Fn Class value");
  }, []);
  return(
    <span>
      <span style={{ marginTop: "15px" }}>Fn Class</span>
      {/* <input type="text" /> */}
    </span>
  );
};
export default Demo;
