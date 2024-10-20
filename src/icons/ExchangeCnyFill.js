import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgExchangeCnyFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M5.373 4.51A9.962 9.962 0 0112 2c5.523 0 10 4.477 10 10a9.954 9.954 0 01-1.793 5.715L17.5 12H20A8 8 0 006.274 6.413l-.9-1.902zm13.254 14.98A9.962 9.962 0 0112 22C6.477 22 2 17.523 2 12c0-2.125.663-4.095 1.793-5.715L6.5 12H4a8 8 0 0013.726 5.587l.9 1.902zM13 13.535h3v2h-3v2h-2v-2H8v-2h3v-1H8v-2h2.586L8.464 8.414 9.88 7 12 9.121 14.121 7l1.415 1.414-2.122 2.122H16v2h-3v1z" />
    </Svg>
  );
}

export default SvgExchangeCnyFill;
