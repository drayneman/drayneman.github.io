import React from "react"

import TitleLayout from "../components/title-layout"

import "../assets/IBMPlexSans-Thin.woff2"
import Title from "../components/title.js"

class Home extends React.Component {
  render() {
    return (
      <TitleLayout page='home'>
        <Title/>
      </TitleLayout>
    )
  }
}

export default Home
