import React from "react"

import style from "./smallblock.module.css"

class SmallBlock extends React.Component {
  render() {
    return (
      // is there a better way of doing this lol
      <div className={style.smallblock} style={{backgroundColor: this.props.color}}>
        {this.props.children}
      </div>
    )
  }
}

export default SmallBlock