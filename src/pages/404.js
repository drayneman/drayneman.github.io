import React from "react"

import ContentLayout from "../components/content-layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <ContentLayout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </ContentLayout>
)

export default NotFoundPage
