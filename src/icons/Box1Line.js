import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Box1Line(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <Path d="M12 1l9.5 5.5v11L12 23l-9.5-5.5v-11L12 1zM5.494 7.078L13 11.423v8.687l6.5-3.763V7.653L12 3.311 5.494 7.078zM4.5 8.813v7.534L11 20.11v-7.534L4.5 8.813z" />
    </Svg>
  )
}

export default Box1Line
