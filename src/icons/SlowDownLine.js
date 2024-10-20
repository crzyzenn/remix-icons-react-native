import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SlowDownLine(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <Path d="M4 13c0 2.21.895 4.21 2.343 5.657L4.93 20.07A9.969 9.969 0 012 13C2 7.477 6.477 3 12 3s10 4.477 10 10a9.97 9.97 0 01-2.929 7.071l-1.414-1.414A8 8 0 104 13zm4.707-4.707l4.5 4.5-1.414 1.414-4.5-4.5 1.414-1.414z" />
    </Svg>
  )
}

export default SlowDownLine
