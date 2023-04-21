import React from "react"
import { Link, graphql } from "gatsby"
import parse from "html-react-parser"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import { ButtonPrimary } from "../components/buttons"
import {
  Container,
  GridTwo,
  HeroBannerPadding,
  Section,
} from "../components/layoutComponents"

const device = {
  md: "48em",
}

const Article = styled.article`
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  box-shadow: var(--shadow-light);
  border-raidus: var(--br);
  display: flex;
  align-items: center;
  img {
    /* width: 100%; */
  }
  @media screen and (max-width: ${device.md}) {
    flex-direction: column;
  }

  & > * {
    width: 100%;
  }

  & > * + * {
    margin-left: 2em;

    @media screen and (max-width: ${device.md}) {
      margin-left: 0;
      margin-top: var(--spacer);
    }
  }
`

const Text = styled.div`
  padding: 2em;

  h2 {
    color: var(--clr-accent);
  }
  @media screen and (max-width: 400px) {
    h2 {
      font-size: var(--fs-3);
    }
  }
`

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`

export const StyledImg = styled(GatsbyImage)`
  // max-width: 600px;
  height: 100%;
`

// Banner
const BannerGrid = styled.div`
  display: grid;
  grid-template-rows: auto 4em auto;
`

const BannerWrapper = styled.div`
  grid-row: 1 / span 2;
  grid-column: 1 / -1;
  z-index: 1;
  background: url("../../images/blog-banner.jpg"), rgba(0, 0, 0, 0.7);
  background-blend-mode: overlay;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 4em 0;

  display: grid;
  place-items: center;

  min-height: 80vh;
  height: 100%;

  @media screen and (max-width: 26em) {
    min-height: 100vh;
    height: 100%;
  }
`

const BannerText = styled.div`
  max-width: 140ch;
  width: 100%;
  color: var(--txt-light);
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`

const BannerBottomText = styled.div`
  grid-row: 2 / -1;
  grid-column: 1 / -1;
  z-index: 2;

  background: var(--clr-dark);
  color: var(--txt-light);
  padding: 2em;
  width: 80%;
`

const BlogIndex = ({
  data,
  pageContext: { nextPagePath, previousPagePath },
}) => {
  const posts = data.allWpPost.nodes
  const featuredImg = {
    data: posts.featuredImage?.node?.localFile?.childImageSharp
      ?.gatsbyImageData,
    alt: posts.featuredImage?.node?.alt || ``,
  }

  if (!posts.length) {
    return (
      <Layout>
        <SEO
          title="Landscaping Blog - Insights From Calgary's Landscaping Company"
          description="With more than two decades of experience, you can trust Project Landscape to provide you with the best landscaping advice."
        />
        <p>
          No blog posts found. Add posts to your WordPress site and they'll
          appear here!
        </p>
      </Layout>
    )
  }
  return (
    <Layout>
      <SEO
        title="Landscaping Blog - Insights From Calgary's Landscaping Company"
        description="With more than two decades of experience, you can trust Project Landscape to provide you with the best landscaping advice."
      />
      <div>
        <HeroBannerPadding />
        <BannerGrid>
          <BannerWrapper>
            <Container className="spacing">
              <BannerText className="spacing">
                <div className="">
                  <h1 className="title">
                    landscape installation and design advice
                  </h1>
                </div>
                <ButtonPrimary to="/contact">get free estimate</ButtonPrimary>
              </BannerText>
            </Container>
          </BannerWrapper>
          <BannerBottomText>
            <Container>
              <p>
                At Project Landscape Ltd., our premier landscaping services will
                increase the value and overall aesthetic of your home. We use
                quality brands, and unique products to help keep your lawn
                healthy, and your home looking incredible. This means an overall
                better living experience for you and your family.
              </p>
            </Container>
          </BannerBottomText>
        </BannerGrid>
      </div>
      <Section>
        <Container>
          <ol className="spacing-lg" style={{ listStyle: `none` }}>
            {posts.map(post => {
              const title = post.title

              return (
                <li key={post.uri}>
                  <Article
                    className="post-list-item"
                    itemScope
                    itemType="http://schema.org/Article"
                  >
                    {post.featuredImage ? (
                      <StyledImg
                        className="stretch"
                        image={
                          post.featuredImage.node.localFile.childImageSharp
                            .gatsbyImageData
                        }
                        alt="Project landscaping blog"
                      />
                    ) : null}

                    <Text>
                      <header>
                        <h2 className="subheader upper">
                          <Link
                            className="spacing accent"
                            to={post.uri}
                            itemProp="url"
                          >
                            <span itemProp="title">{parse(title)}</span>
                          </Link>
                        </h2>
                        <small>{post.date}</small>
                      </header>
                      {/* <section itemProp="description">
                          {parse(post.excerpt)}
                        </section> */}
                    </Text>
                  </Article>
                </li>
              )
            })}
          </ol>
          <Flex>
            {previousPagePath && (
              <>
                <Link to={previousPagePath}>Previous page</Link>
                <br />
              </>
            )}
            {nextPagePath && <Link to={nextPagePath}>Next page</Link>}
          </Flex>
        </Container>
      </Section>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query WordPressPostArchive($offset: Int!, $postsPerPage: Int!) {
    allWpPost(
      sort: { fields: [date], order: DESC }
      limit: $postsPerPage
      skip: $offset
    ) {
      nodes {
        excerpt
        uri
        date(formatString: "MMMM DD, YYYY")
        title
        excerpt
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`
