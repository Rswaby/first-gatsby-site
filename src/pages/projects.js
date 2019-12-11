import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Grids from '../components/subLayout/Grids';
import ProjCard from '../components/ProjCards'

const Data = [
    'explain title ground slope summer strip sleep walk excitement smallest numeral tell same driver replace stage battle baby wore smell court result bend skin',
    'saw east health nobody neck apple individual voyage sure game means package therefore voice herself image gravity daughter how kids face mark themselves solve',
    'another field harder spite driving known clothing us death five dollar without halfway film shop land drink dust go continent wealth ranch round press',
    'price very knowledge somebody because bare ahead charge sense nearby poem sing throw failed pet properly sun planning living load sold game corner express',
    'Tyler Stokes',
    'plates orbit dawn thread experiment cook quite queen equator adjective pitch are favorite settlers pie angle tent roof key feet broke imagine party he',
    'group mix closer muscle slightly meet brain drew instance seldom thou dry inside forest teach shoe research special stomach bone rod widely sentence noon'
]
const projects = () => (
    <Layout>
        <SEO title="projects" />
        <p>Welcome to projects page</p>
        <Grids>
            <ProjCard Data="Project Cards Go here" />
        </Grids>

        <Link to="/">Go back to the homepage</Link>
    </Layout>
)



export default projects;