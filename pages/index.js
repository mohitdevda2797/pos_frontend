// import Layout from "../components/common/Layout";

import { useEffect } from "react"

export default function Home({ setPageHeading }) {
  useEffect(() => {
    setPageHeading('Dashboard')
  }, [])

  return (
    // <div className="flex flex-col flex-grow border-4 border-gray-400 border-dashed bg-white rounded"></div>
    <div className="p-3 bg-white border border-dashed">Content goes here</div>
  )
}
