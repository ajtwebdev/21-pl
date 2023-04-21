import React from "react"
import styled from "styled-components"

const MapFrame = styled.iframe`
  width: 100%;
  height: 450px;
  border: 0;
`

export default function Map() {
  return (
    <div>
      <MapFrame
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1290906.3493246743!2d-115.54404004010489!3d50.80705305038139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537176787d7e844d%3A0xa305c1cb8ff1c360!2sProject%20Landscape%20Ltd.!5e0!3m2!1sen!2sca!4v1676580303933!5m2!1sen!2sca"
        allowFullScreen
        loading="lazy"
      />
    </div>
  )
}
