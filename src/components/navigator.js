import React from "react"
import Block from "./block"
import COLORS from "./colors"

import style from "./navigator.module.css"

class Navigator extends React.Component {
  constructor(props) {
    super(props)
    this.collapseWithScroll = this.collapseWithScroll.bind(this)
    this.state = {paddingTop: "6rem"}
  }

  collapseWithScroll() {
    let rootFontSize = parseFloat(window.getComputedStyle(document.body).getPropertyValue('font-size'));
    let topDistance = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0) / rootFontSize

    // console.log('currentPadding: ' + currentPadding.toString())
    // console.log('rootFontSize: ' + rootFontSize.toString())
    // console.log('topDistance: ' + topDistance.toString())
    if (topDistance <= 5.5) {
      this.setState({paddingTop: (6 - topDistance).toString() + "rem"})
      // console.log(this.state.paddingTop)
    }

    else if (topDistance > 5.5 && this.state.paddingTop.localeCompare(".5rem")) {
      this.setState({paddingTop: ".5rem"})
      // console.log(this.state.paddingTop)
    }
  }

  render() {
    const paddingTop = this.state.paddingTop;

    return (
      <nav className={style.navigator}>
        <ul>
          {this.props.page !== undefined && !this.props.page.localeCompare('home') ? undefined : <li><Block page={this.props.page} color={COLORS.main} to="/" scrollAction={this.collapseWithScroll} paddingTop={paddingTop}>home</Block></li>}
          <li><Block page={this.props.page} color={COLORS.c1} to="/about/" scrollAction={this.collapseWithScroll} paddingTop={paddingTop}>about</Block></li>
          <li><Block page={this.props.page} color={COLORS.c2} to="/contact/" scrollAction={this.collapseWithScroll} paddingTop={paddingTop}>contact</Block></li>
          <li><Block page={this.props.page} color={COLORS.c3} to="/blog/" scrollAction={this.collapseWithScroll} paddingTop={paddingTop}>blog</Block></li>
        </ul>
      </nav>
    )
  }
}

export default Navigator