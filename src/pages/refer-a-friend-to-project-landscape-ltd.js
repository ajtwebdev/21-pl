import React from "react"
import Banner from "../components/banners/banner"
import Layout from "../components/layout"
import PortfolioBanner from "../components/portfolioBanner"
import SEO from "../components/seo"
import ImageRight from "../components/sections/imageRight"
import CtaMain from "../components/cta/ctaMain"
import ImageLeft from "../components/sections/imageLeft"

import BannerImg from "../images/banner-image-3.jpg"
import ImageTop from "../images/ph.jpg"
import WarrantyForm from "../components/forms/warrantForm"
import ReferForm from "../components/forms/referForm"
import StepsToRefer from "../components/sections/stepsToRefer"
import MainTestimonials from "../components/testimonials/mainTestimonials"

export default function ReferFriend() {
  return (
    <Layout>
      <SEO
        title="Warranty Request"
        description="Refer a friend to project landscape and get $100 off!"
      />
      <Banner
        img={BannerImg}
        title="invite your friends or family"
        subheader=""
        description="At Project Landscape Ltd., our premier outdoor landscaping services will increase the value and overall aesthetic of your home. We use quality brands, and unique products to help keep your lawn healthy, and your home looking incredible. This means an overall better living experience for you and your family."
      />
      <StepsToRefer />
      <ReferForm />
      <MainTestimonials />
    </Layout>
  )
}
