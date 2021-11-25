import React, {createElement, useLayoutEffect, useState} from "react"
import { Link } from "gatsby"
import rough from 'roughjs/bundled/rough.esm'
import Layout from "../components/layout"
import Seo from "../components/seo"

const generator = rough.generator();

function roughElement(x1, y1, x2, y2) {
  const roughElement = generator.line(x1, y1, x2, y2)
  return {x1, y1, x2, y2, roughElement}
}


const SecondPage = () => {
  
  const [elements, setElements] = useState([])
  const [drawing, setDrawing] = useState(false)


  useLayoutEffect(() => {
     const canvas = document.getElementById("canvas")
     const context = canvas.getContext("2d")
     context.clearRect(0, 0, canvas.width, canvas.height)

     const roughCanvas = rough.canvas(canvas)
    
     elements.forEach(({roughElement}) => roughCanvas.draw(roughElement))
     

    

   }, [elements])

   const handleMouseDown = () => {
    setDrawing(true)

    const {clientX, clientY} = Event
    const element = createElement(clientX, clientY, clientX, clientY)
    setElements(prevState => [...prevState, element])
   }
   const handleMouseMove = () => {
    if(!drawing) return

    const {clientX, clientY} = Event
    const index = elements.length -1
    const {x1, y1} = elements[index]
    const updatedElement = createElement(x1, y1, clientX, clientY)
    
    const elementsCopy = [...elements]
    elementsCopy[index] = updatedElement
    setElements(elementsCopy)
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
