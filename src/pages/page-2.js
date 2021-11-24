import React, {useLayoutEffect, useState} from "react"
import { Link } from "gatsby"
import rough from 'roughjs/bundled/rough.esm'
import Layout from "../components/layout"
import Seo from "../components/seo"



const SecondPage = () => {
  const generator = rough.generator()
  const [elements, setElements] = useState([])
  const [drawing, setDrawing] = useState(false)


  useLayoutEffect(() => {
     const canvas = document.getElementById("canvas")
     const ctx = canvas.getContext("2d")
     

     const roughCanvas = rough.canvas(canvas)
     const rect = generator.rectangle(10, 10, 100, 100)
     const line = generator.line(10, 10, 110, 110)
     roughCanvas.draw(rect)
     roughCanvas.draw(line)

    

   })

   const handleMouseDown = () => {
    setDrawing(true)
   }
   const handleMouseMove = () => {
    if(!drawing) return

    const {clientX, clientY} = Event
    console.log(clientX, clientY)
   }
   const handleMouseUp = () => {
    setDrawing(false)
   }


  return (
  <Layout>
    <canvas id='canvas' 
    width={window.innerWidth} 
    height={window.innerHeight}
    onMouseDown={handleMouseDown}
    onMouseMove={handleMouseMove}
    onMouseUp={handleMouseUp}
    > 
      Canvas 
      </canvas>
    <Seo title="Page two" />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
  )
}

export default SecondPage
