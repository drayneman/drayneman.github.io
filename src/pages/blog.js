import React from "react"
import COLORS from "../components/colors"

import ContentLayout from "../components/content-layout"
import Content from "../components/content"

class Blog extends React.Component {
  render() {
    return (
      <ContentLayout page='blog' color={COLORS.c3}>
        <Content>
          <h1>Blog</h1>
          <p>Patchwork is a site created by Tyler Tokumoto.</p>
        </Content>
      </ContentLayout>
    )
  }
}

export default Blog