import React from "react"
import COLORS from "../components/colors"

import Patchwork from "../components/patchwork"
import Content from "../components/content"

class Contact extends React.Component {
  componentDidMount() {
    document.body.style.backgroundColor = COLORS.c2
  }
  
  render() {
    return (
      <Patchwork color={COLORS.c2}>
        <Content>
          <h1>Contact</h1>
          <p>Patchwork is a site created by Tyler Tokumoto.</p>
        </Content>
      </Patchwork>
    )
  }
}

export default Contact