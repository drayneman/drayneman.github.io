import React from "react"

import Header from "./header"

import style from "./patchwork.module.css"

// layout
export default class ContentLayout extends React.Component {
  render() {
    return(
      <div className={style.patchwork}>
        <Header siteTitle="patchwork" page={this.props.page}></Header>
        <div classname={style.patchworkFlex}>
          <div className={style.patchworkTopSpacerTitle}>
            {this.props.page}
          </div>
          <div className={style.contentWrapper} style={{backgroundColor: this.props.color}} />
          {this.props.children}
          <div className={style.patchworkBottomSpacer}></div>
        </div>
      </div>
    )
  }
}