import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import ExpCard from "../components/ExpCard"
import SEO from "../components/seo"

const experience = () => (
    <Layout>
        <SEO title="experience" />
        <ExpCard ExpData={"ExpCard Data"}/>
        <p>Welcome to experience page</p>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
)



export default experience;