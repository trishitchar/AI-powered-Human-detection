"use client"
import React, { useEffect, useRef, useState } from 'react'
import Webcam from 'react-webcam';


type Props = {}


const HomePage = (props:Props) => {
  // to show the object red and green
  const webcamRef = useRef<Webcam>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null);

  //state variable
  const [mirrored,setMirrored] = useState<boolean>(false)
  return (
    <div className='flex h-screen bg-red-400 border-2 border-green-500'>
      {/* left part for webcam and canvas */}
      <div className='relative'>
        <div className='relative h-screen w-full border-2 border-yellow-500'>
          <Webcam ref = {webcamRef}  mirrored={mirrored} className='h-full w-full object-contain p-2 border-2 border-black'/>
          <canvas ref={canvasRef} className=' absolute top-4 left-0 h-full object-contain border-2 border-white'></canvas>
        </div>
      </div>
      {/* right div for chat and other thing */}
      <div className='flex flex-row flex-1'>
          
      </div>
    </div>
  )
}

export default HomePage