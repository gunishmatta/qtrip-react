import React from "react";
import "./styles.css";

const Heading = ({ type: Type, content }) => {
  return <Type>{content}</Type>;
};
export default Heading;
