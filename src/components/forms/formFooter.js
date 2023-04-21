import React from "react"
import styled from "styled-components"
import { Input, TextArea, Submit } from "./formItems"

const FormWrapper = styled.div`
  // background: var(--clr-dark);
  // color: var(--txt-light);
  // padding: 2em;
`

export default function FormFooter(props) {
  return (
    <FormWrapper>
      <form
        name="contact"
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
        <div className="spacing-sm">
          {/* <Label htmlFor="name">* Name:</Label> */}
          <Input
            type="name"
            name="name"
            id="name"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="spacing-sm">
          {/* <Label htmlFor="email">* Email:</Label> */}
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="spacing-sm">
          {/* <Label htmlFor="phone">* Phone:</Label> */}
          <Input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Enter your phone number"
            required
          />
        </div>

        {/* <div className="spacing-sm">
                <Label htmlFor="subject">Subject:</Label>
                <Input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  required
                />
              </div> */}

        <div className="spacing-sm">
          {/* <Label htmlFor="msg">* Message:</Label> */}
          <TextArea
            name="msg"
            id="msg"
            cols="30"
            rows="5"
            placeholder="What's your project?"
            required
          />
        </div>
        <Submit type="submit" id="submit" value="send" />
      </form>
    </FormWrapper>
  )
}
