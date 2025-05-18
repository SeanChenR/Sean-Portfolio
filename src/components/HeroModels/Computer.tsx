import { useGLTF } from '@react-three/drei'
import type { ComputerProps, GLTFResult } from '../../types/type'

const Computer = ({ isMobile }: ComputerProps) => {
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
        scale={isMobile ? 0.55 : 0.75}
        position={isMobile ? [0, -3, -1.7] : [0, -4.25, -1.5]}
        rotation={[0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

export default Computer