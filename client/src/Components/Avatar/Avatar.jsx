import React from "react";
// import Avatar from "../../Components/Avatar/Avatar";
const Avatar = ({
  children,
  backgroundColor, px, py,
  color,
  borderRadius,
  fontSize,
  cursor
}) => {
  const style = {
    backgroundColor,
    padding: `${py} ${px}`,
    color: color || 'black',
    borderRadius,
    fontSize,
    textAllign: "center",
    cursor: cursor || null,
    textDecoration: "none"
  };

  return (
    <div style={style}>
      {children}
    </div>
  )
}

export default Avatar;
