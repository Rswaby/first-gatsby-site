import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Grids from '../components/subLayout/Grids';
import ProjCard from '../components/ProjCards'


const projects = () => (
    <Layout>
        <SEO title="projects" />
        <p>Welcome to projects page</p>
        <Grids>
            <ProjCard Data="Project Cards Go here"/>
        </Grids>

        <Link to="/">Go back to the homepage</Link>
    </Layout>
)



export default projects;