module.exports = () => {
  return `
    title
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
