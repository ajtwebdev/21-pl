import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { ButtonPrimary } from "./buttons"
import { Container, Section } from "./layoutComponents"

const Wrapper = styled.div`
  background: url("../../images/finance-banner.jpg"), rgba(255, 255, 255, 0.7);
  background-blend-mode: overlay;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 4em;
  position: relative;
  z-index: 2;

  .finance-img {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 3;
  }
`

export default function FinanceBanner() {
  return (
    <Section>
      <Container>
        <Wrapper>
          <div>
            <p className="subheader">get the landscape financing you need</p>
            <h2 className="title">payment plans to match any budget</h2>
          </div>
          <p>
            On landscape projects $10,000 and up, we will match and better a
            recognized competitor’s quote by 10 percent. At Project Landscape
            Ltd., we are constantly reviewing and negotiating preferred pricing
            arrangements with our suppliers and trade partners to get you the
            best value for your money.
          </p>
          <ButtonPrimary to="/financing">view payment plans</ButtonPrimary>
          <StaticImage
            class="finance-img"
            src="../images/finance-it.jpg"
            alt="affordable calgary landscaping financing"
          />
        </Wrapper>
      </Container>
    </Section>
  )
}
