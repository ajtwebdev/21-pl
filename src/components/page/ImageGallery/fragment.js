module.exports = () => {
  return `
            body
            title
            subheader
            imageGallery {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
    `
}
