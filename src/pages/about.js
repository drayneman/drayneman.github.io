import React from "react"
import COLORS from "../components/colors"

import {Link} from "gatsby"

import ContentLayout from "../components/content-layout"
import Content from "../components/content"

class About extends React.Component {
  render() {
    return (
      <ContentLayout page='about' color={COLORS.c1}>
        <Content>
          <h1>welcome to my house</h1>
          <p>
            I'm Tyler/<code>tntokum</code>. Thanks for stopping by.
          </p>
          <br/>
          <p>
            <p>
              <code style={{fontFamily: 'IBM Plex Sans Thin', fontSize: '1rem', fontWeight: 'bold'}}>patchwork</code> is site built by me, for me, using React and Gatsby 
            </p>
          </p>
        </Content>
      </ContentLayout>
    )
  }
}

export default About