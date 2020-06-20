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

export default function Header({siteTitle}) {
  return(
    <div className={style.wrapper}>
      <SmallBlock color="red">Home</SmallBlock>
      <SmallBlock color="blue">About</SmallBlock>
      <SmallBlock color="yellow">Blog</SmallBlock>
    </div>
  )
}
// export default Header
