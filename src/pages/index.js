import React from "react"
import COLORS from "../components/colors"

import Patchwork from "../components/patchwork"

class Home extends React.Component {
  componentDidMount() {
    document.body.style.backgroundColor = COLORS.main
  }
  
  render() {
    return (
      <Patchwork color={COLORS.main}>
        <p>patchwork</p>
      </Patchwork>
    )
  }
}

export default Home
