module.exports = () => {
  return `
  subheader
  title
  content {
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
