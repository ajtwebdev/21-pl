import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { ButtonPrimaryDark } from "../../buttons"
import { Container, Flex, Section } from "../../layoutComponents"

const Wrapper = styled.div`
  background: var(--clr-accent);
`

const Text = styled.div`
  color: var(--txt-light);
  padding: 2em 0;

  .subheader {
    color: var(--txt-dark-secondary);
  }
`

const StyledImg = styled(GatsbyImage)`
  clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 0 52%, 0% 0%);
`

export default function Cta1({ subheader, title, body, image }) {
  return (
    <Wrapper>
      <Flex>
        {/* <StyledImg
          image={image.localFile.childImageSharp.gatsbyImageData}
          alt={image.altText}
          className="stretch"
        /> */}
        <StaticImage src="../../../images/ph.jpg" className="stretch" />
        <Text>
          <Container className="spacing">
            <div>
              <p className="subheader">{subheader}</p>
              <h2 className="title">{title}</h2>
            </div>
            {body ? (
              <p
                dangerouslySetInnerHTML={{
                  __html: `${body}`,
                }}
              />
            ) : null}

            <ButtonPrimaryDark to="/contact">
              get your quote &#8594;
            </ButtonPrimaryDark>
          </Container>
        </Text>
      </Flex>
    </Wrapper>
  )
}
