import React from "react"
import { Helmet } from "react-helmet"

export default function Feed() {
  return (
    <div>
      <Helmet>
        {/* <script
          type="text/javascript"
          dangerouslySetInnerHTML={(function () {
            var i,
              e,
              d = document,
              s = "script"
            i = d.createElement("script")
            i.async = 1
            i.charset = "UTF-8"
            i.src =
              "https://cdn.curator.io/published/fd16591f-c852-4c50-9278-b74e92960e44.js"
            e = d.getElementsByTagName(s)[0]
            e.parentNode.insertBefore(i, e)
          })()}
        /> */}
      </Helmet>
      {/* Place <div> tag where you want the feed to appear */}
      <div id="curator-feed-default-feed-layout">
        <a
          href="https://curator.io"
          target="_blank"
          className="crt-logo crt-tag"
        >
          Powered by Curator.io
        </a>
      </div>
      {/* The Javascript can be moved to the end of the html page before the </body> tag */}
    </div>
  )
}
