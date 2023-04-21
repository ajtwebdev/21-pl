import React from "react"
import Banner from "../components/banners/banner"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ImageRight from "../components/sections/imageRight"
import CtaMain from "../components/cta/ctaMain"
import ImageLeft from "../components/sections/imageLeft"

import BannerImg from "../images/banner-image-2.jpg"
import ProductsImg from "../images/ph.jpg"
import Aeration from "../images/resources/aeration-resource.jpg"
import Irrigation from "../images/resources/irrigation-resource.jpg"
import Lighting from "../images/resources/lighting-resource.jpg"
import Mosquitos from "../images/resources/mosquitos-resource.jpg"
import Patio from "../images/resources/patio-resource.jpg"
import Turf from "../images/resources/turf-resource.jpg"
import Watering from "../images/resources/watering-resource.jpg"

export default function FreeResources() {
  return (
    <Layout>
      <SEO
        title="Free Resources"
        description="Project Landscape provides free downloadable resources for customers who want to improve their outdoor living space!"
      />
      <Banner
        img={BannerImg}
        title="free landscaping and outdoor living resources"
        description="At Project Landscape Ltd., our premier outdoor landscaping services will increase the value and overall aesthetic of your home. We use quality brands, and unique products to help keep your lawn healthy, and your home looking incredible. This means an overall better living experience for you and your family."
      />
      {/* <ImageRight
        title="free landscaping and outdoor living resources"
        body="Project Landscape has gone above and beyond by creating helpful tips for landscaping guides and tip sheets for Calgary home owners."
        to="/contact"
        button="get in touch with us"
        img={ProductsImg}
        alt="calgary landscape materials"
      />
      <CtaMain
        subheader="your personal paradise starts here"
        title="get started on your outdoor oasis"
      />
      <ImageLeft
        title="aeration"
        body="There are a number of reasons why core aeration should be done in your yard at least one to twice per season depending on your soil condition. Click here to learn more!"
        to="/contact"
        button="request free download!"
        img={Aeration}
        alt="calgary landscape materials"
      />
      <ImageRight
        title="irrigation"
        body="Hidden sprinklers allow you to water your gardens and lawn without having to drag hoses around the yard. A network of irrigation tubes is strategically placed around the yard to keep your gardens and grass properly watered."
        to="/contact"
        button="request free download!"
        img={Irrigation}
        alt="calgary landscape materials"
      />
      <ImageLeft
        title="landscape Lighting"
        body="Did you know that Calgary homes generally sell for more if they have landscape lighting? Calgary realtors recognize the many benefits of outdoor lighting when showing different homes, giving you the right to set a higher asking price if your home boasts this feature."
        to="/contact"
        button="request free download!"
        img={Lighting}
        alt="calgary landscape materials"
      />
      <ImageRight
        title="mosquitos"
        body="Canada has a reputation for its mosquitoes, with Calgary being second on the list for top Canadian cities with the greatest number of mosquitoes. This doesn't help our short-lived summer season. Nobody wants to spend their summer indoors or constantly having to spray yourself every 20 minutes!"
        to="/contact"
        button="request free download!"
        img={Mosquitos}
        alt="calgary landscape materials"
      />
      <ImageLeft
        title="Patio sub-base"
        body="Not all patios are equal! All of our patios are installed over the required and recommended sub-base. Make sure you are fully educated on the manufacturer’s recommended installation methods."
        to="/contact"
        button="request free download!"
        img={Patio}
        alt="calgary landscape materials"
      />
      <ImageRight
        title="artificial Turf"
        body="Artificial turf is your solution for a beautiful, trouble-free lawn. With artificial turf, you can solve common lawn problems with a realistic-looking, synthetic lawn."
        to="/contact"
        button="request free download!"
        img={Turf}
        alt="calgary landscape materials"
      />
      <ImageLeft
        title="watering tips"
        body="Watering your grass on hot days will do more harm than good. The water will just evaporate before it even hits the roots! The water also attracts the sun, leading to even more watering woes."
        to="/contact"
        button="request free download!"
        img={Watering}
        alt="calgary landscape materials"
      /> */}
    </Layout>
  )
}
