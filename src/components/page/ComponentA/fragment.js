module.exports = () => {
  return `
  body
  subheader
  title
  componentItems {
    title
    text
    button
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
