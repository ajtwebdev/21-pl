import React from "react"
import SEO from "./seo"
import HeaderBasic from "./headers/headerBasic"
import Footer from "./footers/footer"

import FinanceBanner from "./financeBanner"
import ContactBanner from "./contactBanner"

export default function Layout({ children }) {
  return (
    <>
      <SEO />
      <HeaderBasic />
      <main>{children}</main>
      <FinanceBanner />
      <ContactBanner />
      <Footer />
    </>
  )
}
