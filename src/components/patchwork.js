import React from "react"

import Header from "./header"

import stylePatchwork from "./patchwork.module.css"

// layout
export default class Patchwork extends React.Component {
  render() {
    return(
      <div className={stylePatchwork.patchwork} style={{backgroundColor: this.props.color}}>
        <Header siteTitle="Patchwork"></Header>
        {this.props.children}
      </div>
    )
  }
}