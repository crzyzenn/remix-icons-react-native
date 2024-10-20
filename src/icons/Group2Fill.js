import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgGroup2Fill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M10 19.748V16.4c0-1.283.995-2.292 2.467-2.868A8.482 8.482 0 009.5 13c-1.89 0-3.636.617-5.047 1.66A8.017 8.017 0 0010 19.748zm8.88-3.662C18.485 15.553 17.17 15 15.5 15c-2.006 0-3.5.797-3.5 1.4V20a7.996 7.996 0 006.88-3.914zM9.55 11.5a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5zm5.95 1a2 2 0 100-4 2 2 0 000 4zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </Svg>
  );
}

export default SvgGroup2Fill;
