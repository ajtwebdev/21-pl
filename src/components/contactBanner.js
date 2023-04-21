import React from "react"
import { Container, GridThree, Section } from "./layoutComponents"
import { VscWorkspaceTrusted } from "react-icons/vsc"
import { BsFillCalendar2DateFill } from "react-icons/bs"
import { AiOutlinePhone } from "react-icons/ai"
import { Link } from "gatsby"
import styled from "styled-components"

const IconStyle = {
  color: "var(--clr-tan)",
  fontSize: "55px",
}

const Wrapper = styled.div`
  background: var(--clr-accent);
  color: var(--clr-tan);

  .light-item {
    background: var(--clr-accent-lighter);
  }
`

const Item = styled.div`
  display: grid;
  place-items: center;
  max-width: 90ch;
  padding: 4em 2em;

  .link {
    &:hover {
      color: var(--txt-light);
    }
  }
`

export default function ContactBanner() {
  return (
    <Wrapper>
      <Container>
        <GridThree>
          <Item className="spacing">
            <VscWorkspaceTrusted style={IconStyle} />
            <Link className="link" to="/about">
              <h3 className="subheader">trusted care</h3>
            </Link>
            <p>
              When professional is what you want, professional is what you’ll
              get. We are your trusted team landscaping experts who put your
              needs first.
            </p>
          </Item>
          <Item className="spacing light-item">
            <BsFillCalendar2DateFill style={IconStyle} />
            <Link className="link" to="/contact">
              <h3 className="subheader">schedule now</h3>
            </Link>
            <p>
              If you are looking for experience and quality landscaping in
              Calgary, look no further than Project Landscape. From maintenance
              to specialty projects, we do it all.
            </p>
          </Item>
          <Item className="spacing">
            <AiOutlinePhone style={IconStyle} />
            <Link className="link" to="/contact">
              <h3 className="subheader">contact us</h3>
            </Link>
            <p>
              Questions? Our support has you covered. Get in touch with us today
              and let us take care of all your landscaping design and
              construction needs the right way.
            </p>
          </Item>
        </GridThree>
      </Container>
    </Wrapper>
  )
}
