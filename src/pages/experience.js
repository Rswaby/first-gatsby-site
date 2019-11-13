import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const experience = () => (
    <Layout>
        <SEO title="experience" />
        <h1>Hi from the experience page</h1>
        <p>Welcome to experience</p>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
)



export default experience;