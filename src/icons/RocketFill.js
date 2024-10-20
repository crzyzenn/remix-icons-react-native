import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgRocketFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M5.33 15.929A13.064 13.064 0 015 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 1.01-.114 1.991-.33 2.929l2.02 1.796a.5.5 0 01.097.63l-2.458 4.096a.5.5 0 01-.782.096l-2.254-2.254a1 1 0 00-.707-.293H9.414a1 1 0 00-.707.293l-2.254 2.254a.5.5 0 01-.782-.096l-2.458-4.095a.5.5 0 01.097-.631l2.02-1.796zM12 13a2 2 0 100-4 2 2 0 000 4z" />
    </Svg>
  );
}

export default SvgRocketFill;
