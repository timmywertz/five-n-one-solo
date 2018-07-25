import React from "react";
import { map } from "ramda";
import { connect } from "react-redux";

//const url = "http://localhost:5000";

const li = color => {
  return (
    <li key={color.id} style={{ color: color.value }}>
      {color.name}
    </li>
  );
};

const Colors = props => {
  return (
    <div>
      <h1>Colors</h1>
      <ul>{map(li, props.colors)}</ul>
    </div>
  );
};

const mapStateToProps = state => {
  return { colors: state.colors };
};

const connector = connect(mapStateToProps);

export default connector(Colors);
