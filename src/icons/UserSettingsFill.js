import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgUserSettingsFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12 14v8H4a8 8 0 018-8zm0-1c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm2.595 5.812a3.51 3.51 0 010-1.623l-.992-.573 1-1.732.992.573A3.496 3.496 0 0117 14.645V13.5h2v1.145c.532.158 1.012.44 1.405.812l.992-.573 1 1.732-.992.573a3.51 3.51 0 010 1.622l.992.573-1 1.732-.992-.573a3.496 3.496 0 01-1.405.812V22.5h-2v-1.145a3.496 3.496 0 01-1.405-.812l-.992.573-1-1.732.992-.572zM18 17a1 1 0 100 2 1 1 0 000-2z" />
    </Svg>
  );
}

export default SvgUserSettingsFill;
