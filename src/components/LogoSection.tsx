import React, { type FC } from 'react'
import { logoIconsList } from '../constants'
import type { LogoIcon } from '../types/type'

interface LogoIconProps {
  icon: LogoIcon
}

const LogoIcon: FC<LogoIconProps> = ({ icon: { name, imgPath } }) => {
  return (
    <div className="flex-one flex-center marquee-item">
      <img src={imgPath} alt={name} />
    </div>
  )
}

const LogoSection: React.FC = () => {
  return (
    <>
      <div className="md:my-20 my-10 relative">
        <div className="gradient-edge" />
        <div className="gradient-edge" />

        <div className="marquee h-52">
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