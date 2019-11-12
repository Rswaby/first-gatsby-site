import React, { Component } from "react"
import Link from "gatsby-link"
import Layout from "../layouts"
export default class counter extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }
    render() {
        return (
            <Layout>
                <div>
                    <header>Counter Component</header>

                    <Link to="/">home</Link>
                </div>
            </Layout>
        )
    }
}
