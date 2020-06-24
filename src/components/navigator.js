import React from "react"
import Block from "./block"
import WideBlock from './wideblock'
import COLORS from "./colors"

import style from "./navigator.module.css"

class Navigator extends React.Component {
  constructor(props) {
    super(props)
    this.collapseWithScroll = this.collapseWithScroll.bind(this)
    this.state = {paddingTop: "8rem"}
  }

  collapseWithScroll() {
    // let currentPadding = parseFloat(this.state.paddingTop)
    let rootFontSize = parseFloat(window.getComputedStyle(document.body).getPropertyValue('font-size'));
    let topDistance = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0) / rootFontSize

    // console.log('currentPadding: ' + currentPadding.toString())
    // console.log('rootFontSize: ' + rootFontSize.toString())
    // console.log('topDistance: ' + topDistance.toString())
    if (topDistance <= 7) {
      this.setState({paddingTop: (8 - topDistance).toString() + "rem"})
      // console.log(this.state.paddingTop)
    }

    // else {
    //   this.setState({paddingTop: "1rem"})
    // }

    else if (topDistance > 7 && this.state.paddingTop.localeCompare("1rem")) {
      this.setState({paddingTop: "1rem"})
      // console.log(this.state.paddingTop)
    }
  }

  render() {
    const paddingTop = this.state.paddingTop;

    return (
      <nav className={style.navigator}>
        <WideBlock color={COLORS.main} to="/">patchwork</WideBlock>
        <ul>
          <li><Block color={COLORS.c1} to="/about/" scrollAction={this.collapseWithScroll} paddingTop={paddingTop}>about</Block></li>
          <li><Block color={COLORS.c2} to="/contact/" scrollAction={this.collapseWithScroll} paddingTop={paddingTop}>contact</Block></li>
          <li><Block color={COLORS.c3} to="/blog/" scrollAction={this.collapseWithScroll} paddingTop={paddingTop}>blog</Block></li>
        </ul>
      </nav>
    )
  }
}

export default Navigator