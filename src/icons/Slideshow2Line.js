import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSlideshow2Line(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M13 17v3h5v2H6v-2h5v-3H4a1 1 0 01-1-1V4H2V2h20v2h-1v12a1 1 0 01-1 1h-7zm-8-2h14V4H5v11zm5-9l5 3.5-5 3.5V6z" />
    </Svg>
  );
}

export default SvgSlideshow2Line;
