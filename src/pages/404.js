import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <h1>404: Not Found</h1>
      <p>Sorry, I don`t created this page...yet</p>
    </Layout>
  )
}

export default NotFoundPage
