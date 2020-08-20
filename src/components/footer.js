import React from "react"
import PropTypes from "prop-types"

const Footer = () => {
  return (
    <div>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </div>
  )
}

Footer.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Footer
