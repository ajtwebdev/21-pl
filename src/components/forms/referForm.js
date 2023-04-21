import React from "react"
import styled from "styled-components"

import { Section, Container, Flex } from "../layoutComponents"
import { Label, Input, Submit } from "./formItems"

const FormWrapper = styled.div`
  // background: var(--clr-dark);
  // color: var(--txt-light);
  // padding: 2em;
`

export default function ReferForm(props) {
  return (
    <Section>
      <Container>
        <FormWrapper>
          <form
            name="contact"
            className="spacing"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
          >
            <Flex>
              <fieldset>
                <legend>Your Info</legend>
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                  <label>
                    Don’t fill this out: <input name="bot-field" />
                  </label>
                </p>
                <div className="spacing-sm">
                  <Label htmlFor="name">* Name:</Label>
                  <Input
                    type="name"
                    name="name"
                    id="name"
                    placeholder="Enter your full name"
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
              </fieldset>
              <fieldset>
                <legend>Your Friend/Family Info</legend>
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                  <label>
                    Don’t fill this out: <input name="bot-field" />
                  </label>
                </p>
                <div className="spacing-sm">
                  <Label htmlFor="name">* Name:</Label>
                  <Input
                    type="name"
                    name="name"
                    id="name"
                    placeholder="Enter their full name"
                    required
                  />
                </div>
                <div className="spacing-sm">
                  <Label htmlFor="email">* Phone:</Label>
                  <Input
                    type="phone"
                    name="phone"
                    id="phone"
                    placeholder="Enter their phone"
                    required
                  />
                </div>
                <div className="spacing-sm">
                  <Label htmlFor="email">* Email:</Label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter their email"
                    required
                  />
                </div>
              </fieldset>
            </Flex>
            <fieldset>
              <legend>What service(s) are you interested in?</legend>

              <div>
                <input
                  type="radio"
                  id="PatioWalkways"
                  name="service1"
                  value="PatioWalkways"
                  checked
                />
                <label for="PatioWalkways">Patios & Walkways</label>
              </div>

              <div>
                <input
                  type="radio"
                  id="concrete"
                  name="service2"
                  value="concrete"
                />
                <label for="concrete">Concrete</label>
              </div>

              <div>
                <input
                  type="radio"
                  id="RetainingWall"
                  name="service3"
                  value="RetainingWall"
                />
                <label for="RetainingWall">Reataining Walls</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="SeatWalls"
                  name="service4"
                  value="SeatWalls"
                />
                <label for="SeatWalls">Seatwalls/Pillars</label>
              </div>
            </fieldset>
            <Submit type="submit" id="submit" value="send" />
          </form>
        </FormWrapper>
      </Container>
    </Section>
  )
}
