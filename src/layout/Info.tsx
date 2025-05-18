import React from 'react'
import { words } from '../constants'
import HeroPC from '../components/HeroModels/HeroPC'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Info: React.FC = () => {
  useGSAP(() => {
    gsap.fromTo(".hero-text h1, p",
      {
        y: 50,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'power2.inOut'
      },
    )
  })

  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="absolute top-0 right-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div>
      <div className="relative z-10 flex xl:items-center items-start justify-center">
        <div className="px-6 absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5">
          <div className="flex flex-col justify-center items-center -mt-2">
            <div className="w-5 h-5 rounded-full bg-[#F694FF]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>
          <div className="hero-text">
            <h1 className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
              Hi, I'm <span className="text-[#F694FF]">Sean Chen</span>
            </h1>
            <h1>
              Shaping
              <span className="slide">
                <span className="wrapper">
                  {words.map((word) => (
                    <span key={word.text} className="flex items-center md:gap-3 gap-1 pb-2">
                      <img
                        src={word.imgPath}
                        alt={word.text}
                        className="xl:size-12 md:size-10 size-7 md:pb-1 pt-1 rounded-full bg-white-50"
                      />
                      <span>{word.text}</span>
                    </span>
                  ))}
                </span>
              </span>
            </h1>
            <p className="text-white-50 md:text-2xl text-sm relative z-10 wrap-break-word">
              Hi, I'm a <span className="font-bold text-violet-500">Google Cloud AI Developer</span> passion for code, AI, and design.
            </p>
          </div>
          <div className="flex-shrink-0 mt-4 lg:mt-0 lg:ml-16 md:ml-10 -ml-6 avatar">
            <img
              src="/logo.png"
              alt="Sean Chen Profile"
              className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-72 lg:h-72 rounded-full"
            />
          </div>
        </div>
      </div>
      <HeroPC />
    </section>
  )
}

export default Info