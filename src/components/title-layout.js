import React from 'react'

import Header from './header'

import style from './patchwork.module.css'

export default class TitleLayout extends React.Component {
  render() {
    return (
      <div className={style.patchwork}>
        <Header page={this.props.page}/>
        <div className={style.patchworkFlex}>
          {this.props.children}
        </div>
      </div>
    )
  }
}