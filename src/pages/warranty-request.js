import React from "react"
import Banner from "../components/banners/banner"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ImageLeft from "../components/sections/imageLeft"

import BannerImg from "../images/banner-image-4.jpg"
import ImageTop from "../images/banner-image-1.png"
import WarrantyForm from "../components/forms/warrantForm"

export default function WarrantyRequest() {
  return (
    <Layout>
      <SEO
        title="Warranty Request"
        description="Here you can request your warranty."
      />
      <Banner
        img={BannerImg}
        title="warranty request with project landscape"
        description="At Project Landscape Ltd., our premier seat walls and pillars for landscaping services will increase the value and overall aesthetic of your home. We use quality brands, and unique products to help keep your lawn healthy, and your home looking incredible. This means an overall better living experience for you and your family."
      />
      {/* <ImageLeft
        title="warranty"
        body="As Calgary's largest residential landscaping company, we proudly stand behind out installation services. Please fill out our landscaping warranty form below and we will be in touch with you shortly."
        img={ImageTop}
        alt="calgary landscape materials"
        to="/contact"
        button="get more help from us"
      /> */}
      <WarrantyForm />
    </Layout>
  )
}
