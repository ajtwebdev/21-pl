import React from "react"
import Banner from "../components/banners/banner"
import FormContact from "../components/forms/formContact"
import Layout from "../components/layout"
import PortfolioBanner from "../components/portfolioBanner"
import SEO from "../components/seo"

import BannerImg from "../images/banner-image-1.png"

export default function Contact() {
  return (
    <Layout>
      <SEO
        title="Contact Us - Call Your Professional Landscapers in Calgary"
        description="Project Landscape is happy to offer year-round landscaping services, from lawn care to snow removal. Contact us today to schedule your services."
      />
      <Banner
        img={BannerImg}
        title="GREAT SERVICE, BEAUTIFUL LANDSCAPES, WITH A TEAM OF EXPERTS FOCUSED ON YOU"
        subheader="contact us here"
        description="At Project Landscape Ltd., our premier outdoor landscaping services will increase the value and overall aesthetic of your home. We use quality brands, and unique products to help keep your lawn healthy, and your home looking incredible. This means an overall better living experience for you and your family."
      />
      <FormContact title="Contact" />
      <PortfolioBanner />
    </Layout>
  )
}
