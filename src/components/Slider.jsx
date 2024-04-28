import React from 'react'
import { Fade } from "react-awesome-reveal";
export default function Slider() {
  return (
    <div className='flex flex-col lg:flex-row gap-4 lg:justify-between items-center mt-12'>

      <div className="p-6 mx-4 md:my-4 text-center lg:text-left">
      <Fade cascade> <h1 className='text-3xl font-bold '>Welcome to TM</h1>  
      <p className='text-xl py-6'>Your favourate destination for finding amazing tourist spots in <span className='font-bold'>Euroupe</span>.</p>
      
      </Fade>
       
      
      </div>
      <div className="carousel carousel-center max-w-xl p-4 space-x-4 bg-transparent rounded-box">
        <div className="carousel-item">
          <img src="https://i.pinimg.com/564x/fa/95/98/fa95986f2c408098531ca7cc78aee3a4.jpg" className="rounded-box h-96 border-2" />
        </div>
        <div className="carousel-item">
          <img src="https://i.pinimg.com/564x/cc/7d/e1/cc7de17a60590666bdda600a2c8a448d.jpg" className="rounded-box h-96 border-2" />
        </div>
        <div className="carousel-item">
          <img src="https://i.pinimg.com/564x/00/23/28/002328d53743736831dcc1d82867cf34.jpg" className="rounded-box h-96 border-2" />
        </div>
        <div className="carousel-item">
          <img src="https://i.pinimg.com/564x/46/e9/ee/46e9eed2ffd56a8df958ed223b865478.jpg" className="rounded-box h-96 border-2" />
        </div>
        <div className="carousel-item">
          <img src="https://i.pinimg.com/564x/15/1d/0c/151d0c14af5bfcb4e482f1ba27776a91.jpg" className="rounded-box h-96 border-2" />
        </div>
      </div>
    </div>
  )
}

