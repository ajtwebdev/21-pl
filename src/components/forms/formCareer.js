import React from "react"
import styled from "styled-components"

import { Section, Container, Flex, FlexMobileOpp } from "../layoutComponents"
import { Label, Input, TextArea, Submit } from "./formItems"
import Map from "../map"
import { AnchorInline } from "../buttons"

const FormWrapper = styled.div`
  // background: var(--clr-dark);
  // color: var(--txt-light);
  // padding: 2em;
`

export default function FormCareer(props) {
  return (
    <Section>
      <Container>
        <div className="spacing center">
          <h3 className="title--bold center">
            <span className="italics">{props.title}</span>
          </h3>
          <p>{props.description}</p>
        </div>
          <FormWrapper>
            <form
              name="careers"
              className="spacing"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="careers" />
              <p hidden>
                <label>
                  Don’t fill this out: <input name="bot-field" />
                </label>
              </p>
              <Flex>
                <div className="spacing-sm">
                  <Label htmlFor="name">* Name:</Label>
                  <Input
                    type="name"
                    name="name"
                    id="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="spacing-sm">
                  <Label htmlFor="email">* Email:</Label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </Flex>
              <div className="spacing-sm">
                <Label htmlFor="phone">* Phone:</Label>
                <Input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              <div className="spacing-sm">
                <Label htmlFor="resumeFile">* Resume:</Label>
                <input
                  type="file"
                  name="resumeFile"
                  id="resumeFile"
                  required
                />
              </div>
              <Submit type="submit" id="submit" value="send" />
            </form>
          </FormWrapper>
      </Container>
    </Section>
  )
}
