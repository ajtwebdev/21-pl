// import { graphql } from "gatsby"
// import React from "react"
// import Layout from "../components/layout"
// import SEO from "../components/seo"
// import Banner from "../components/banners/banner"

// export default function ResidentialServiceTemplate({ data }) {
//   const { bannerTitle, bannerDescription, bannerImage } =
//     data.wpResidentialService.banner
//   return (
//     <Layout>
//       <SEO title="" description="" />
//       <Banner
//         subheader="set up subheader ACF"
//         title={bannerTitle}
//         description={bannerDescription}
//         img={bannerImage.localFile.childImageSharp.fluid.src}
//       />
//     </Layout>
//   )
// }

// export const query = graphql`
//   query ResidentialPage($slug: String) {
//     wpResidentialService(slug: { eq: $slug }) {
//       banner {
//         bannerTitle
//         bannerDescription
//         bannerImage {
//           altText
//           localFile {
//             childImageSharp {
//               gatsbyImageData
//               fluid {
//                 src
//               }
//             }
//           }
//         }
//       }
//       serviceLayout1 {
//         flexibleContent {
//           ... on WpResidentialService_Servicelayout1_FlexibleContent_ImageRightOfText {
//             title
//             subheader
//             text
//             image {
//               altText
//               localFile {
//                 childImageSharp {
//                   gatsbyImageData
//                 }
//               }
//             }
//           }
//           ... on WpResidentialService_Servicelayout1_FlexibleContent_ImageLeftOfText {
//             subheader
//             title
//             text
//             image {
//               altText
//               localFile {
//                 childImageSharp {
//                   gatsbyImageData
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `
