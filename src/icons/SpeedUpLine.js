import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SpeedUpLine(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <Path d="M20 13c0 2.21-.895 4.21-2.343 5.657l1.414 1.414A9.97 9.97 0 0022 13c0-5.523-4.477-10-10-10S2 7.477 2 13a9.969 9.969 0 002.929 7.071l1.414-1.414A8 8 0 1120 13zm-4.707-4.707l-4.5 4.5 1.414 1.414 4.5-4.5-1.414-1.414z" />
    </Svg>
  )
}

export default SpeedUpLine
