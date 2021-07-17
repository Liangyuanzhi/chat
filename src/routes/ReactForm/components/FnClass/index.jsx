import React from "react";

const Demo = (props) => {
  const {
    form: { getFieldError },
    value = "",
    name = "",
    type = "text",
    required = false,
  } = props;
  const error = getFieldError(name);

  const handleChange = (value) => {
    const { onChange } = props;
    onChange(value);
  };
  return (
    <div style={{ marginBottom: "20px" }}>
      <label>
        {required ? <span style={{ color: "red" }}>*</span> : ""}
        备注:{" "}
      </label>
      <input
        type={type}
        value={value}
        onChange={handleChange}
        style={error ? { border: "2px solid red" } : {}}
      />
      <div style={{ color: "red", marginLeft: "40px" }}>
        {error ? error.join(",") : ""}
      </div>
    </div>
  );
};
export default Demo;
