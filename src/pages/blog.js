import React from "react"
import COLORS from "../components/colors"

import ContentLayout from "../components/content-layout"
import Content from "../components/content"

class Blog extends React.Component {
  render() {
    return (
      <ContentLayout page='blog' color={COLORS.c3}>
        <Content>
          <h1>when I grow up, I want to be a cog in the machine.</h1>
          <p>*ice road trucker. sorry, i don't know what came over me.</p>
        </Content>
      </ContentLayout>
    )
  }
}

export default Blog