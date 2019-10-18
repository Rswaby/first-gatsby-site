import React from "react";
import Link from "gatsby-link";
import Layout from "../layouts";
export default () =>
    <Layout>
        <div>
            <header>Hello world!</header>
            <Link to="/somepage"> some page </Link>
            <br />
            <Link to="/otherfiles/otherfiles">otherfile</Link>
            <br />
            <Link to="/counter">counter</Link>
        </div>
    </Layout>
