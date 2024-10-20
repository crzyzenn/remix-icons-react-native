import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgExchangeDollarFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M5.373 4.51A9.962 9.962 0 0112 2c5.523 0 10 4.477 10 10a9.954 9.954 0 01-1.793 5.715L17.5 12H20A8 8 0 006.274 6.413l-.9-1.902zm13.254 14.98A9.962 9.962 0 0112 22C6.477 22 2 17.523 2 12c0-2.125.663-4.095 1.793-5.715L6.5 12H4a8 8 0 0013.726 5.587l.9 1.902zM8.5 14H14a.5.5 0 100-1h-4a2.5 2.5 0 110-5h1V7h2v1h2.5v2H10a.5.5 0 100 1h4a2.5 2.5 0 110 5h-1v1h-2v-1H8.5v-2z" />
    </Svg>
  );
}

export default SvgExchangeDollarFill;
