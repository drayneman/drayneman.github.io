import React from "react"

import style from "./title.module.css"

export default class Title extends React.Component {
  render() {
    return (
      <div className={style.titleHolder}>
        <div className={style.title}>
          patchwork
        </div>
        <p className={style.subtitle}>
          a show & tell by tntokum
        </p>
      </div>
    )
  }
}