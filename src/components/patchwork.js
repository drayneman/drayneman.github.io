import React from "react"

import Header from "./header"
import Content from "../components/content"

import stylePatchwork from "./patchwork.module.css"
import styleContent from "./content.module.css"

// will represent complete layout consisting of:
// - smallblocks, which build page sections
// - wideblocks, which make title
// - content towards the bottom
export default class Patchwork extends React.Component {
  render() {
    return(
      <div className={stylePatchwork.patchwork}>
        <Header siteTitle="Patchwork"></Header>
        <Content className={styleContent.content}>{this.props.children}</Content>
      </div>
    )
  }
}