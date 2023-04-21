import React from "react"
import styled from "styled-components"
import { Container, Section } from "../../layoutComponents"
import ReactCompareImage from "react-compare-image"
// import "react-before-after-slider-component/dist/build.css"

const Text = styled.div`
  text-align: center;
  max-width: 110ch;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`

export default function ImageSlider({ subheader, title, body }) {
  const before =
    "https://staging.innerspiritphoto.com/wp-content/uploads/2022/08/before-boudoir.jpg"
  const after =
    "https://staging.innerspiritphoto.com/wp-content/uploads/2022/08/after-boudoir.jpg"
  return (
    <Section>
      <Container className="spacing">
        <Text className="spacing">
          <div>
            <p className="subheader accent">{subheader}</p>
            <h2 className="title">{title}</h2>
          </div>
          <p
            dangerouslySetInnerHTML={{
              __html: `${body}`,
            }}
          />
        </Text>
        <ReactCompareImage leftImage={before} rightImage={after} />
      </Container>
    </Section>
  )
}
