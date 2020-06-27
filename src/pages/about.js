import React from "react"
import COLORS from "../components/colors"

import { Link } from 'gatsby'

import ContentLayout from "../components/content-layout"
import Content from "../components/content"
import LinkExternal from '../components/link-external'

export default class About extends React.Component {
  render() {
    return (
      <ContentLayout page='about' color={COLORS.c1}>
        <Content>
          <h1>welcome to my house</h1>
          <p>
            I'm Tyler/<code>tntokum</code>. Thanks for stopping by.
          </p>
          <br />
          <p>
            <code style={{fontFamily: 'IBM Plex Sans Thin', fontSize: '1rem', fontWeight: 'bold'}}>patchwork</code> is
            a site built by me, using <LinkExternal to='https://reactjs.org/'>React</LinkExternal> and <LinkExternal to='https://www.gatsbyjs.org/'>Gatsby</LinkExternal> as
            the main frameworks for content, building, and deploying.
            Fonts were taken from <LinkExternal to='https://fonts.google.com/'>Google Fonts</LinkExternal>.
            <br/>
            I did the color palette, too, which is very similar to building a website in that I don't know what I'm doing.
            Right now, they're are kind of beach-y. This is a reference to the fact that I like beaches.
            {/* <br/>
             */}
          </p>
          <br />
          <p>
            This site serves a few broad purposes:
            <ul>
              <li>My resume can reference this place. This is either a great thing or a really bad thing depending on what I put on here.</li>
              <li>
                It helps teach me a little about modern webdev, since this is my first real foray into 
                HTML/CSS/JavaScript and all these (by which I mean 2) confusing newfangled frameworks.
              </li>
              <li>
                For some reason, I always wanted a slice of the Internet for me, no matter how small.
                See this <LinkExternal to='https://en.wikipedia.org/wiki/Territory_(animal)'>relevant Wikipedia article</LinkExternal>.
              </li>
              <li>
                I could even use this as a blog of sorts. However, my attention span has a habit of rounding to 0 seconds, so
                I probably wouldn't even
              </li>
            </ul>
          </p>
          <br />
          <p>
            Hit me up on the <Link to='/contact/'>contact</Link> page.
          </p>
          <br />
          <p>
            Fun facts about me:
            <ul>
              <li>
                I know more coding languages than real languages.
                <ul>
                  <li>
                    I know only one real language (this is up for debate).
                    <ul>
                      <li>
                        I may or may not know only two coding languages.
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                I am allergic to dogs, and this makes me sad.
                <ul>
                  <li>
                    Dogs are not allergic to me. Thank goodness.
                  </li>
                </ul>
              </li>
              <li>
                My guitar has six strings.
                <ul>
                  <li>
                    Guess how many fingers I have.
                  </li>
                </ul>
              </li>
              <li>

              </li>
            </ul>
          </p>
        </Content>
      </ContentLayout>
    )
  }
}