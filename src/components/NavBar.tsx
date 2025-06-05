import React, { useState, useEffect } from 'react'
import { navLinks } from '@/constants/index'
import GradientText from './GradientText'

const NavBar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      setScrolled(isScrolled)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // 使用更精確的 scroll 追蹤
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150 // 調整偏移量

      // 獲取所有 sections 的位置資訊
      interface SectionPosition {
        id: string
        offsetTop: number
        offsetBottom: number
      }

      const sectionPositions = navLinks.map(({ link }) => {
        const sectionId = link.replace('#', '')
        const element = document.getElementById(sectionId)
        
        if (!element) return null
        
        return {
          id: sectionId,
          offsetTop: element.offsetTop,
          offsetBottom: element.offsetTop + element.offsetHeight
        }
      }).filter((section): section is SectionPosition => section !== null)

      // 找到當前視窗位置對應的 section
      let currentSection = ''
      
      for (const section of sectionPositions) {
        if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetBottom) {
          currentSection = section.id
          break
        }
      }

      // 如果沒有找到精確匹配，使用最接近的上一個 section
      if (!currentSection) {
        for (let i = sectionPositions.length - 1; i >= 0; i--) {
          if (scrollPosition >= sectionPositions[i].offsetTop) {
            currentSection = sectionPositions[i].id
            break
          }
        }
      }

      // 如果還是沒有，使用第一個 section
      if (!currentSection && sectionPositions.length > 0) {
        currentSection = sectionPositions[0].id
      }

      setActiveSection(currentSection)
    }

    // 使用 throttle 來提升性能
    let ticking = false
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    // 初始執行
    handleScroll()
    
    // 監聽 scroll 事件
    window.addEventListener('scroll', throttledHandleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll)
    }
  }, [])
  
  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a href="#info" className="logo">
          <GradientText
            colors={["#F594FF", "#00D3F2", "#F594FF"]}
            animationSpeed={3}
            showBorder={false}
            className="custom-class"
          >
            Sean Chen
          </GradientText>
        </a>

        {/* 桌面版導航 */}
        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => {
              // 檢查當前導航項目是否為活躍狀態
              const sectionId = link.replace('#', '')
              const isActive = activeSection === sectionId
              
              return (
                <li key={name} className="group relative">
                  <a href={link} className="block relative overflow-hidden py-2 px-5 rounded-lg">
                    {/* 背景動畫層 */}
                    <span className={`absolute inset-0 rounded-lg transition-all duration-500 ease-out ${
                      isActive 
                        ? 'bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-cyan-500/20 shadow-lg shadow-cyan-400/30 scale-100' 
                        : 'bg-transparent scale-95 group-hover:bg-gradient-to-r group-hover:from-cyan-500/10 group-hover:via-blue-500/10 group-hover:to-cyan-500/10 group-hover:scale-100'
                    }`} />
                    
                    {/* 文字 */}
                    <span className={`relative z-10 block transition-all duration-500 ease-out ${
                      isActive 
                        ? 'text-cyan-300 font-bold tracking-wide transform translate-y-0' 
                        : 'text-white/90 font-medium hover:text-cyan-200 hover:tracking-wide transform hover:translate-y-0'
                    }`}>
                      {name}
                    </span>
                    
                    {/* 下劃線 */}
                    <span className={`absolute bottom-1 left-1/2 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent 
                      transition-all duration-700 ease-out transform -translate-x-1/2 ${
                      isActive 
                        ? 'w-3/4 opacity-100 scale-x-100' 
                        : 'w-0 opacity-0 scale-x-0 group-hover:w-1/2 group-hover:opacity-100 group-hover:scale-x-100'
                    }`} />
                    
                    {/* 光點效果 */}
                    <span className={`absolute top-1.5 right-1.5 w-1 h-1 rounded-full bg-green-400 
                      transition-all duration-300 ease-out ${
                      isActive 
                        ? 'opacity-100 scale-150 animate-pulse' 
                        : 'opacity-0 scale-0'
                    }`} />
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* 手機版導航 - 顯示當前活躍 section */}
        <nav className="mobile">
          <div className="current-section">
            {(() => {
              const currentNav = navLinks.find(({ link }) => {
                const sectionId = link.replace('#', '')
                return activeSection === sectionId
              })
              
              return (
                <div className="section-indicator">
                  <span className="section-dot" />
                  <span className="section-name">
                    {currentNav?.name || navLinks[0]?.name || 'Home'}
                  </span>
                </div>
              )
            })()}
          </div>
        </nav>

        <a href="#contact" className="contact-btn group relative inline-block">
          <div className="inner glow-cyan">
            <span>Contact Me</span>
            <div className="star-1">
              <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53"
                version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
                <defs></defs>
                <g id="Layer_x0020_1">
                  <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                  <path
                    d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                    className="fil0"></path>
                </g>
              </svg>
            </div>
            <div className="star-2">
              <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53"
                version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
                <defs></defs>
                <g id="Layer_x0020_1">
                  <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                  <path
                    d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                    className="fil0"></path>
                </g>
              </svg>
            </div>
            <div className="star-3">
              <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53"
                version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
                <defs></defs>
                <g id="Layer_x0020_1">
                  <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                  <path
                    d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                    className="fil0"></path>
                </g>
              </svg>
            </div>
            <div className="star-4">
              <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53"
                version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
                <defs></defs>
                <g id="Layer_x0020_1">
                  <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                  <path
                    d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                    className="fil0"></path>
                </g>
              </svg>
            </div>
            <div className="star-5">
              <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53"
                version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
                <defs></defs>
                <g id="Layer_x0020_1">
                  <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                  <path
                    d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                    className="fil0"></path>
                </g>
              </svg>
            </div>
            <div className="star-6">
              <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53"
                version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
                <defs></defs>
                <g id="Layer_x0020_1">
                  <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                  <path
                    d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                    className="fil0"></path>
                </g>
              </svg>
            </div>
            <div className="star-7">
              <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53"
                version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
                <defs></defs>
                <g id="Layer_x0020_1">
                  <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                  <path
                    d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                    className="fil0"></path>
                </g>
              </svg>
            </div>
          </div>
        </a>
      </div>
    </header>
  )
}

export default NavBar