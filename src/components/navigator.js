import React from "react"
import SmallBlock from "./smallblock"
import COLOR from "./colors"

class Navigator extends React.Component {
  constructor(props) {
    super(props)
    this.collapseWithScroll = this.collapseWithScroll.bind(this)
    this.state = {paddingTop: 100}
  }

  collapseWithScroll() {
    let topDistance = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
    if (topDistance < 100) {
      this.setState({paddingTop: 100 - topDistance})
      console.log(this.state.paddingTop)
    }

    else if (topDistance > 100 && this.state.paddingTop !== topDistance) {
      this.setState({paddingTop: 0})
    }
  }

  render() {
    const paddingTop = this.state.paddingTop

    return (
      <nav className={this.props.className}>
        <ul>
          <li><SmallBlock color={COLOR.main} to="/" scrollAction={this.collapseWithScroll} paddingTop={paddingTop}>Home</SmallBlock></li>
          <li><SmallBlock color={COLOR.c1} to="/blog/" scrollAction={this.collapseWithScroll} paddingTop={paddingTop}>Blog</SmallBlock></li>
          <li><SmallBlock color={COLOR.c2} to="/about/" scrollAction={this.collapseWithScroll} paddingTop={paddingTop}>About</SmallBlock></li>
          <li><SmallBlock color={COLOR.c3} to="/contact/" scrollAction={this.collapseWithScroll} paddingTop={paddingTop}>Contact</SmallBlock></li>
        </ul>
      </nav>
    )
  }
}

export default Navigator