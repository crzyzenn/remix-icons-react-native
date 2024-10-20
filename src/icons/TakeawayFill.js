import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgTakeawayFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M16 1a1 1 0 011 1v.999L22 3v6l-2.02-.001 2.767 7.596a4 4 0 11-7.62 2.406h-4.253a4.002 4.002 0 01-7.8-.228A1.997 1.997 0 012 17v-5h9a1 1 0 00.883.993L12 13h2a1 1 0 00.993-.883L15 12V3h-3V1h4zM7 16a2 2 0 100 4 2 2 0 000-4zm12 0a2 2 0 100 4 2 2 0 000-4zM10 3a1 1 0 011 1v7H2V4a1 1 0 011-1h7zm10 2h-3v2h3V5zM9 5H4v1h5V5z" />
    </Svg>
  );
}

export default SvgTakeawayFill;
