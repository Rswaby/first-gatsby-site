import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import ExpCard from "../components/ExpCard"
import SEO from "../components/seo"
import Grids from '../components/subLayout/Grids';
import JSONData from "../data/json-data/Exp-page.json";

const experience = () => (
    <Layout>
        <SEO title="experience" />
        <h3 className="mtop20">{JSONData.title}</h3>
        <Grids>
            {
                JSONData.content.map((data,d) => <ExpCard key={d.toString()} ExpData={data} />)
            }
        </Grids>
    </Layout>
)



export default experience;