import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const projects = () => (
    <Layout>
        <SEO title="projects" />
        <p>Welcome to projects page</p>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
)



export default projects;