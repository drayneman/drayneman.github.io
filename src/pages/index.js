import React from "react"
import COLORS from "../components/colors"

import Patchwork from "../components/patchwork"
import Content from "../components/content"

class Home extends React.Component {
  componentDidMount() {
    document.body.style.backgroundColor = COLORS.main
  }

  render() {
    return (
      <Patchwork color={COLORS.main}>
        <Content color={COLORS.main}>
          <p>patchwork</p>
        </Content>
      </Patchwork>
    )
  }
}

export default Home
