import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBusFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M17 20H7v1a1 1 0 01-1 1H5a1 1 0 01-1-1v-1H3v-8H2V8h1V5a2 2 0 012-2h14a2 2 0 012 2v3h1v4h-1v8h-1v1a1 1 0 01-1 1h-1a1 1 0 01-1-1v-1zM5 5v9h14V5H5zm0 11v2h4v-2H5zm10 0v2h4v-2h-4z" />
    </Svg>
  );
}

export default SvgBusFill;
