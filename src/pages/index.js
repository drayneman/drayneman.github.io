import React from "react"
import COLORS from "../components/colors"

import Patchwork from "../components/patchwork"
import Content from "../components/content"

import "../assets/IBMPlexSans-Thin.woff2"
import Title from "../components/title.js"

class Home extends React.Component {
  componentDidMount() {
    document.body.style.backgroundColor = COLORS.main
  }

  render() {
    return (
      <Patchwork page="home" color={COLORS.main}>
        <Content color={COLORS.main}>
          <Title/>
        </Content>
      </Patchwork>
    )
  }
}

export default Home
