import React, {useLayoutEffect, useState} from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => {
  useLayoutEffect(() => {
     const canvas = document.getElementById("canvas")
     const ctx = canvas.getContext("2d")
   })

  return (
  <Layout>
    <canvas id='canvas' width={window.innerWidth} height={window.innerHeight}> Canvas </canvas>
    <Seo title="Page two" />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
  )
}

export default SecondPage
