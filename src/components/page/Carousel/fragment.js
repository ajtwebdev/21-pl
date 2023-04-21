module.exports = () => {
  return `
    subheader
    title
    carouselContent {
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
