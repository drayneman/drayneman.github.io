import React from 'react'
import { Link } from "gatsby"

import style from './wideblock.module.css'

class WideBlock extends React.Component {
  render() {
    return (
      <Link to={this.props.to} className={style.wideblockLink}>
        <div className={style.wideblock} style={{backgroundColor: this.props.color, paddingTop: this.props.paddingTop}}>
          {this.props.children}
        </div>
      </Link>
    )
  }
}

export default WideBlock