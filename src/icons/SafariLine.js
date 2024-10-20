import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSafariLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M17.812 6.503l-4.398 6.911-6.911 4.398A7.973 7.973 0 0011 19.938V18h2v1.938a7.96 7.96 0 003.906-1.618l-1.37-1.37 1.414-1.414 1.37 1.37A7.96 7.96 0 0019.938 13H18v-2h1.938a7.973 7.973 0 00-2.126-4.497zm-.315-.315A7.973 7.973 0 0013 4.062V6h-2V4.062A7.96 7.96 0 007.094 5.68l1.37 1.37L7.05 8.464l-1.37-1.37A7.96 7.96 0 004.062 11H6v2H4.062a7.973 7.973 0 002.126 4.497l4.398-6.911 6.911-4.398zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </Svg>
  );
}

export default SvgSafariLine;
