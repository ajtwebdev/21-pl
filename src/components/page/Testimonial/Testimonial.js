import React, { Component } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Container, Section } from "../../layoutComponents"
import styled from "styled-components"
import { FaStar } from "react-icons/fa"

const ReviewWrapper = styled.div`
  border: 1px solid var(--clr-accent);
  border-radius: var(--br);
  padding: 2em;
  background: rgba(0, 0, 0, 0.7);
  color: var(--txt-light);
  text-align: center;

  h3,
  p {
    max-width: 90ch;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
`

const Wrapper = styled.div`
  background: url("../../images/calgary-landscaping-testimonials-banner.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`

const SliderWrapper = styled.div`
  .slick-prev:before,
  .slick-next:before {
    color: var(--clr-accent);
    font-size: 24px;
  }
`

const FlexStars = styled.div`
  display: flex;
  justify-content: center;

  & > * + * {
    margin-left: 2px;
  }

  & > * {
    color: var(--clr-tan);
  }
`

const ReviewBox = props => {
  return (
    <ReviewWrapper className="spacing">
      <h3 className="subheader">{props.title}</h3>
      <p className="italics">"{props.review}"</p>
      <p className="bold caps">{props.name}</p>
      <FlexStars>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </FlexStars>
    </ReviewWrapper>
  )
}

export default function Testimonial({ title, testimonials }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <Wrapper>
      <Section>
        <Container>
          <SliderWrapper>
            <Slider {...settings}>
              {testimonials.map(testimonial => {
                return (
                  <ReviewBox
                    title={testimonial.testimonialTitle}
                    review={testimonial.testimonialBody}
                    name={testimonial.testimonialName}
                  />
                )
              })}
            </Slider>
          </SliderWrapper>
        </Container>
      </Section>
    </Wrapper>
  )
}
