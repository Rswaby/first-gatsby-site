import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const experience = () => (
    <Layout>
        <SEO title="experience" />
        <p>Welcome to experience page</p>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
)



export default experience;