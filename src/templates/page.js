// See .cache/page-templates after running dev/build
// to understand how this file ends up looking

import React from "react"
import { graphql } from "gatsby"
import Layout from "../../src/components/layout"
import SEO from "../../src/components/seo"
// import { useSeoQuery } from "../hooks/useSeoQuery"

// ### COMPONENT IMPORTS ### DO NOT MODIFY OR MOVE THIS COMMENT ###

const PageTemplate = pageProps => {
  // const seoData = useSeoQuery()
  let components
  // ### COMPONENTS VARIABLE ### DO NOT MODIFY OR MOVE THIS COMMENT ###
  components = components.map(component => {
    return {
      name: component.__typename.split("_").pop(),
      data: component,
    }
  })
  return (
    <>
      <Layout>
        <SEO title="title" description="description" />
        {components.map((component, index) => {
          // ### COMPONENT RENDERING ### DO NOT MODIFY OR MOVE THIS COMMENT ###
          return <div>Error: The component {component.name} was not found</div>
        })}
      </Layout>
    </>
  )
}

export default PageTemplate

// ### PAGE QUERY ### DO NOT MODIFY OR MOVE THIS COMMENT ###

// the below gave errors
// export const query = graphql`
//   query PageQuery($id: String!) {
//     wpPage(id: { eq: $id }) {
//       title
//     }
//   }
// `
