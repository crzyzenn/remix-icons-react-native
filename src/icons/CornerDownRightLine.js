import * as React from "react"
import Svg, { Path } from "react-native-svg"

function CornerDownRightLine(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <Path d="M5 14V5h2v7h10.172l-3.95-3.95 1.414-1.414L21 13l-6.364 6.364-1.414-1.414 3.95-3.95H5z" />
    </Svg>
  )
}

export default CornerDownRightLine
