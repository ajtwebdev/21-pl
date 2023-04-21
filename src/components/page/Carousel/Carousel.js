import React from "react"
import { Container, Section } from "../../layoutComponents"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

const Text = styled.div`
  text-align: center;
  max-width: 110ch;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`

const SliderWrapper = styled.div`
  .slick-prev:before,
  .slick-next:before {
    color: var(--clr-accent);
    font-size: 30px;
  }

  .slick-dots {
    li {
      height: 30px;
      width: 30px;
    }
  }
`

const SliderItem = styled.div`
  padding: 0.5em;
`

const StyledImg = styled(GatsbyImage)`
  height: 450px;
  width: 100%;
  object-fit: cover;
`

export default function Carousel({ subheader, title, carouselContent }) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <Section>
      <Container>
        <Text>
          <div>
            <p className="subheader accent">{subheader}</p>
            <h2 className="title">{title}</h2>
          </div>
        </Text>
        <SliderWrapper>
          <Slider {...settings}>
            {carouselContent.map(item => {
              return (
                <SliderItem>
                  <StyledImg
                    image={item.image.localFile.childImageSharp.gatsbyImageData}
                    alt={item.image.altText}
                  />
                  {item.title ? (
                    <h3 className="subheader ">{item.title}</h3>
                  ) : null}
                  {item.description ? (
                    <p
                      dangerouslySetInnerHTML={{
                        __html: `${item.description}`,
                      }}
                    />
                  ) : null}
                </SliderItem>
              )
            })}
          </Slider>
        </SliderWrapper>
      </Container>
    </Section>
  )
}
