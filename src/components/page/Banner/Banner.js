import React from "react"
import styled from "styled-components"
import { Container, Actions, HeroBannerPadding } from "../../layoutComponents"
import { ButtonPrimary, AnchorInline } from "../../buttons"
import Breadcrumb from "../../Breadcrumb/Breadcrumb"
import { StaticImage, getImage, getSrc } from "gatsby-plugin-image"

const BannerGrid = styled.div`
  display: grid;
  grid-template-rows: auto auto;
`

const Flex = styled.div`
  display: flex;
  justify-content: center;
`

const Wrapper = styled.div`
  grid-row: 1 / -1;
  grid-column: 1 / -1;
  z-index: 1;
  background: ${props => `url(${props.img})`}, rgba(0, 0, 0, 0.4);
  //background: url("../../../images/hero.jpg")), rgba(0, 0, 0, 0.4);
  background-blend-mode: overlay;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 4em 0;

  display: grid;
  place-items: center;

  min-height: 90vh;
  height: 100%;

  @media screen and (max-width: 26em) {
    min-height: 100vh;
    height: 100%;
  }
`

const Text = styled.div`
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
  color: var(--clr-tan);
  padding: 4em 2em;
  width: 80%;
`
export default function Banner({ title, subheader, description, image }) {
  return (
    <div>
      <HeroBannerPadding />
      <BannerGrid>
        <Wrapper img={getSrc(image)}>
          <Container className="spacing">
            <Text className="spacing">
              <div className="">
                <h1 className="title">{title}</h1>
                <p className="">{subheader}</p>
              </div>
              <ButtonPrimary to="/contact">get free estimate</ButtonPrimary>
            </Text>
          </Container>
        </Wrapper>
        <BannerBottomText>
          <Container>
            <p>{description}</p>
          </Container>
        </BannerBottomText>
      </BannerGrid>
    </div>
  );
}
