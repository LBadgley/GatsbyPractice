import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const MainImageStyle = styled.div`
  max-width: 300px;
  margin-bottom: 1.45rem;
`


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome To My Page</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <MainImageStyle >
      <Image />
    </MainImageStyle>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
 
