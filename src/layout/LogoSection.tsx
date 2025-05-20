import React from 'react'
import { logoIconsList } from '../constants'
import type { LogoIcon } from '../types/type'

interface LogoIconProps {
  icon: LogoIcon
}

const LogoIcon: React.FC<LogoIconProps> = ({ icon: { name, imgPath } }) => {
  return (
    <div className="flex-center marquee-item">
      <img src={imgPath} alt={name} />
    </div>
  )
}

const LogoSection: React.FC = () => {
  return (
    <>
      <div className="my-10 relative">
        <div className="gradient-edge" />
        <div className="gradient-edge" />

        <div className="marquee md:h-20 h-10">
          <div className="marquee-box md:gap-12 gap-5">
            {logoIconsList.map((icon) => (
              <LogoIcon key={icon.name} icon={icon} />
            ))}
            {logoIconsList.map((icon) => (
              <LogoIcon key={icon.name} icon={icon} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default LogoSection