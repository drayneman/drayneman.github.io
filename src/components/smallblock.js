import React from "react"
import { Link } from "gatsby"

import style from "./smallblock.module.css"

class SmallBlock extends React.Component {
  render() {
    return (
      // is there a better way of doing this lol
      <Link to={this.props.to} className={style.smallblock} style={{backgroundColor: this.props.color}}>
        {this.props.children}
      </Link>
    )
  }
}

export default SmallBlock