import "./box.css";
// we using object destructring on the props here
export default function Box({ size = "small", className, style, ...rest }) {
  let defaultClass = `box ${size === "small" ? "box-small" : size === "medium" ? "box-medium" : size === "large" ? "box-large" : ""}`;

  return (
    <div
      className={`${defaultClass} ${className ? className : ""}`}
      style={{
        ...style,
        fontStyle: "italic",
      }}
      {...rest}
    ></div>
  );
}
