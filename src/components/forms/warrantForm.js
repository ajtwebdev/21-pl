import React from "react"
import styled from "styled-components"

import { Section, Container, Flex } from "../layoutComponents"
import { Label, Input, TextArea, Submit, Select } from "./formItems"

const FormWrapper = styled.div`
  // background: var(--clr-dark);
  // color: var(--txt-light);
  // padding: 2em;
`

export default function WarrantyForm(props) {
  return (
    <Section>
      <Container>
        <div>
          <h3 className="title center">
            <span className="italics">Request Warranty</span>
          </h3>
        </div>
        <FormWrapper>
          <form
            name="warranty"
            className="spacing"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                Don’t fill this out: <input name="bot-field" />
              </label>
            </p>
            <Flex>
              <div className="spacing-sm">
                <Label htmlFor="fname">* First Name:</Label>
                <Input
                  type="name"
                  name="fname"
                  id="fname"
                  placeholder="Enter your first name"
                  required
                />
              </div>
              <div className="spacing-sm">
                <Label htmlFor="lname">* Last Name:</Label>
                <Input
                  type="name"
                  name="lname"
                  id="lname"
                  placeholder="Enter your last name"
                  required
                />
              </div>
            </Flex>
            <Flex>
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
            <Flex>
              <div className="spacing-sm">
                <Label htmlFor="address">* Address:</Label>
                <Input
                  type="address"
                  name="address"
                  id="address"
                  placeholder="Enter your full address"
                  required
                />
              </div>
              <div className="spacing-sm">
                <Label htmlFor="community">* Community:</Label>
                <Input
                  type="text"
                  name="community"
                  id="community"
                  placeholder="What community do you live in?"
                  required
                />
              </div>
            </Flex>
            <Flex>
              <div className="spacing-sm">
                <Label htmlFor="installDate">
                  * Date landscape was installed:
                </Label>
                <Input
                  type="date"
                  name="installDate"
                  id="installDate"
                  placeholder="Enter the installation date"
                  required
                />
              </div>
              <div className="spacing-sm">
                <Label htmlFor="completetionDate">
                  * Date project was completed:
                </Label>
                <Input
                  type="date"
                  name="completetionDate"
                  id="completetionDate"
                  placeholder="Enter the completion date"
                  required
                />
              </div>
            </Flex>
            <div className="spacing-sm">
              <Label htmlFor="subject">Is this your first warrant claim?</Label>
              <Select name="subject" id="subject" required>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Select>
            </div>
            <div className="spacing-sm">
              <Label htmlFor="details">
                * Please describe the issue in detail:
              </Label>
              <TextArea name="details" id="msg" cols="30" rows="10" required />
            </div>
            <div className="spacing-sm">
              <Label htmlFor="img">Image of the issues</Label>
              <input
                type="file"
                id="img"
                name="img"
                accept="image/png, image/jpeg, image/jpg"
              />
            </div>
            <Submit type="submit" id="submit" value="send" />
          </form>
        </FormWrapper>
      </Container>
    </Section>
  )
}
