import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBoxingFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M9.5 11l.144.007a1.5 1.5 0 011.35 1.349L11 12.5l-.007.144a1.5 1.5 0 01-1.349 1.35L9.5 14H6v2h3.5c1.7 0 3.117-1.212 3.434-2.819l.03-.18L19 13c.711 0 1.388-.149 2-.416V17a3.001 3.001 0 01-2 2.829V21a1 1 0 01-1 1H6a1 1 0 01-1-1v-1.17A3.001 3.001 0 013 17v-4a2 2 0 012-2h4.5zM22 7.5V8l-.005.176a3 3 0 01-2.819 2.819L19 11h-6.337a3.501 3.501 0 00-2.955-1.994L9.5 9H5a3.98 3.98 0 00-2.001.536L3 6a4 4 0 014-4h9.5A5.5 5.5 0 0122 7.5z" />
    </Svg>
  );
}

export default SvgBoxingFill;
