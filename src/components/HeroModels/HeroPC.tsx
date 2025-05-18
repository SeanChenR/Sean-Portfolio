import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload } from '@react-three/drei'
import HeroLoader from './HeroLoader'
import Computer  from './Computer'
import Particles from './Particles'

const HeroPC: React.FC = () => {

  return (
    <>
      <Canvas
        shadows
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Particles />
        <Suspense fallback={<HeroLoader />}>
          <OrbitControls
            enableZoom={false}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
          />
          <Computer />
        </Suspense>

        <Preload all />
      </Canvas>
    </>
  )
}

export default HeroPC