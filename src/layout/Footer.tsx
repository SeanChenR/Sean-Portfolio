import React from 'react'
import { socialImgs } from '@/constants'
import { SiGithub, SiInstagram, SiX } from '@icons-pack/react-simple-icons'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center md:items-start items-center">
          <a href="#">Visit My Blog</a>
        </div>
        <div className="socials">
          {socialImgs.map((img) => (
            <a className="icon" target="_blank" href={img.url} key={img.url}>
              {img.name === "github" ? (
                <SiGithub title="GitHub" color="#fff" size={32} />
              ) : img.name === "x" ? (
                <SiX title="X" color="#fff" size={32} />
              ) : img.name === "instagram" ? (
                <SiInstagram title="Instagram" color="#FF0069" size={32} />
              ) : (
                <img src={img.imgPath} alt="img" />
              )}
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            &copy; {new Date().getFullYear()} Sean Chen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer