import React from 'react'
import { useGLTF } from '@react-three/drei'
// import * as THREE from 'three'
import type { GLTFResult } from '../../types/type'

const Computer: React.FC = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf") as unknown as GLTFResult

  return (
    <mesh>
      <hemisphereLight intensity={0.5} groundColor="black" />
      <pointLight intensity={50} />
      <spotLight
        position={[20, -50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={0.75}
        position={[0, -4.25, -1.5]}
        rotation={[0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

export default Computer