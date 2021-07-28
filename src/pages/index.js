import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import "../assets/scss/styles.scss"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="under-construction">
      <div className="stars" aria-hidden="true"></div>
      <div className="starts2" aria-hidden="true"></div>
      <div className="stars3" aria-hidden="true"></div>
      <main className="main">
        <section className="contact">
          <h1 className="contact-title">Mar De Urano</h1>
          <h2 className="contact-sub-title">Site Under Construction</h2>
        </section>
      </main>
    </div>
  </Layout>
)

export default IndexPage
