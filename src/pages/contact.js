import React from "react"
import COLORS from "../components/colors"

import ContentLayout from "../components/content-layout"
import Content from "../components/content"

class Contact extends React.Component {
  render() {
    return (
      <ContentLayout page='contact' color={COLORS.c2}>
        <Content>
          <h1>you'll never find me</h1>
          <p></p>
        </Content>
      </ContentLayout>
    )
  }
}

export default Contact