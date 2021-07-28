import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <div className="error-area">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-xl-7 col-lg-8 text-center">
            <div className="error">
              <h1>404</h1>
              <h2>OPPS! PAGE NOT FOUND</h2>
              <p>
                Sorry but the page you are looking for does not exist,
                have been removed, name changed or is temporarity
                unavailable.
              </p>

              <Link to={"/"} className="error-btn">
                Back
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
