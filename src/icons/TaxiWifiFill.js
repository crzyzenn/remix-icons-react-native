import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgTaxiWifiFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12 3v4H6.319l-2.144 5H22v9a1 1 0 01-1 1h-1a1 1 0 01-1-1v-1H5v1a1 1 0 01-1 1H3a1 1 0 01-1-1v-9l2.48-5.788A2 2 0 016.32 5H9V3h3zM6.5 14a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm11 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm1-13a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm0 5.167c-.491 0-.94.177-1.289.47l-.125.115L18.5 8.167l1.413-1.416a1.994 1.994 0 00-1.413-.584zm0-2.667a4.65 4.65 0 00-3.128 1.203l-.173.165.944.942a3.323 3.323 0 012.357-.977 3.32 3.32 0 012.201.83l.156.147.943-.943A4.652 4.652 0 0018.5 3.5z" />
    </Svg>
  );
}

export default SvgTaxiWifiFill;
