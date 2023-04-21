module.exports = () => {
  return `
      title
      body
      image {
          altText
          localFile {
              childImageSharp {
                  gatsbyImageData
              }
          }
      }
      `
}
