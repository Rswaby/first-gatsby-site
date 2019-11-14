import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ReactMarkdown from 'react-markdown';
const input = 'community cabin least older simplest public prepare can feathers dull chose development date smaller roar pot diameter baseball replace search doubt floating airplane cattle'
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <ReactMarkdown source={input}/>
    <div>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
