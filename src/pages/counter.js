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
                    <p>current Counter: {this.state.count}</p>
                    <button onClick={
                        () => this.setState({
                            count: this.state.count + 1
                        })
                    }>
                        plus
                </button>
                    <button onClick={
                        () => this.setState({
                            count: this.state.count - 1
                        })
                    }>minus</button>
                    <br />
                    <Link to="/">home</Link>
                </div>
            </Layout>
        )
    }
}
