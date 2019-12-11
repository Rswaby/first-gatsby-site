import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Grids from '../components/subLayout/Grids';
import ProjCard from '../components/ProjCards'

const Data = [
    '<ProjCard Data="Project Cards Go here" /> exercise porch private signal consist cotton held kept pond quietly sheet garden giant carry change breath field main tonight high tide allow article on airplane pond golden softly she stronger gasoline seed tall occur easy protection trace choose firm section positive ran floor handsome minute missing explanation victory',
     'telephone distant has guide exercise glass freedom hit everything rough slide highway standard progress recall doctor fuel too occasionally look but glad become harder swing especially development lion meal living useful seen equator difference determine gas lead upward jungle conversation heat fireplace depth young only image his situation',
    'vertical why hollow spend follow hay time replace spider clean golden constantly have few account themselves smallest fur threw ear again bridge trap tree look held scientific breathe son rule thrown silent climb represent plenty setting breeze increase system card saved where new stepped classroom indeed wagon tent',
    'explain titlepick neighborhood point larger myself draw slabs dirty grain signal situation court temperature horn largest porch stretch stared common condition into sound fierce sea ground slope summer strip sleep walk excitement smallest numeral tell same driver replace stage battle baby wore smell court result bend skin',
    'saw east health nobody neck apple individual voyage sure game means package therefore voice herself image gravity daughter how kids face mark themselves solve',
    'another field harder spite driving known clothing us death five dollar without halfway film shop land drink dust go continent wealth ranch round press',
    'price very gasoline nothing colony rough zoo bank tin take mainly sink nervous though rod cast fourth shore before interest recall clothes battle fight importance month knowledge somebody because bare ahead charge sense nearby poem sing throw failed pet properly sun planning living load sold game corner express',
    'Tyler <ProjCard Data="Project Cards Go here" /> kind slipped blind understanding monkey arrive pleasant fair move wide ask mean nor swam limited winter were ran explore pet apart tired shape large Stokes',
    'plates orbit us seeing partly handle cloud income enjoy recently having lower whispered stronger later pound bring cheese slope one gain certainly tube notice gate eager dawn thread experiment cook quite queen equator adjective pitch are favorite settlers pie angle tent roof key feet broke imagine party he',
    'group mix closer muscle slightly meet brain drew instance seldom thou dry inside forest teach shoe research special stomach bone rod widely sentence noon'
]
const projects = () => (
    <Layout>
        <SEO title="projects" />
        <p>Welcome to projects page</p>
        <Grids>
            {Data.map((info, index) =>
                <ProjCard key={index} Data={info} />
            )}
        </Grids>

        <Link to="/">Go back to the homepage</Link>
    </Layout>
)



export default projects;