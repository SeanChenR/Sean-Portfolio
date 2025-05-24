import { Environment, useGLTF, Float, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import type { TechStackIconProps } from '../../../types/type'
import { useEffect } from 'react'
import * as THREE from 'three'

const TechIcon = ({ model }: TechStackIconProps) => {
  const { scene } = useGLTF(model.modelPath)

  useEffect(() => {
    if (model.name === "DevOps Engineer") {
      scene.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          (child as THREE.Mesh).material = new THREE.MeshStandardMaterial({
            color: "#157DEC",
          })
        }
      })
    }
  }, [scene, model.name])

  return (
    <Canvas>
      <ambientLight intensity={model.intensity} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      <Environment preset="city" />

      <OrbitControls enableZoom={false} />

      <Float speed={5.5} rotationIntensity={2} floatIntensity={0.9}>
        <group scale={model.scale} rotation={model.rotation} position={model.position}>
          <primitive object={scene} />
        </group>
      </Float>
    </Canvas>
  )
}

export default TechIcon