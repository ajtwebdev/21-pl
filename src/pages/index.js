import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MainServicesLinks from "../components/services/mainServicesLinks"
import AllServicesBanner from "../components/services/allServicesBanner"

import ShowroomSection from "../components/sections/showroomSection"
import MainVideo from "../components/sections/mainVideo"
import Why from "../components/why"
import MainTrends from "../components/trends/mainTrends"
import FaqFeatured from "../components/faq/faqFeatured"
import Ebook from "../components/ebook"

import MainTestimonials from "../components/testimonials/mainTestimonials"
import HeroSlider from "../components/heros/heroSlider"
import ProductsImg from "../components/sections/productsImg"

export default function index() {
  return (
    <Layout>
      <SEO title="home " description=" " />
      {/* <HeroSlider />
      <MainServicesLinks />
      <AllServicesBanner />
      <ProductsImg
        subheader=""
        title="get the highest quality calgary landscape materials"
        body="Your home is your pride and joy, and we are the professionals who can help you maintain its outdoor beauty. Increasing your property's value and making your yard the envy of the block, Project Landscape ensures that your landscaping needs are met. From irrigation seasonal clean-up, construction and more services, we are the Calgary Landscaping experts you can trust for all your residential landscaping needs."
        to="/calgary-landscaping-materials"
        button="discover products"
      />
      <ShowroomSection />
      <MainVideo />
      <MainTrends />
      <Why />
      <Ebook title="download our landscaping ebook" href="" />
      <MainTestimonials />
      <FaqFeatured /> */}
    </Layout>
  )
}
