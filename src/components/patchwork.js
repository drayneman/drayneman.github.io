import React from "react"

import style from "./patchwork.module.css"
import Header from "./header"

// will represent complete layout consisting of:
// - smallblocks, which build page sections
// - wideblocks, which make title
// - content towards the bottom
export default function Patchwork({children}) {
  return(
    <div className={style.patchwork}>
      {/* this is definitely a hack */}
      <div className="spacer" style={{minHeight: "50px"}}>
      </div>
      <Header siteTitle="Patchwork"></Header>
      {children}
    </div>
  )
}