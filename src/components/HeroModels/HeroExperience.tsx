import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive'
import { Room } from './Room'
import HeroLights from './HeroLights'
import Particles from './Particles'
import HeroLoader from './HeroLoader'

const HeroExperience: React.FC = () => {
  const isMobile: boolean = useMediaQuery({ query: '(max-width: 768px)' })

  return (
    <>
      <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
        <HeroLights />
        <Particles />
        <Suspense fallback={<HeroLoader />}>
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            maxDistance={20}
            minDistance={5}
            minPolarAngle={Math.PI / 5}
            maxPolarAngle={Math.PI / 2}
          />

          <group
            scale={isMobile ? 0.7 : 0.8}
            position={[0, -3.5, 0]}
            rotation={[0, -Math.PI / 4, 0]}
          >
            <Room />
          </group>
        </Suspense>
      </Canvas>
    </>
  )
}

export default HeroExperience