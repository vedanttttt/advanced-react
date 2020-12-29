//rfacp
//ptar

import React from "react";
import PropTypes from "prop-types";

const testing = (props) => {
  return (
    <div>
      <h2>hello {props.name || "brother"}</h2>
    </div>
  );
};

// testing.propTypes = {
//   name: PropTypes.array.isRequired,

// };

export default testing;
