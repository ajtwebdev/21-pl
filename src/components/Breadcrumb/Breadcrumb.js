import React from "react"
import { graphql, Link } from "gatsby"

export default function Breadcrumb({ parent }) {
  return (
    <div>
      Breadcrumb
      {console.log(parent)}
    </div>
  )
}
