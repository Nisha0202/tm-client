import React from 'react'
import { Fade } from "react-awesome-reveal";
export default function Slider() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='flex flex-col lg:flex-row gap-4 lg:justify-between items-center mt-12'>

        <div className="p-6 mx-4 md:my-4 text-center lg:text-left">
          <Fade cascade> <h1 className='text-4xl font-bold '>Welcome to TM</h1>
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
 <div className="stats shadow md:mt-16 mt-10 p-6 border-2 ">
          <div className="stat">
            <div className="stat-figure text-teal-700">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <div className="stat-title">Happy Client</div>
            <div className="stat-value">31K</div>
            <div className="stat-desc">April 29, 2024</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-teal-700">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
            </div>
            <div className="stat-title">New Users</div>
            <div className="stat-value">4,200</div>
            <div className="stat-desc">↗︎ 400 (22%)</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-teal-700">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
            </div>
            <div className="stat-title">New Registers</div>
            <div className="stat-value">1,200</div>
            <div className="stat-desc">↗︎ 90 (14%)</div>
          </div>

        </div>

    </div>

  )
}

