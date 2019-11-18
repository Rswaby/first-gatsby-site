import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import ExpCard from "../components/ExpCard"
import SEO from "../components/seo"
import Grids from '../components/subLayout/Grids';
const data = [1,2,3,5,7,9]
const experience = () => (
    <Layout>
        <SEO title="experience" />
        <Grids>
            {
                data.map((d) =><ExpCard ExpData={d+" mathematics aid deer machine pink fighting kids thou topic her thousand familiar pipe fourth pick for does palace trail ask understanding human torn situation feet brother central unit rule lift blow color pie smell soft shorter still basic spoken silly count jar buried right somehow saddle nearest spider"} />)
            }
            {/* <Link to="/">Go back to the homepage</Link> */}
        </Grids>
    </Layout>
)



export default experience;