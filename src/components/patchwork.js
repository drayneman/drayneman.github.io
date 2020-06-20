import React from "react"

import style from "./patchwork.module.css"
import SmallBlock from "./patchwork-smallblock"

// will represent complete layout consisting of:
// - smallblocks, which build page sections
// - wideblocks, which make title
// - content towards the bottom
export default function Patchwork({children}) {
  return(
    <div className={style.patchwork}>
      <SmallBlock color={"red"}>Home</SmallBlock>
      {/* <h1>Hello world!</h1>
      {children} */}
    </div>
  )
}