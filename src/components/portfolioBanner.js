import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { ButtonPrimaryDark } from "./buttons"
import { Container, Flex, Section } from "./layoutComponents"

const Wrapper = styled.div`
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(9, 37, 4, 1) 0%,
    rgba(47, 184, 20, 1) 100%
  );
  color: var(--txt-light);
`

const Text = styled.div``

export default function PortfolioBanner() {
  return (
    <Wrapper>
      <Section>
        <Container>
          <Flex>
            <Text className="spacing ">
              <div>
                <p className="subheader">
                  explore the latest in landscape designs
                </p>
                <p className="title">your personal paradise starts here</p>
              </div>
              <ButtonPrimaryDark to="/gallery">
                view our portfolio
              </ButtonPrimaryDark>
            </Text>
            <StaticImage
              src="../images/calgary-pergolas.png"
              alt="calgary landscaping company featured portfolio"
            />
          </Flex>
        </Container>
      </Section>
    </Wrapper>
  )
}
