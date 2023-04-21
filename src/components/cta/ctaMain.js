import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { ButtonPrimaryDark } from "../buttons"
import { Container, Flex, Section } from "../layoutComponents"

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

const ImgStyle = {
  clipPath: "polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 0 52%, 0% 0%)",
}

export default function CtaMain(props) {
  return (
    <Wrapper>
      <Flex>
        <StaticImage
          src="../../images/calgary-landscaping-cta.jpg"
          alt="calgary landscaping"
          style={ImgStyle}
        />
        <Text>
          <Container className="spacing">
            <div>
              <p className="subheader">{props.subheader}</p>
              <h2 className="title">{props.title}</h2>
            </div>
            <p>{props.body}</p>
            <ButtonPrimaryDark to="/contact">
              get your quote &#8594;
            </ButtonPrimaryDark>
          </Container>
        </Text>
      </Flex>
    </Wrapper>
  )
}
