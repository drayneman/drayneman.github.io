import React from "react"

import Header from "./header"

import style from "./content-layout.module.css"

// layout
export default class ContentLayout extends React.Component {
  render() {
    console.log(this.props.page)
    return(
      <div className={style.patchwork}>
        <Header siteTitle="patchwork" page={this.props.page}></Header>
        <div classname={style.patchworkFlex}>
          <div className={style.patchworkTopSpacerTitle}>
            {this.props.page}
          </div>
          {this.props.children}
          <div className={style.patchworkBottomSpacer}></div>
        </div>
      </div>
    )
  }
}