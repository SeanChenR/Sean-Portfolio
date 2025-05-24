import type { ReactNode } from 'react'
import { useRef } from 'react'

interface GlowCardProps {
  card: {
    review: string
  }
  children: ReactNode
  index: number
}

const GlowCard = ({ card, children, index }: GlowCardProps) => {
  const cardRef = useRef<HTMLDivElement[]>([])

  const handleMouseMove = (index: number) => (e: React.MouseEvent) => {
    const card = cardRef.current[index]
    if (!card) return

    // Get the mouse position
    const rect = card.getBoundingClientRect()
    const mouseX = e.clientX - rect.left - rect.width / 2
    const mouseY = e.clientY - rect.top - rect.height / 2

    // calc the angle from the center of the card
    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI)
    
    angle = (angle + 360) % 360

    card.style.setProperty('--start', `${angle + 60}`)
  }

  return (
    <div 
      ref={(el) => {
        if (el) cardRef.current[index] = el
      }} 
      onMouseMove={handleMouseMove(index)} 
      className="card card-border timeline-card rounded-xl p-10"
    >
      <div className="glow" />
      <div className="flex items-center gap-1 mb-5">
        {Array.from({ length: 5 }).map((_, index) => (
          <img src="/images/star.png" key={index} alt="star" className="size-5" />
        ))}
      </div>
      <div className="mb-5">
        <p className="text-white-50 text-lg">
          {card.review}
        </p>
      </div>
      {/* 這邊是把前面 image 的部分傳進來，也就是在 ExperienceSeaction 被 <GlowCard> 包起來的東西 */}
      {children}
    </div>
  )
}

export default GlowCard