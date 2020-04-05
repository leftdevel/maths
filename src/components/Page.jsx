import React from "react";
import PropTypes from "prop-types";

function Page({ children }) {
  return <div className="columns page">{children}</div>;
}

Page.propTypes = {
  children: PropTypes.node,
};

Page.defaultProps = {
  children: null,
};

export default Page;
