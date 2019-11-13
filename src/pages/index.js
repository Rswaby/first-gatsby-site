import React from "react";
// import Link from "gatsby-link";
import Layout from "../layouts";
import Navbar from "../components/navbar";
import AniLink from "gatsby-plugin-transition-link/AniLink";
export default () =>
    <div>
        <Navbar />
        <Layout>
            <div>
                <header>Hello world!</header>
                <AniLink swipe to="/somepage"> some page </AniLink>
                <br />
                <AniLink paintDrip to="/otherfiles/otherfiles">otherfile</AniLink>
                <br />
                <AniLink cover to="/counter">counter</AniLink>
            </div>
        </Layout>
    </div>