// after
import React from "react"
import styled from "styled-components"
import { Container, Actions } from "../layoutComponents"
import { ButtonPrimary, AnchorInline } from "../buttons"
import { StaticImage } from "gatsby-plugin-image"

const BannerGrid = styled.div`
  display: grid;
  grid-template-rows: auto 4em auto;
`

const Flex = styled.div`
  display: flex;
  justify-content: center;
`

const Wrapper = styled.div`
  grid-row: 1 / span 2;
  grid-column: 1 / -1;
  z-index: 1;
  background: ${props => `url(${props.img})`}, rgba(0, 0, 0, 0.5);
  background-blend-mode: overlay;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 4em 0;

  display: grid;
  place-items: center;

  min-height: 80vh;
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
  color: var(--txt-light);
  padding: 2em;
  width: 80%;
`
export default function Banner(props) {
  return (
    <BannerGrid>
      <Wrapper img={props.img}>
        <Container className="spacing">
          <Text className="spacing">
            <div className="">
              <h1 className="title">{props.title}</h1>
            </div>
            <ButtonPrimary to="/contact">get free estimate</ButtonPrimary>
          </Text>
        </Container>
      </Wrapper>
      <BannerBottomText>
        <Container>
          <p>{props.excerpt}</p>
        </Container>
      </BannerBottomText>
    </BannerGrid>
  )
}

// before
// import React from "react"
// import deepClone from "lodash.clonedeep"
// import PageBanner from "../page/Banner"

// const Banner = data => {
//   // Since we can't directly modify data
//   const dataCloned = deepClone(data)
//   // Let's say there's something about the normal Page banner
//   // that should always be the same for a Post's banner.
//   dataCloned.description = `Published on ${data.date}`
//   return <PageBanner {...dataCloned} />
// }

// export default Banner
