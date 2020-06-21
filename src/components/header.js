import React from "react"
import SmallBlock from "./smallblock"
import { Link } from "gatsby"

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

import style from "./header.module.css"

export default function Header({siteTitle}) {
  return(
    <div className={style.wrapper}>
      <SmallBlock color="white"><Link to="/">Patchwork</Link></SmallBlock>
      <SmallBlock color="yellow"><Link to="/">Blog</Link></SmallBlock>
      <SmallBlock color="green"><Link to="/about/">About</Link></SmallBlock>
      <SmallBlock color="red"><Link to="/">Contact</Link></SmallBlock>
    </div>
  )
}
// export default Header
