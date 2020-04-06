import React from "react";
import PropTypes from "prop-types";

function Page({ children }) {
  return (
    <div className="card page">
      <div className="page-head-print-gutter" />
      <div className="card-content">
        <div className="columns">
          {children}
        </div>
      </div>
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.node,
};

Page.defaultProps = {
  children: null,
};

export default Page;
