module.exports = () => {
  return `
    serviceContent {
      title
      link
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
