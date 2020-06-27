import React from "react"
import COLORS from "../components/colors"

import {Link} from "gatsby"

import ContentLayout from "../components/content-layout"
import Content from "../components/content"

class About extends React.Component {
  render() {
    return (
      <ContentLayout page='about' color={COLORS.c1}>
        <Content>
          
        </Content>
      </ContentLayout>
    )
  }
}

export default About