import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ContractUpDownLine(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <Path d="M5.793 5.207L12 11.414l6.207-6.207-1.414-1.414L12 8.586 7.207 3.793 5.793 5.207zm12.414 13.586L12 12.586l-6.207 6.207 1.414 1.414L12 15.414l4.793 4.793 1.414-1.414z" />
    </Svg>
  )
}

export default ContractUpDownLine
