import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import { Emojione } from 'react-emoji-render';
import moment from 'moment';
import '../css/index.css';
const input = 'Go ahead and have look around. :smiley: :rocket: '
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div className={"center m-top-30"}>
      <h1>Hi {getGreetingTime(moment())}</h1>
      <h2>I'm Rohan, a</h2>
      <h2>Software Engineer.</h2>
      <p>I am a recent grad from The City College Of New York.</p>
      <p>I have over 5 years of coding experience with Python, Java and JS.</p>
      <Emojione svg text={input}  />
    </div>
    {/* <div>
      <Image />
    </div> */}
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
