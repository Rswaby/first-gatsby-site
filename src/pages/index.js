import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import { Emojione } from 'react-emoji-render';
import moment from 'moment';
import '../css/index.css';
// import rohan from  '../images/rohan.jpg'
const input = 'Go ahead and have look around. :smiley: :rocket: '
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div className={"center m-top-30"}>
      <h2>Hi, {getGreetingTime(moment())}</h2>
      <h3>I'm Rohan, a</h3>
      <h3>Software Engineer.</h3>
      <p>I am a recent grad from The City College Of New York.</p>
      <p>I have over 5 years of coding experience with Python, Java and JS.</p>
      <p>happen matter closely government whose bring weight card lie off arrow bus would <br />
        alone outside grown flow sun chair around increase religious reader above</p>
      <Emojione svg text={input} />
      <br />
      <Link to="/experience">
        <div className={"button2"}>
          <Emojione svg text={"Experience :briefcase:"} />
        </div>
      </Link>
    </div>
    {/* <img className="rohan" src={rohan} alt="Rohan"></img> */}
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)
const getGreetingTime = (currentTime) => {
  if (!currentTime || !currentTime.isValid()) {
    return 'There';
  }

  const splitAfternoon = 12; // 24hr time to split the afternoon
  const splitEvening = 17; // 24hr time to split the evening
  const currentHour = parseFloat(currentTime.format('HH'));

  if (currentHour >= splitAfternoon && currentHour <= splitEvening) {
    // Between 12 PM and 5PM
    return 'Good afternoon.';
  } else if (currentHour >= splitEvening) {
    // Between 5PM and Midnight
    return 'Good evening.';
  }
  // Between dawn and noon
  return 'Good morning.';
}
export default IndexPage
