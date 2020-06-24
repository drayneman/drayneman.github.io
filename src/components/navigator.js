import React from "react"
import SmallBlock from "./smallblock"
import COLORS from "./colors"

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
    const paddingTop = this.state.paddingTop
    var homeTab = <li><SmallBlock fontFamily={"IBM Plex Sans Regular"} color={COLORS.main} to="/" scrollAction={this.collapseWithScroll} paddingTop={paddingTop}>patchwork</SmallBlock></li>
    console.log(this.props.page === undefined)

    if (this.props.page !== undefined && !this.props.page.localeCompare('home')) {
      console.log('fired')
      homeTab = <li><SmallBlock color={COLORS.main} to="/" scrollAction={this.collapseWithScroll} paddingTop={paddingTop}></SmallBlock></li>
    }

    return (
      <nav className={this.props.className}>
        <ul>
          {homeTab}
          <li><SmallBlock color={COLORS.c1} to="/about/" scrollAction={this.collapseWithScroll} paddingTop={paddingTop}>about</SmallBlock></li>
          <li><SmallBlock color={COLORS.c2} to="/contact/" scrollAction={this.collapseWithScroll} paddingTop={paddingTop}>contact</SmallBlock></li>
          <li><SmallBlock color={COLORS.c3} to="/blog/" scrollAction={this.collapseWithScroll} paddingTop={paddingTop}>blog</SmallBlock></li>
        </ul>
      </nav>
    )
  }
}

export default Navigator