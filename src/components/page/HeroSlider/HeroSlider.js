import React from "react"
import styled from "styled-components"
import { ButtonPrimary, ButtonSecondaryLight } from "../../buttons"
import { Actions, Container, HeroBannerPadding } from "../../layoutComponents"
import { StaticImage } from "gatsby-plugin-image"
import "bootstrap/dist/css/bootstrap.min.css"
import { Carousel } from "react-bootstrap"
import { Autoplay } from "swiper"

const Wrapper = styled.div`
  padding-bottom: 4em;
  p {
    margin-bottom: 0;
  }
`

const HeroGrid = styled.div`
  display: grid;
  grid-template-rows: auto 4em auto;
`

const HeroWrapper = styled.div`
  grid-row: 1 / span 2;
  grid-column: 1 / -1;
  z-index: 1;
`

const HeroBottomText = styled.div`
  grid-row: 2 / -1;
  grid-column: 1 / -1;
  z-index: 2;

  background: var(--clr-dark);
  color: var(--txt-light);
  padding: 2em;
  width: 80%;
`

const Content = styled.div`
  position: relative;

  &:before {
    content: "";
    position: absolute;
    background: rgba(0, 0, 0, 0.1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`

const Content1 = styled.div`
  background: url("../../../images/deck-banner-2.png"), rgba(0, 0, 0, 0.4);
  background-blend-mode: overlay;
  background-position: center;
  height: 85vh;
  background-size: cover;
  background-repeat: no-repeat;
`
const Content2 = styled.div`
  background: url("../../../images/deck-banner-3.jpeg"), rgba(0, 0, 0, 0.4);
  background-blend-mode: overlay;
  background-position: center;
  height: 85vh;
  background-size: cover;
  background-repeat: no-repeat;
`
const Content3 = styled.div`
  background: url("../../../images/deck-banner-1.jpeg"), rgba(0, 0, 0, 0.4);
  background-blend-mode: overlay;
  background-position: center;
  height: 85vh;
  background-size: cover;
  background-repeat: no-repeat;
`

const captionStyle = {
  textAlign: "left",
  display: "flex",
  alignItems: "center",
  height: "90%",
  left: "12%",
  color: "var(--txt-light)",
}

export default function HeroSlider({ title }) {
  return (
    <Wrapper>
      <HeroBannerPadding />
      <HeroGrid>
        <HeroWrapper>
          <Carousel>
            <Carousel.Item interval={5000}>
              <Content>
                <Content1 className="d-block w-100" />
              </Content>
              <Carousel.Caption style={captionStyle} className="spacing">
                <div className="spacing">
                  <h2 className="title">style from the ground up</h2>
                  <p className="">Calgary's premier deck builder</p>
                  <ButtonPrimary to="/contact">
                    what's your project?
                  </ButtonPrimary>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <Content>
                <Content2 className="d-block w-100" />
              </Content>
              <Carousel.Caption style={captionStyle} className="spacing">
                <div className="spacing">
                  <h2 className="title">expand your outdoor living</h2>
                  <p className="">Looking for inspiration?</p>
                  <ButtonPrimary to="/contact">
                    what's your project?
                  </ButtonPrimary>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
              <Content>
                <Content3 className="d-block w-100" />
              </Content>
              <Carousel.Caption style={captionStyle} className="spacing">
                <div className="spacing">
                  <h2 className="title">take a step outdoors</h2>
                  <p className="">Ready to plan your 2023 deck build?</p>
                  <ButtonPrimary to="/contact">call today</ButtonPrimary>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </HeroWrapper>
        <HeroBottomText>
          <Container>
            <p>
              At Project Landscape Ltd., our premier deck builders Calgary
              landscaping services will increase the value and overall aesthetic
              of your home. We use quality brands, and unique products to help
              keep your lawn healthy, and your home looking incredible. This
              means an overall better living experience for you and your family.
            </p>
          </Container>
        </HeroBottomText>
      </HeroGrid>
    </Wrapper>
  )
}
