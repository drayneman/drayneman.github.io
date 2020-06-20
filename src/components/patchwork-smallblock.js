import React from "react"

import style from "./patchwork-smallblock.module.css"

class SmallBlock extends React.Component {
  render() {
    // var styleItems = Object.assign({}, style['patchwork-smallblock'], {backgroundColor: this.props.color})
    return (
      // is there a better way of doing this lol
      <div className={style.patchworkSmallblock} style={{backgroundColor: this.props.color}}>
        {this.props.children}
      </div>
    )
  }
}

// export default function SmallBlock({children}) {
//   return (
//     <div className={style.patchwork-smallblock}>
//       {children}
//     </div>
//   )
// }
export default SmallBlock