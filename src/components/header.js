import React from "react"
import Navigator from "./navigator"

// const Header = ({ siteTitle }) => (
//   <header
//     style={{
//       background: `rebeccapurple`,
//       marginBottom: `1.45rem`,
//     }}
//   >
//     <div
//       style={{
//         margin: `0 auto`,
//         maxWidth: 960,
//         padding: `1.45rem 1.0875rem`,
//       }}
//     >
//       <h1 style={{ margin: 0 }}>
//         <Link
//           to="/"
//           style={{
//             color: `white`,
//             textDecoration: `none`,
//           }}
//         >
//           {siteTitle}
//         </Link>
//       </h1>
//     </div>
//   </header>
// )

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

import styleHeader from "./header.module.css"
import styleNavigator from "./navigator.module.css"

export default class Header extends React.Component {
  render() {
    return(
      <header className={styleHeader.header}>
        <Navigator page={this.props.page} className={styleNavigator.navigator} />
      </header>
    )
  }
}
// export default Header
