import * as React from "react"
import Svg, { Path } from "react-native-svg"

function PassPendingLine(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <Path d="M3 18h18V6H3v12zM1 5a1 1 0 011-1h20a1 1 0 011 1v14a1 1 0 01-1 1H2a1 1 0 01-1-1V5zm8 5a1 1 0 10-2 0 1 1 0 002 0zm2 0a3 3 0 11-6 0 3 3 0 016 0zm-2.998 6c-.967 0-1.84.39-2.475 1.025l-1.414-1.414A5.486 5.486 0 018.002 14c1.518 0 2.895.617 3.889 1.61l-1.414 1.415A3.486 3.486 0 008.002 16zM13 9v6h2V9h-2zm4 0v6h2V9h-2z" />
    </Svg>
  )
}

export default PassPendingLine
