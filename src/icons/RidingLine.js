import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgRidingLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M5.5 21a4.5 4.5 0 110-9 4.5 4.5 0 010 9zm0-2a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm13 2a4.5 4.5 0 110-9 4.5 4.5 0 010 9zm0-2a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm-7.477-8.695L13 12v6h-2v-5l-2.719-2.266A2 2 0 018 7.671l2.828-2.828a2 2 0 012.829 0l1.414 1.414a6.969 6.969 0 003.917 1.975l-.01 2.015a8.962 8.962 0 01-5.321-2.575l-2.634 2.633zM16 5a2 2 0 110-4 2 2 0 010 4z" />
    </Svg>
  );
}

export default SvgRidingLine;
