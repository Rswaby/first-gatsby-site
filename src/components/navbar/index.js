import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink";

export default () =>
    <nav className={"nav"}>
        <div className={"__title"}>Rohan Swaby</div>
        <div className={"list"}>
            <AniLink swipe to="/somepage" className="__item">Services</AniLink>
            <AniLink className="__item">About Us</AniLink>
            <AniLink className="__item">Blog</AniLink>
        </div>

    </nav>