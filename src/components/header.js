import React from "react"
import SmallBlock from "./smallblock"

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
import COLOR from "./colors"

export default function Header({siteTitle}) {
  return(
    <header className={style.header}>
      {/* break into own file at some point */}
      <nav className={style.navigator}>
        <ul>
          <li><SmallBlock color={COLOR.main} to="/">Home</SmallBlock></li>
          <li><SmallBlock color={COLOR.c1} to="/blog/">Blog</SmallBlock></li>
          <li><SmallBlock color={COLOR.c2} to="/about/">About</SmallBlock></li>
          <li><SmallBlock color={COLOR.c3} to="/contact/">Contact</SmallBlock></li>
        </ul>
      </nav>
    </header>
  )
}
// export default Header
