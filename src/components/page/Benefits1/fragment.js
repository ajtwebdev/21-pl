module.exports = () => {
  return `
  subheader
  title
  benefitContent {
    title
    description
    image {
      altText
      localFile {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
  `
}
