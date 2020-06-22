import React from "react"

import Header from "./header"
import Content from "../components/content"

import stylePatchwork from "./patchwork.module.css"
import styleContent from "./content.module.css"

// will represent complete layout consisting of:
// - smallblocks, which build page sections
// - wideblocks, which make title
// - content towards the bottom
export default function Patchwork({children}) {
  return(
    <div className={stylePatchwork.patchwork}>
      <Header siteTitle="Patchwork"></Header>
      <Content className={styleContent.content}>{children}</Content>
    </div>
  )
}