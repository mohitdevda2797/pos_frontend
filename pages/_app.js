import { useState } from 'react'
import Layout from '../components/common/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  // return <Component {...pageProps} />
  const [pageHeading, setPageHeading] = useState('')

  return (
    <Layout pageHeading={pageHeading}>
      <Component {...pageProps} setPageHeading={setPageHeading}/>
    </Layout>
  )
}

export default MyApp
