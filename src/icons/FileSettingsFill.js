import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFileSettingsFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M16 2l5 5v14.008a.993.993 0 01-.993.992H3.993A1 1 0 013 21.008V2.992C3 2.444 3.445 2 3.993 2H16zM8.595 12.812l-.992.572 1 1.732.992-.573c.393.372.873.654 1.405.812V16.5h2v-1.145a3.496 3.496 0 001.405-.812l.992.573 1-1.732-.992-.573a3.51 3.51 0 000-1.622l.992-.573-1-1.732-.992.573A3.496 3.496 0 0013 8.645V7.5h-2v1.145a3.496 3.496 0 00-1.405.812l-.992-.573-1 1.732.992.573a3.51 3.51 0 000 1.623zM12 13.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
    </Svg>
  );
}

export default SvgFileSettingsFill;
