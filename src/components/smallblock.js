import React from "react"
import { Link } from "gatsby"

import style from "./smallblock.module.css"

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
    console.log('smallblock paddingTop:' + this.props.paddingTop.toString())
    return (
      // is there a better way of doing this lol
      <Link to={this.props.to}>
        <div className={style.smallblock} style={{backgroundColor: this.props.color, paddingTop: this.props.paddingTop}}>
          {this.props.children}
        </div>
      </Link>
    )
  }
}

export default SmallBlock