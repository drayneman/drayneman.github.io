import React from "react"
import SmallBlock from "./smallblock"
import COLORS from "./colors"

class Navigator extends React.Component {
  constructor(props) {
    super(props)
    this.collapseWithScroll = this.collapseWithScroll.bind(this)
    this.state = {paddingTop: 100}
  }

  collapseWithScroll() {
    let topDistance = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
    if (topDistance < 90) {
      this.setState({paddingTop: 90 - topDistance})
      console.log(this.state.paddingTop)
    }

    else if (topDistance > 90 && this.state.paddingTop !== 0) {
      this.setState({paddingTop: 10})
      console.log(this.state.paddingTop)
    }
  }

  render() {
    const paddingTop = this.state.paddingTop

    return (
      <nav className={this.props.className}>
        <ul>
          <li><SmallBlock color={COLORS.main} to="/" scrollAction={this.collapseWithScroll} paddingTop={paddingTop}>Home</SmallBlock></li>
          <li><SmallBlock color={COLORS.c1} to="/about/" scrollAction={this.collapseWithScroll} paddingTop={paddingTop}>About</SmallBlock></li>
          <li><SmallBlock color={COLORS.c2} to="/contact/" scrollAction={this.collapseWithScroll} paddingTop={paddingTop}>Contact</SmallBlock></li>
          <li><SmallBlock color={COLORS.c3} to="/blog/" scrollAction={this.collapseWithScroll} paddingTop={paddingTop}>Blog</SmallBlock></li>
        </ul>
      </nav>
    )
  }
}

export default Navigator