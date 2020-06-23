import React from "react"
import COLORS from "../components/colors"

import Patchwork from "../components/patchwork"
import Content from "../components/content"

class Blog extends React.Component {
  componentDidMount() {
    document.body.style.backgroundColor = COLORS.c3
  }
  
  render() {
    return (
      <Patchwork color={COLORS.c3}>
        <Content>
          <h1>Blog</h1>
          <p>Patchwork is a site created by Tyler Tokumoto.</p>
        </Content>
      </Patchwork>
    )
  }
}

export default Blog