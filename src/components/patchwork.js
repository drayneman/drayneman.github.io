import React from "react"

import Header from "./header"
import Content from "../components/content"

import stylePatchwork from "./patchwork.module.css"
import styleContent from "./content.module.css"

// layout
export default class Patchwork extends React.Component {
  render() {
    return(
      <div className={stylePatchwork.patchwork} style={{backgroundColor: this.props.color}}>
        <Header siteTitle="Patchwork"></Header>
        <Content className={styleContent.content} color={this.props.color}>{this.props.children}</Content>
      </div>
    )
  }
}