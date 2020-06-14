import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.css";
import { Component } from "react"


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

    return (
      <nav className="navbar">
        <span className="navbar-toggle" id="js-navbar-toggle">
          <i onClick={this.handleClick} 
             onKeyDown={this.handleClick} 
             role="button" 
             className="fas fa-bars">
             tabIndex={1}
             Menu
          </i>
        </span>
        <Link to="/" className="logo">{siteTitle}</Link>
        <ul className={`main-nav ${active ? "active" : ""}`} id="js-menu">
          <li>
            <Link to="/" activeClassName="nav-links--active" className="nav-links">Home</Link>
          </li>
          <li>
            <Link to="/experience/" activeClassName="nav-links--active" className="nav-links">Experience</Link>
          </li>
          <li>
            <Link to="/projects/" activeClassName="nav-links--active" className="nav-links">Projects</Link>
          </li>
          <li>
            <Link to="/chat/" activeClassName="nav-links--active" className="nav-links">chat</Link>
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
