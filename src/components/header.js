import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.css";
import { Component } from "react"
// const handleOnclick = () => {
//   console.log("clicked")
// }

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    }
  }

  handleClick = () => {
    this.setState({
      active: !this.state.active
    })
  }
  render() {
    const { siteTitle } = this.props;
    const { active } = this.state;
    console.log(active);
    
    return (
      <nav className="navbar">
        <span className="navbar-toggle" id="js-navbar-toggle">
          <i onClick={this.handleClick} className="fas fa-bars"></i>
        </span>
        <Link to="/" className="logo">{siteTitle}</Link>
        <ul className={`main-nav ${active ? "active" : ""}`} id="js-menu">
          <li>
            <Link to="#" className="nav-links">Experience</Link>
          </li>
          <li>
            <Link to="#" className="nav-links">Projects</Link>
          </li>
          <li>
            <Link to="#" className="nav-links">Contacts</Link>
          </li>
          <li>
            <Link to="#" className="nav-links">Blog</Link>
          </li>
        </ul>
      </nav>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
