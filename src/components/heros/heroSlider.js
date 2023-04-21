import React from "react"
import styled from "styled-components"
import { ButtonPrimary } from "../buttons"
import { Container, HeroBannerPadding } from "../layoutComponents"
import "bootstrap/dist/css/bootstrap.min.css"
import { Carousel } from "react-bootstrap"
import { Autoplay } from "swiper"
import PortfolioBanner from "../portfolioBanner"

const Wrapper = styled.div`
  padding-bottom: 4em;
  p {
    margin-bottom: 0;
  }
`

const HeroGrid = styled.div`
  display: grid;
  grid-template-rows: auto auto;
`

const HeroWrapper = styled.div`
  grid-row: 1 / -1;
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
  background: url("../../images/outdoor-living-slider.jpg"), rgba(0, 0, 0, 0.4);
  background-blend-mode: overlay;
  background-position: center;
  height: 90vh;
  background-size: cover;
  background-repeat: no-repeat;
`
const Content2 = styled.div`
  background: url("../../images/hardscaping-slider.jpg"), rgba(0, 0, 0, 0.4);
  background-blend-mode: overlay;
  background-position: center;
  height: 90vh;
  background-size: cover;
  background-repeat: no-repeat;
`
const Content3 = styled.div`
  background: url("../../images/softscaping-slider.png"), rgba(0, 0, 0, 0.4);
  background-blend-mode: overlay;
  background-position: center;
  height: 90vh;
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

export default function HeroSlider(props) {
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
                  <h2 className="title">outdoor living done right</h2>
                  {/* <p className="">your personal paradise starts here</p> */}
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
                  <h2 className="title">hardscaping services</h2>
                  {/* <p className="">your personal paradise starts here</p> */}
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
                  <h2 className="title">softscaping services</h2>
                  {/* <p className="">your personal paradise starts here</p> */}
                  <ButtonPrimary to="/contact">
                    what's your project?
                  </ButtonPrimary>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </HeroWrapper>
        <HeroBottomText>
          <Container>
            <p>
              Transform your outdoor space into a serene haven with our unique
              landscaping services. From custom design to expert installation,
              our team of experts will help you create a personalized and
              functional living space that showcases your personality and style.
              Get started with your transformation today!
            </p>
          </Container>
        </HeroBottomText>
      </HeroGrid>
      <PortfolioBanner />
    </Wrapper>
  )
}
