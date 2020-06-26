import React from "react"
import { Link } from "gatsby"

import style from "./block.module.css"

class SmallBlock extends React.Component {
  constructor(props) {
    super(props)
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.props.scrollAction)
    console.log('listening mounted')
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.scrollAction)
    console.log('listening unmounted')
  }

  handleScroll() {
    this.props.scrollAction()
  }

  render() {
    return (
      <Link to={this.props.to} className={style.blockLink} style={{backgroundColor: this.props.color, paddingTop: this.props.paddingTop}}>
        {/* <div className={style.blockText}> */}
          {this.props.children}
        {/* </div> */}
      </Link>
    )
  }
}

export default SmallBlock