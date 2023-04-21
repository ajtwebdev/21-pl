import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Section, Container } from "../../layoutComponents"
import { ButtonPrimary } from "../../buttons"

const Text = styled.div`
  text-align: center;
  max-width: 140ch;
  width: 100%;
  margin-right: auto;
  margin-left: auto;

  p {
    text-align: left;
    margin-left: auto;
    margin-right: auto;
    max-width: 90ch;
    ul {
      padding: 2em;
      border: 1px solid var(--clr-tan);
      border-radius: var(--br);
      width: 75%;
      li {
        margin-left: auto;
        margin-right: auto;
      }
    }
  }
`

const StyledImg = styled(GatsbyImage)`
  width: 80%;
  max-height: 450px;
`

export default function ComponentC({ subheader, title, body, image }) {
  return (
    <Section>
      <Container className="spacing center ">
        <Text className="spacing">
          <div className="">
            <p className="subheader accent">{subheader}</p>
            <h2 className="title">{title}</h2>
          </div>
          <p
            dangerouslySetInnerHTML={{
              __html: `${body}`,
            }}
          />
        </Text>
        {image ? (
          <StyledImg
            image={image.localFile.childImageSharp.gatsbyImageData}
            alt={image.altText}
          />
        ) : null}
        <center>
          <ButtonPrimary to="/contact">talk to us today</ButtonPrimary>
        </center>
      </Container>
    </Section>
  )
}
