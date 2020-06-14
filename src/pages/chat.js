import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ChatMessageBox from "../components/ChatMessageBox";

const SecondPage = () => (
  <Layout>
    <SEO title="chat" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <ChatMessageBox/>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage